import '../styles/blog_item.css'
import db from '../config/firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import { useState } from 'react';
import { useEffect } from 'react';

export default function BlogItem() {
    let [items, setItems] = useState([])
    useEffect(() =>
        onSnapshot(collection(db, "blog-preview content"), (snapshot) =>
            setItems(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ), []);
    return (
        <div className='container'>
            <h1>Latest blogs</h1>
            {
                items.map((item) => (
                    <div className="item">
                        <img src={item.img} />
                        <div className="components">
                            <div style={{ backgroundColor: item.tagBg, color: item.tagColor }} className="tag">
                                <span>{item.tag}</span>
                            </div>
                            <h2>{item.heading}</h2>
                            <p>{item.description}</p>
                            <span>{item.timeStamp}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}