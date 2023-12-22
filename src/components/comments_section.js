import '../styles/latest_blogs.css'
import Comment from './comment';
import React, {useState, useEffect} from 'react';

import { collection, getDocs, addDoc } from "firebase/firestore";
import db from "../config/firebase.js";

const query = collection(db, "comments");
const querySnapshot = await getDocs(query);
const documents = querySnapshot.docs.map(doc => doc.data());

 


const comments_section = (props) => {
  return(
    <div>
      <div >
              <h4>5 comments</h4>
      </div>
      
      {documents.map(doc => (
        <Comment 
          key={doc.id} comment={doc.comment} name={doc.name}
        />))}
              
    </div>
  );
}

export default comments_section;