function Product(props){

    const title=props.product.title;
    
    const firstDescription=props.product.firstDescription;
    const price=props.product.price;
    const secondDescription=props.product.secondDescription;

    return (
    
        <div>
        <div class="card-header bg-dark rounded-0">
          <h3 class="fs-6">{ title }</h3>
        </div>
        <div class="card-body bg-secondary pt-5">
        <p> {firstDescription} <span class="h1 fw-bold">{price}</span> {secondDescription}</p>
          </div>
        </div>


      
    );
}

export default Product;