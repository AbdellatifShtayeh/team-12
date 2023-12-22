import React from 'react'
import './Recent_post_c.css';
function Recent_post() {
  return (
    <div>
      <div class="test">
        <div className="frame" >
          <div className="frame_title">
            <h3 className="card-title">Recent post</h3>
          </div>
          <div className="post">
            <div className="post-title">Ten questions you should answer truthfully</div>
            <div className="timestamp">2hr</div>
          </div>
          <div className="post">
            <div className="post-title">Five unbelievable facts about money</div>
            <div className="timestamp">3hr</div>
          </div>
          <div className="post">
            <div className="post-title">Best Pinterest Boards learning about business</div>
            <div className="timestamp">4hr</div>
          </div>
          <div className="post">
            <div>
              <div className="post-title">Skils that you can learn from business</div>
              <div className="timestamp">6hr</div>
              <div className="view-all">
                <i class="bi bi-three-dots"></i>
                <span>View all latest news</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Recent_post