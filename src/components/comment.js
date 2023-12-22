

const comment = (props) =>{
return (
  <div className="my-4 d-flex">
                <img className="avatar avatar-md rounded-circle float-start me-3" src={props.img} alt='pp' />
                <div>
                  <div className="mb-2 d-sm-flex">
                    <h6 className="m-0 me-2">{props.name}</h6>
                    <span className="me-3 small">  {props.timeStamp} </span>
                  </div>
                  <p>{props.comment}</p>
                  <a href="#" className="btn btn-light btn-sm">Reply</a>
                </div>
              </div>
);
}

export default comment;