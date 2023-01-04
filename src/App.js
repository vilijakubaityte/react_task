import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './components/product';
import productsData from './data/productsData';
import Teacher from './components/teacher';
import teacherData from './data/teacherData';


function App() {

  const prekes = productsData;
  const teacher = teacherData;


  // const products=[];
  // for (let i=0; i < prekes.length; i++){
  //   products.push(
  //   <div class="col-md-4">
  //     <Product product={prekes[i]}></Product>
  //     </div>
  //   );
  // }
  // const productsTwo=[];
  // for (let i=0; i < prekes.length; i++){
  //   productsTwo.push(
  //     <div class="col-md-4">
  //     <ProductTwo product={prekes[i]}></ProductTwo>
  //     </div>
  //   )
  



  return (
  <div>
    <section class="container my-5">
        <h1 class="text-center">Programavimo kursai</h1> 
    </section>

      
    <section class="container my-5">
       
        <div class="gap-4 d-flex row flex-wrap justify-content-around text-center px-4">

        <div class="card col-md-3 col-sm-12 rounded-0 text-light p-0 flex-grow-1" >
          <Product product={prekes[0]}></Product>
        </div>
        <div class="card col-md-3 col-sm-12 rounded-0 text-light p-0 flex-grow-1" >
          <Product product={prekes[1]}></Product>
          </div>
          <div class="card col-md-3 col-sm-12 rounded-0 text-light p-0 flex-grow-1" >
          <Product product={prekes[2]}></Product>
          </div>
          
        </div>
        
    </section>

  <section class="container mt-3">
    <h3 class="text-center">Specialus pasiūlymas</h3>
    <div class="justify-content-center mt-5">
    <div class="d-flex row gap-4 text-center px-3">
    <div class="card col-md-5 col-sm-12 rounded-0 text-light p-0 flex-grow-1" >
    <Product product={prekes[2]}></Product>
    </div>
    <div class="card col-md-5 col-sm-12 rounded-0 text-light p-0 flex-grow-1" >
    <Product product={prekes[2]}></Product>
    </div>
    </div>
    </div>
  </section>





<section class="container my-5 p-0">
  <div class="p-5 bg-light rounded-0 border border-0">
      <h3 class="fw-normal">Mūsų dėstytojai</h3>
      <hr></hr>
    
  
  <div class=" mb-3 d-flex row flex-wrap gap-3 justify-content-between">


      <Teacher teacher={teacher[0]}></Teacher>
      



      <Teacher teacher={teacher[1]}></Teacher>
     


    
      <Teacher teacher={teacher[2]}></Teacher>
      


  
      <Teacher teacher={teacher[3]}></Teacher>
      

</div>
</div>
</section>

</div>
  );
}


export default App;
