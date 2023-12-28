import { collection, getDocs, addDoc } from "firebase/firestore";
import db from "../src/config/firebase.js";
import Blog_preview from '../src/components/blog_preview.js'
import Pagination from "./components/pagination.js";
import NavBar from "../src/config/NavBar.js"
import './styles/main.css'
import  Comments_section from "./components/comments_section.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./components/blog.jsx";
import LeaveReply from "./components/leave_reply.jsx";
import Footer from "./components/Footer.js";
import Recent_post from "./components/Recent_post.js";
import Tags from "./components/Tags.js";
import { useState } from "react";
import WhoToFollow from "./config/Follow_List.js";

const query = collection(db, "blog-preview content");
const querySnapshot = await getDocs(query);
const documents = querySnapshot.docs.map(doc => doc.data());

const pquery = collection(db, "blog-preview content page 2");
const pquerySnapshot = await getDocs(pquery);
const page2content = pquerySnapshot.docs.map(doc => doc.data());

function App() {
    let [page, setPage] = useState(1)

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

    let pageData = page === 1 ? documents : page2content

    return (
        <Router>
            <div style={{ backgroundColor: '#eff2f6', }}>
                <div style={{ backgroundColor: 'white' }}>
                    <NavBar />
                </div>
                <Switch>
                    <div className="main_container">
                        <Route exact path='/'>
                            <div className="page_box">
                                <h1>Latest Blogs</h1>
                                {pageData.map(doc => (
                                    <Blog_preview
                                        key={doc.id} heading={doc.heading} description={doc.description} tag={doc.tag}
                                        tagColor={doc.tagColor} tagBg={doc.tagBg} timeStamp={doc.timeStamp} img={doc.img}
                                    />
                                ))}
                                <Pagination
                                    onPageChange={(page) => setPage(page)}
                                />
                            </div>
                            <div className="small_boxes">
                                <Recent_post />
                                <Tags />
                                <WhoToFollow />
                            </div>
                        </Route>
                        <Route path="/expanded_blog">
                            <div className="expanded_blob_container">
                                <Blog />
                                <LeaveReply onSubmit={handleAddReply} />
                            </div>
                        </Route>
                    </div>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;