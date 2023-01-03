import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <section class="container my-5">
        <h1 class="text-center">Programavimo kursai</h1> 
      </section>


       <section class="container my-5">
       <div class="gap-5 d-flex justify-content-around text-center px-4">


        <div class="card col-3 rounded-0 text-light p-0 flex-grow-1" >
          <div class="card-header bg-dark rounded-0">
            <h3>React kursai</h3>
          </div>
          <div class="card-body bg-secondary pt-5">
            <p>nuo <span class="h1 fw-bold">9.99</span> EUR / mėn</p>
            </div>
        </div>
        
        
        <div class="card col-3 rounded-0 text-light p-0 flex-grow-1" >
          <div class="card-header bg-dark rounded-0">
            <h3>Angular.JS kursai</h3>
            </div>
            <div class="card-body bg-secondary pt-5">
            <p>nuo <span class="h1 fw-bold">29.99</span> EUR / mėn</p>
            </div>
        </div>
        
        
        <div class="card col-3 rounded-0 text-light p-0 flex-grow-1">
          <div class="card-header rounded-0 bg-dark">
            <h3>PHP kursai</h3>
            </div>
            <div class="card-body bg-secondary pt-5">
            <p>nuo <span class="h1 fw-bold">49.99</span> EUR / mėn</p>
            </div>
        </div>

        </div>
        </section>

  <section class="container my-5 p-0">
<div class="p-5 bg-light rounded-0 border border-0">
      <h3 class="fw-normal">Mūsų dėstytojai</h3>
      <hr></hr>
    
  
  <div class=" mb-3 d-flex flex-wrap gap-3 justify-content-between">


  <div class="row g-0 rounded-0 col-5 border p-3 bg-white flex-grow-1">
    <div class="col-md-4">
      <img src="https://media.istockphoto.com/id/892069620/vector/man-face-cartoon.jpg?s=612x612&w=0&k=20&c=1-fio-LkZG-piHwQqiiXErrISub5PEoJswXQcZKWrnM=" class="img-fluid rounded-circle border border-4" alt="..."></img>
    </div>
    <div class="col-md-8">
    <div class="card-body p-3">
              <h5 class="card-title fw-bold my-3">Michael <span class="fw-normal">Deo</span></h5>
              <p class="card-text">
                <p class="my-0">UI UX Designer</p>
              <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
              </p>
            </div>
    </div>
  </div>

  <div class="row g-0 rounded-0 col-5 border p-3 bg-white flex-grow-1">
    <div class="col-md-4">
      <img src="https://img.freepik.com/premium-vector/african-american-woman-avatar-with-glasses-portrait-young-girl-vector-illustration-face_217290-363.jpg?w=2000" class="img-fluid rounded-circle border border-4" alt="..."></img>
    </div>
    <div class="col-md-8">
    <div class="card-body p-3">
              <h5 class="card-title fw-bold my-3">Michael <span class="fw-normal">Deo</span></h5>
              <p class="card-text">
                <p class="my-0">UI UX Designer</p>
              <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
              </p>
            </div>
    </div>
  </div>

  <div class="row g-0 rounded-0 col-5 border p-3 bg-white flex-grow-1">
    <div class="col-md-4">
      <img src="https://st3.depositphotos.com/1007566/15037/v/450/depositphotos_150370008-stock-illustration-cartoon-man-icon-face-isolated.jpg" class="img-fluid rounded-circle border border-4" alt="..."></img>
    </div>
    <div class="col-md-8">
    <div class="card-body p-3">
              <h5 class="card-title fw-bold my-3">Michael <span class="fw-normal">Deo</span></h5>
              <p class="card-text">
                <p class="my-0">UI UX Designer</p>
              <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
              </p>
            </div>
    </div>
  </div>

  <div class="row g-0 rounded-0 col-5 border p-3 bg-white flex-grow-1">
    <div class="col-md-4">
      <img src="https://as2.ftcdn.net/v2/jpg/01/43/80/31/1000_F_143803171_E7eFAwizVvKZw7me2faaGsohNJqNqqyv.jpg" class="img-fluid rounded-circle border border-4" alt="..."></img>
    </div>
    <div class="col-md-8">
    <div class="card-body p-3">
              <h5 class="card-title fw-bold my-3">Michael <span class="fw-normal">Deo</span></h5>
              <p class="card-text">
                <p class="my-0">UI UX Designer</p>
              <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
              </p>
            </div>
    </div>
  </div>


</div>
</div>
  </section>

    </div>
  );
}

export default App;
