function Teacher(props){

    const name = props.teacher.name;
    const lastName=props.teacher.lastName;
    const profession=props.teacher.profession;
    const address=props.teacher.address;
    const image=props.teacher.image;
    

    return (
    <div class="row g-0 rounded-0 border p-3 bg-white flex-grow-1 col-md-5">
      <div class="col-md-4">
      <img src={image} class="img-fluid rounded-circle border border-4" alt="..."></img>
      </div>
    <div class="col-md-8">
    <div class="card-body p-3">
              <h5 class="card-title fw-bold my-3"> {name} <span class="fw-normal">{lastName}</span></h5>
              <p class="card-text">
                <p class="my-0">{profession}</p>
              <p>{address}</p>
              </p>
            </div>
          </div>
    </div>
  
    );

}

export default Teacher;