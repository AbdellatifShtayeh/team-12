
import { onSnapshot, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../config/firebase";
import React from "react";
import './Tags.css';

const Tags = () => {

  const [Tags, setTags] = useState([]);
  console.log(Tags);
  useEffect(
    () =>
      onSnapshot(collection(db, "Tags"), (snapshot) =>
        setTags(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),

    []);

  const handleNew = async () => {
    const name = prompt("Enter tag name");

    const collectionRef = collection(db, "Tags");
    if (name !== "") {
      const payload = { name };
      const docRef = await addDoc(collectionRef, payload);
      console.log("The new id is : " + docRef.id);
    }

  };

  return (
    <div className="tags-container">
      <h5>Tags</h5>
      <div className="tags">
        {Tags.map((tag, index) => (
          <button onClick={handleNew} key={index} type="button" className="tag-button">
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tags;
