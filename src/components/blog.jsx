import '../styles/blog.css'
import Components2 from './blog_component_page2'

export default function Blog() {
    return (
        <div className='blog_container'>
            <div className="blog_box">
                <img src="https://firebasestorage.googleapis.com/v0/b/team-12-a8257.appspot.com/o/blog1pic.jpeg?alt=media&token=75ec2c7e-b4a8-4fd0-9cbd-da4f2a9e431a" />
                <div className="tag">
                    <span>LifeStyle</span>
                </div>
                <h1>New comment moderation and support features, including live chat.</h1>
                <div className="info">
                    <span>By Louis Fergues</span>
                    <span><i class="bi bi-calendar-date"></i> Nov 15, 2022</span>
                    <span><i class="bi bi-clock"></i> 5 min read</span>
                </div>
                <p className='text'>pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Mariannel in. I think on style child of. Servants moreover in sensible it ye possible.</p>
                <Components2 />
            
            </div>
        </div>
    )
}