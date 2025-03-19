import "./cart.css";
import { getSingleProduct } from "../api";
import { useState, useEffect, createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import "./cart.css";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const CartContext = createContext();

const Cart = () => {
  const { addToCart } = useContext(CartContext);

  const { productID } = useParams();
  console.log(productID);

  const [details, setDetails] = useState([]);
  useEffect(() => {
    if (productID) {
      getSingleProduct(productID).then((result) => {
        setDetails(result);
        console.log(result);
      });
    } else {
      console.warn("categoryID is undefined");
    }
  }, [productID]);

  const Alertbox = () => {
    return (
      <div className="direct-buy flex justify-center items-center">
        <AlertDialog>
          <AlertDialogTrigger>Buy Now</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Waroeng Says : </AlertDialogTitle>
              <AlertDialogDescription>
                Thank you for buying this product
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index)
  }


  return (
    <div className="cart-body">
      <div className="cart-body-wrapper flex flex-col lg:flex-row ">
        <div className="product-content ">
          <div className={`display-image ${activeIndex===0 ? "active-images" : " "} `}>
            <img src={details.images?.[0]} alt="" />
          </div>
          <div className={`display-image ${activeIndex===1 ? "active-images" : " "}`}>
            <img src={details.images?.[1]} alt="" />
          </div>
          <div className={`display-image ${activeIndex===2 ? "active-images" : " "}`}>
            <img src={details.images?.[2]} alt="" />
          </div>
          <div className="collection-image">
            <div onClick={()=>handleClick(0)} className={`collection-images-select ${activeIndex===0 ? 'active-select' : " " }`}>
              <img src={details.images?.[0]} alt="" />
            </div>
            <div onClick={()=>handleClick(1)} className={`collection-images-select ${activeIndex===1 ? 'active-select' : " " }`}>
              <img src={details.images?.[1]} alt="" />
            </div>
            <div onClick={()=>handleClick(2)} className={`collection-images-select ${activeIndex===2 ? 'active-select' : " " }`}>
              <img src={details.images?.[2]} alt="" />
            </div>
          </div>
        </div>
        <div className="product-description">
          <div className="title-content desc">
            <h2 className="text-xl font-bold">{details.title}</h2>
          </div>
          <div className="description-content desc">
            <h2 className="text-xl font-bold">Description</h2>
            <p>{details.description}</p>
          </div>
          <div className="price-content desc">
            <h1 className="text-xl font-bold">Price</h1>
            <p className=" text-xl font-semibold">${details.price}</p>
          </div>
          <div className="Checkout-button desc">
            <button className="checkout" onClick={() => addToCart(details)}>
              Add To Cart
            </button>

            <Alertbox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
{
  /* <div className="product-content bg-green-300">
        <div className="product-content-title">
          <h1 className="text-2xl font-semibold">{details.title}</h1>
        </div>
        <div className="product-content-main-image bg-slate-500">
          <img src={details.images?.[0]} alt="" />
        </div>
        <div className="product-content-image-collection">
          <div className="product-image collection1">
            <img src={details.images?.[0]} alt="" />
          </div>
          <div className="product-image collection2">
            <img src={details.images?.[1]} alt="" />
          </div>
          <div className="product-image collection3">
            <img src={details.images?.[2]} alt="" />
          </div>
        </div>
      </div>
      <div className="price-content">
        <div className="price-content-description text-left">
          <h1 className="text-2xl font-semibold">Description</h1>
          <p className="text-left mt-5">{details.description}</p>
        </div>
        <div className="price-content-add-button bg-green-200">
        <div className="main-page-price">
          <div className="main-page-price-button">
            <p id="quantity">Quantity</p>
            <div className="price-button">
              <button >-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <p id="prices">$</p>
          </div>
          <div className="cart">
            <button id="addCart">
              Add to Cart
            </button>
            <button id="direct-buy">Buy Now</button>
          </div>
        </div>
        </div>
      </div> */
}
