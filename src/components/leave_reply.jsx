import { useState } from 'react';
import '../styles/leave_reply.css';

import Comments_section from './comments_section';


export default function LeaveReply(props) {
  let [data, setData] = useState({
    name: '',
    email: '',
    comment: '',
  })

  function handlePost() {
    if(props.onSubmit) {
      props.onSubmit(data)
    }
    setData({
      name: '',
      email: '',
      comment: '',
    })
  }
  return ( 
    <div className="reply_container">
      <div className="reply_box">
         
         <Comments_section />
      
      <hr className="my-4" />    
        <h1>Leave a reply</h1>
        <div className="reply_row">
            <div className="reply_item">
                <span>Name *</span>
                <input 
                  className='reply_input' 
                  type="text"
                  value={data.name}
                  onChange={(e) => setData({...data, name: e.target.value})}
                />
            </div>
            <div className="reply_item">
                <span>Email *</span>
                <input 
                  className='reply_input' 
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({...data, email: e.target.value})}
                />
            </div>
        </div>
        <div className="reply_row">
            <div className="reply_item">
                <span>Your Comment *</span>
                <textarea 
                className='reply_textarea'
                value={data.comment}
                onChange={(e) => setData({...data, comment: e.target.value})}
                >
                {data.comment}
                </textarea>
            </div>
        </div>
        <div className="check">
            <input type="checkbox" />
            <span>Save my name and email in this browser for the next time I comment.</span>
        </div>
        <button onClick={handlePost} className='reply_button'>Post comment</button>
      </div>
    </div>
  );
}