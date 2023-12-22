import './Tasck3.css'; 
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot } from "firebase/firestore"; 
import db from "./firebase"; 

function Account({name, description, imgSrc, isFollowing}) {
  return (
    <div class="tt">
      <div className="account">
        <img src={imgSrc} alt={name} className="profile-pic" />
        <div className="account-details">
          <h2 className="account-name">{name}</h2>
          <p className="account-description">{description}</p>
        </div>
        {isFollowing ? (
          <button className="follow-btn followed">
            <div><svg xmlns="http://www.w3.org/2000/svg" color='white' width="16" height="16" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg></div>
          </button>
        ) : (
          <button className="follow-btn">
            +
          </button>
        )}
      </div>
    </div>
  );
}

function WhoToFollow() {
  const [accounts, setAccounts] = useState([]); 

  useEffect(() => {
    const db = getFirestore();
    const accountsRef = collection(db, "Who to follow");
    const unsubscribe = onSnapshot(accountsRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
      setAccounts(data);
    });
   
    return () => unsubscribe();
  }, []); 

  return (
    <div class="tt">
      <div className="who-to-follow">
        <h3>Who to Follow</h3>
        {accounts.map((account) => (
         
          <Account key={account.id} name={account.name} description={account.description} imgSrc={account.imgSrc} isFollowing={account.isFollowing} />
        ))}
      </div>
    </div>
  );
}

export default WhoToFollow;
