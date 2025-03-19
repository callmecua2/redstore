import "../App.css";
import "./main.css";
import { getProducts } from "../api";
import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";

const Main = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
      console.log(result);
    });
  }, []);
  
  return (
    <>
      <div className="container">
        <div className="main-content w-full flex justify-center items-center flex-col-reverse lg:flex-row lg:items-start ">
          <div className="left-content flex items-start flex-col w-4/5 sm:w-full ">
            <div className="Clothing w-full h-full flex justify-center flex-wrap">
              {products.map((item) => {
                return (
                 <Link to={`/product/${item.id}`} key={item.id}>
                 <div key={item.id}>
                    <div
                    className="inner-products w-[250px] h-[400px] sm:w-[250px] sm:h-[450px] sm:ml-4 sm:mr-4 lg:h-[450px] lg:ml-7 lg:mr-7 xl:h-[450px] bg-slate-500 ml-2 mr-2 mt-5 mb-5 relative"
                    >
                      <span className="pricing">
                        <span>$ {item.price}</span>
                      </span>
                      <img
                        src={item.images[0]}
                        alt="image"
                        className="w-full h-64 sm:h-72"
                      />
                      <p className="mt-2 sm:mt-5">{item.title}</p>
                      <button  className="absolute bottom-0 w-2/3 h-10 mt-5 sm:mt-7 sm:h-14 rounded-md bg-yellow-300 cursor-default">
                        Add to Cart
                      </button>
                      
                    </div>
                  </div>
                 </Link>
                );
              })}
            </div>
          </div>
          <div className="right-content w-full h-96 text-left flex justify-center sm: lg:w-2/5 lg:mt-5 xl:mt-2">
            <Filter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

{
  /* <div className="card bg-base-100 w-96 shadow-xl">
                  <figure>
                    <img
                      src={item.images[0]}
                      alt="image"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div> */
}
