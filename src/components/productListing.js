import { products } from "./data";

export function ProductListing(){

    return (
      <div className="container">
        <h1>Products</h1>
        <div className="cards-section">
          {products.map((item)=> (
            <div className="card">
              <img className="card-img" src={item.img} alt="" />
              <div className="card-info">
                <div>
                  <p className="card-title">{item.name}</p>
                  <small className="card-price">Rs.{item.price}</small>
                </div>
                <button className="button button-primary card-add-to-cart">Add to Cart</button>
              </div>
              
            </div> 
          ))}
        </div>
      </div>
    )
  }