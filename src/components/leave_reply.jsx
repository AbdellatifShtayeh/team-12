import '../styles/leave_reply.css';

export function LeaveReply(props) {
  return (
    <div className="reply_container">
      <div className="reply_box">
        <h1>Leave a reply</h1>
        <div className="reply_row">
            <div className="reply_item">
                <span>Name *</span>
                <input className='reply_input' type="text" />
            </div>
            <div className="reply_item">
                <span>Email *</span>
                <input className='reply_input' type="email" />
            </div>
        </div>
        <div className="reply_row">
            <div className="reply_item">
                <span>Your Comment *</span>
                <textarea className='reply_textarea'></textarea>
            </div>
        </div>
        <div className="check">
            <input type="checkbox" />
            <span>Save my name and email in this browser for the next time I comment.</span>
        </div>
        <button className='reply_button'>Post comment</button>
      </div>
    </div>
  );
}