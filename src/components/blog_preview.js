import '../styles/latest_blogs.css'
import { Link } from 'react-router-dom'


const blog_previwe = (props) => {
  return (
    <div key={props.id}>
      {/* Blog item START */}
      <div className="card bg-transparent border-0">
        <div className="row g-3">
          <div className="col-4">
            {/* Blog image */}
            <img className="rounded" src={props.img} style={{objectFit:'cover'}} />
          </div>
          <div className="col-8">
            {/* Blog caption */}
            <a href="#!" className="badge  bg-opacity-10  mb-2  font-weight-bold" style={{ backgroundColor: props.tagBg, color: props.tagColor }}>{props.tag}</a>
            <h5><Link to="/expanded_blog" className="btn-link stretched-link text-primary font-weight-bold ">{props.heading}</Link></h5>
            <div className="d-none d-sm-inline-block">
              <p className="mb-1" style={{ color: '#86898c' }}>{props.description}</p>
              {/* BLog date */}
              <a className="small text-secondary" href="#!"> <i className="bi bi-calendar-date pe-1" /> {props.timeStamp}</a>
            </div>
          </div>
        </div>
      </div>
      {/* Blog item END */}
      <hr className="my-4" />
    </div>

  );
} 


 

export default blog_previwe;