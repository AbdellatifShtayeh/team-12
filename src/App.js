import { collection, getDocs, addDoc } from "firebase/firestore";
import db from "../src/config/firebase.js";
import Blog_preview from '../src/components/blog_preview.js'
import Pagination from "./components/pagination.js";
import NavBar from "../src/config/NavBar.js"


import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min.js";
import Blog from "./components/blog.jsx";
import LeaveReply from "./components/leave_reply.jsx";

//fitch data from db to page 1
const query = collection(db, "blog-preview content");
const querySnapshot = await getDocs(query);
const documents = querySnapshot.docs.map(doc => doc.data());

//fitch data from db to page 2
const pquery = collection(db, "blog-preview content page 2");
const pquerySnapshot = await getDocs(pquery);
const page2content = pquerySnapshot.docs.map(doc => doc.data());

function App() {

  async function handleAddReply(data) {
    const now = new Date();
    const formattedTime = now.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });

    const docRef = await addDoc(collection(db, "comments"), {
      comment: data.comment,
      name: data.name,
      timeStamp: formattedTime,
    });
    console.log(docRef)
  }

  return (
    <>
      <Router>
        <div style={{ backgroundColor: '#eff2f6' }}>
          <div style={{ backgroundColor: 'white' }}>
            <NavBar />
          </div>
          {/* content alligning for the first page */}
          <div className='container' >
            <div className="col-lg-8" >
              <div className="bg-mode p-4" style={{ backgroundColor: 'white' }}>
                {/* starting of blogs */}
                <Switch>
                  <Route exact path='/page-1'>
                    {documents.map(doc => (

                      <Blog_preview
                        key={doc.id} heading={doc.heading} description={doc.description} tag={doc.tag}
                        tagColor={doc.tagColor} tagBg={doc.tagBg} timeStamp={doc.timeStamp} img={doc.img}
                      />
                    ))}
                    <Pagination />
                  </Route>
                  {/* ending of blogs page 1 */}
                  {/* page 2 */}
                  <Route path='/page-2'>
                    {page2content.map(doc => (

                      <Blog_preview
                        key={doc.id} heading={doc.heading} description={doc.description} tag={doc.tag}
                        tagColor={doc.tagColor} tagBg={doc.tagBg} timeStamp={doc.timeStamp} img={doc.img}
                      />
                    ))}
                    <Pagination />
                  </Route>
                  <Route path="/expanded_blog">
                    <Blog />
                    <LeaveReply onSubmit={handleAddReply} />
                  </Route>
                </Switch>
                {/* page navigation */}
              </div>
            </div>
          </div>
        </div>
      </Router>



    </>
  );
}

export default App;