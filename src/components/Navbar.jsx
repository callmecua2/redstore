import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useContext } from "react";
import { CartContext } from "@/Pages/Cart";
import cartIcon from "../assets/cartIcon.png"



const Navbar = () => {

  const { cartItem, setCartItem } = useContext(CartContext);

  const increment = (id) => {
    const updateUnit = cartItem.map((item) => {
      if(item.id === id) {
        return { ...item, unit: item.unit + 1 };
      }
      return item;
    })
    setCartItem(updateUnit)
  }

  const decrement = (id) => {
    const updateUnit = cartItem.map((item) => {
      if(item.id === id) {
        return { ...item, unit: Math.max(0, item.unit - 1) };
      }
      return item;
    })
    setCartItem(updateUnit)
  }


  const calcPrice = (unit, price) => {
    if(increment) {
      return unit * price
    }
    if(decrement) {
     return unit / price
    }
  }

  const deleteItems = () => {
    localStorage.clear(cartItem)
    location.reload
  }



  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link onClick={() => window.top(0, 0)} to={`/`}>
          <p className="btn btn-ghost text-xl">Waroeng</p>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div>
          <Sheet className="relative">
            <p className="absolute right-3 top-0 pl-3 pt-2 pr-3 pb-2 text-red-500  text-2xl font-bold bg-white rounded-[50%] z-[1] ">{cartItem.length}</p>
            <SheetTrigger><img className="w-[60px] h-[60px] mr-5 " src={cartIcon} alt="as" /></SheetTrigger>
            <SheetContent className="min-h-screen overflow-y-scroll">
              <SheetHeader>
                <SheetTitle>Your Cart</SheetTitle>
                <SheetDescription>
                  Make sure you check your item
                  before checkout
                </SheetDescription>
                <div className="cart-components w-full">
                  <div className="items-component flex flex-col items-center">
                    {cartItem.map((item) => {
                      return(
                        <div className="card-items-component w-3/4 mt-5 flex flex-col items-center border-2 border-black rounded-xl" key={item.id}>
                          <div className="card-items-images w-4/6">
                            <p className="text-center">{item.title}</p>
                            <img className="w-full rounded-xl mt-3" src={item.images[0]} alt="img" />
                            <div className="value-button flex justify-center items-center">
                            <button className="w-10 font-bold text-xl" onClick={()=>increment(item.id)}>&#43;</button>
                            <p className="text-xl">{item.unit}</p>
                            <button className="w-10 font-bold text-xl" onClick={()=>decrement(item.id)} >&#8722;</button>
                            </div>
                            <p className="text-center text-xl font-bold">Price : ${calcPrice(item.unit, item.price)}</p>
                          </div>
                          <button className="w-2/3 h-10 bg-slate-500 mt-4 mb-4 rounded-sm text-xl font-semibold">Buy Now</button>
                        </div>
                      )
                    })}
                  </div>
                  <div className="cart-button w-full h-30 flex flex-col items-center mt-5 gap-3">
                    <button className="w-4/6 h-12 rounded-md bg-black text-white border-2 " onClick={()=>deleteItems()}>Buy Now</button>
                  </div>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
