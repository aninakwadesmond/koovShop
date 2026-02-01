import { useEffect, useState } from "react";
import CardSeller from "../components/CardSeller";
import LoadingCart from "../components/LoadingCart.jsx";
import axios from "axios";
import { Audio, Oval } from "react-loader-spinner";
import { useLocation } from "react-router-dom";
import {
  emptyshopProducts,
  setQuery,
  setShopProducts,
} from "../Slice/Feautures/Categories.jsx";
import { useDispatch, useSelector } from "react-redux";

const dummyCategory = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

function AllProducts() {
  const [pages, setPages] = useState(0);
  const [shop, setShop] = useState([]);
  const [load, setLoad] = useState(false);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  //onMount empty cartContainer
  useEffect(() => {
    dispatch(emptyshopProducts());
  }, []);
  const { query, shopProducts } = useSelector((state) => state.categories);

  console.log("hello i am loaded this is query", query, shopProducts);

  useEffect(() => {
    // dispatch to update redux toolkit
    dispatch(setQuery(location.pathname.split("/")[2]));
    // setQuery(false);
    console.log("your query", query, location.pathname);
  }, [query, location, dispatch]);

  useEffect(() => {
    function onScroll() {
      console.log(window.document.documentElement.scrollHeight);
      console.log(window.document.documentElement.scrollTop);
      console.log(window.innerHeight);

      if (
        window.innerHeight + window.document.documentElement.scrollTop + 1 >=
        window.document.documentElement.scrollHeight - window.innerHeight + 600
      ) {
        // trigger another load
        setPages((prev) => prev + 1);
        console.log("moving down to activate another load");
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    async function fetchData() {
      setLoad(true);
      console.log("query to search", query);
      const { data } = await axios.get(
        `https://dummyjson.com/products${query !== "all" ? `/category/${query}` : ""}?limit=12&skip=${pages}`,
      );
      console.log("data", data, "pages", pages);
      dispatch(setShopProducts(data.products));
      // setShop((prev) => [...prev, ...data.products]);
      setLoad(false);
    }
    fetchData();
  }, [pages, query]);
  return (
    <>
      {modal && <Sorting modal={modal} />}
      <div className="flex-cols fixed right-2 bottom-20 gap-2">
        <ControlButton setModal={setModal}>sort</ControlButton>
        <ControlButton>filter</ControlButton>
      </div>
      <div className="mx-auto my-10 grid w-[95%] grid-cols-2 gap-3">
        {shopProducts.map((product) => (
          <CardSeller product={product} />
        ))}
        {load && <LoadingCart />}
        {load && <LoadingCart />}
      </div>
      {load && <LoaderSpinner />}
    </>
  );
}

function LoaderSpinner() {
  return (
    <div className="flex-cols-center">
      <Oval
        width={40}
        height={40}
        color="#4fa94d"
        ariaLabel="audio-label"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

function ControlButton({ children, setModal }) {
  return (
    <button
      className="z-50 h-12 w-12 cursor-pointer rounded-full bg-[#fff] p-2 text-[10px] font-bold text-gray-900 uppercase shadow-md shadow-gray-400 duration-300 active:translate-y-2"
      onClick={() => setModal((prev) => !prev)}
    >
      {children}
    </button>
  );
}

function Sorting({ modal }) {
  return (
    <>
      <div className="fixed top-10 h-full w-full bg-linear-to-r from-gray-500 to-gray-400/50"></div>
      <div
        className={`transition-x-0 fixed top-10 bottom-10 left-0 z-10 h-full w-[70%] transform bg-amber-200 transition-all duration-1000 ease-in-out`}
        // style={modal ? { transform: "translateX(0) " } : {}}
        style={{
          animation: modal
            ? "slideIn 1000ms ease forwards"
            : "slideOut 1000ms ease forwards",
        }}
      ></div>
    </>
  );
}

export default AllProducts;
