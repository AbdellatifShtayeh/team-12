
import { collection, getDocs } from "firebase/firestore";
import db from "../src/config/firebase.js";
import Blog_preview from '../src/components/blog_preview.js'
import Pagination from "./components/pagination.js";
import NavBar from "../src/config/NavBar.js" 

import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min.js";

//fitch data from db to page 1
const query = collection(db, "blog-preview content");
const querySnapshot = await getDocs(query);
const documents = querySnapshot.docs.map(doc => doc.data());

//fitch data from db to page 2
const pquery = collection(db, "blog-preview content page 2");
const pquerySnapshot = await getDocs(pquery);
const page2content = pquerySnapshot.docs.map(doc => doc.data());

  

function App() {

  return (
    <>
      <Router>
        <NavBar />
        {/* content alligning for the first page */}
        <div className='container'>
          <div className="col-lg-8">
            <div className="bg-mode p-4">
              {/* starting of blogs */}
              <Switch>
                <Route exact path='/page-1'>
                  {documents.map(doc => (

                    <Blog_preview
                      key={doc.id} heading={doc.heading} description={doc.description} tag={doc.tag}
                      tagColor={doc.tagColor} tagBg={doc.tagBg} timeStamp={doc.timeStamp} img={doc.img}
                    />
                  ))}
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
                </Route>
              </Switch>
              {/* page navigation */}
              <Pagination />
            </div>
          </div>
        </div>
      </Router>

    

    </>
  );
}

export default App;
