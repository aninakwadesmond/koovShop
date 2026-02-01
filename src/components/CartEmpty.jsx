import {
  faCarBurst,
  faCartShopping,
  faCheck,
  faCheckCircle,
  faCheckDouble,
  faCheckToSlot,
  faMinus,
  faPhone,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import CardSeller from "./CardSeller";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function CartEmpty() {
  const { pathname } = useLocation();
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <div className="">
      {cartItems.length >= 1 ? <CartItems /> : <NoCartItem />}
    </div>
  );
}

function CartItems() {
  const { cartItems } = useSelector((state) => state.cart);
  // console.log("cartItems", cartItems);
  return (
    <div className="flex-col-start w-full gap-2 bg-gray-950/10">
      <div className="flex-col-start w-full gap-1 px-3">
        <p className="mt-4 text-sm font-semibold text-gray-950/60 uppercase">
          cart summary
        </p>
      </div>
      <div className="flex-col-start bg-text-color w-full py-2">
        <div className="flex-rows-between w-full px-3">
          <p className="text-md font-semibold text-gray-950/80 capitalize">
            subtotal
          </p>
          <p className="text-md font-bold uppercase">GHC 3,300</p>
        </div>
        <div className="flex-row-center gap-1 px-2 py-1">
          <FontAwesomeIcon icon={faCheckToSlot} className="text-emerald-400" />
          <p className="flex-col-start -gap-1 flex text-[11px] font-semibold tracking-wide text-gray-900/90">
            <span>karova items are eligible for free delivery</span>
            <span className="text-[12px] uppercase">
              karova{" "}
              <FontAwesomeIcon
                icon={faCarBurst}
                className="text-primary-color"
              />{" "}
              <span className="text-primary-color">express</span>
            </span>
          </p>
        </div>
      </div>
      <div className="flex-col-start w-full gap-2">
        <p className="px-3 text-sm font-semibold tracking-wide text-gray-950/50 uppercase">
          cart ({cartItems.length})
        </p>
        {cartItems.map((cart) => (
          <SingleCartItem cart={cart} />
        ))}

        {/* <SingleCartItem />
        <SingleCartItem />
        <SingleCartItem /> */}
        <div className="flex-rows-between fixed bottom-14 z-50 h-10 w-full gap-2 bg-amber-50 px-3 py-1 shadow shadow-gray-950/10">
          <div className="flex-col-center border-primary-color h-full rounded-sm border px-2">
            <FontAwesomeIcon icon={faPhone} className="text-md" />
          </div>
          <button className="bg-primary-color text-text-color/85 h-full w-full cursor-pointer rounded-sm text-center text-sm font-bold tracking-wide capitalize">
            checkout (GHC 198.96)
          </button>
        </div>
      </div>
      <div className="flex-cols mt-3 w-full bg-white">
        <div className="flex w-full items-center justify-between px-3">
          <span className="py-1 text-sm font-semibold tracking-wide text-gray-900/60">
            Recommended for you
          </span>
          <Link className="text gray-900/60 text-primary-color text-sm font-semibold tracking-wide capitalize">
            see all
          </Link>
        </div>
        {/* swipper needed here  */}
        {/* <CardSeller/> */}
      </div>
      <div className="flex-cols mt-3 w-full bg-white">
        <div className="flex-rows-between w-full px-3">
          <span className="py-1 text-sm font-semibold tracking-wide text-gray-900/60">
            Customers also viewed
          </span>
          {/* <Link className="text gray-900/60 text-primary-color text-sm font-semibold tracking-wide capitalize">
            see all
          </Link> */}
        </div>
        {/* swipper needed here  */}
        {/* <CardSeller/> */}
      </div>
    </div>
  );
}

function SingleCartItem({ cart }) {
  const { thumbnail: image, description, price, discountPercentage } = cart;
  const oldPrice = price / (1 - discountPercentage / 100);
  return (
    <div className="bg-text-color w-full flex-col gap-4 px-3 py-2">
      <div className="flex-row-start w-full gap-1">
        <p className="h-25 w-[30%]">
          <img
            src={image}
            alt="image-card"
            className="h-full w-full object-contain"
          />
        </p>
        <div className="w-[70%] flex-col gap-1">
          <p className="line-clamp-2 flex-wrap text-[12px] text-gray-950/60">
            {description}
          </p>
          <p className="flex-rows gap-3">
            <span className="text-sm font-bold uppercase">GHC {price}</span>
            <span className="text-[12px] text-gray-900/40 uppercase line-through">
              GHC {oldPrice.toFixed(2)}
            </span>
          </p>
          <p className="text-[12px] font-semibold tracking-wide text-gray-900/60 capitalize">
            in stock
          </p>
          <span className="text-[11px] font-semibold uppercase">
            karova
            <FontAwesomeIcon icon={faCarBurst} className="text-primary-color" />
            <span className="text-primary-color">express</span>
          </span>
        </div>
      </div>
      <div className="flex-rows-between mt-4">
        <button className="flex-rows text-primary-color cursor-pointer gap-2">
          <FontAwesomeIcon icon={faTrashCan} />
          <span className="text-sm font-semibold tracking-wide capitalize">
            Remove
          </span>
        </button>
        <div className="flex-rows gap-1">
          <ButtonAction icon={faMinus} />
          <InputQuantity />
          <ButtonAction icon={faPlus} />
        </div>
      </div>
    </div>
  );
}

function ButtonAction({ icon }) {
  return (
    <button className="bg-primary-color h-6 w-6 cursor-pointer rounded-sm shadow shadow-gray-950/20 duration-300 active:translate-y-1">
      <FontAwesomeIcon icon={icon} className="text-text-color" />
    </button>
  );
}

function InputQuantity() {
  return (
    <input
      type="number"
      className="no-spinner h-6 w-20 rounded-sm border border-gray-950/20 text-center font-semibold tracking-wide text-gray-950/70 shadow shadow-gray-950/10 outline-0"
    />
  );
}

function NoCartItem() {
  return (
    <div className="flex-col-center w-full bg-gray-300/30 py-5">
      <div className="flex-col-center w-full gap-1">
        <p className="bg-secondary-color flex-col-center h-25 w-25 rounded-full p-1">
          <FontAwesomeIcon icon={faCartShopping} className="p-2 text-[3rem]" />
        </p>
        <div className="flex-col-center mx-auto gap-1">
          <p className="text-md font-semibold text-gray-950/80">
            Your cart is empty!
          </p>
          <p className="text-sm">
            Browse our categories and discover our best deals!
          </p>
        </div>
        <Link
          className="bg-primary-color text-text-color/85 mx-auto mt-4 w-[95%] rounded-sm p-2 text-center font-bold tracking-wide capitalize shadow shadow-gray-950/20"
          to="/shop/all"
        >
          Start shopping
        </Link>
      </div>
    </div>
  );
}

export default CartEmpty;
