import {
  faHeart,
  faMinus,
  faPlus,
  faShare,
  faShareNodes,
  faStar,
  faUsersRectangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardSeller from "../components/CardSeller";
import LoadingCart from "../components/LoadingCart";
import {
  Audio,
  Oval,
  TailSpin,
  ThreeCircles,
  ThreeDots,
} from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { addCartItems } from "../Slice/Feautures/Cart";

function Details() {
  const { productDetails } = useSelector((state) => state.details);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  function addToChart() {
    console.log("current details", productDetails);
    dispatch(addCartItems(productDetails));
  }

  const {
    thumbnail: image,
    price,
    description,
    category,
    rating,
    reviews,
  } = productDetails;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div div className="flex-col gap-1 bg-gray-900/2">
      <div className="flex-col-start h-full w-full">
        <div className="h-60 w-full">
          <img src={image} alt="image-details" className="h-full w-full" />
        </div>
        <div className="flex-col-start">
          <div className="flex-cols mx-auto w-[100%] gap-1 bg-white p-2 pt-4">
            <div className="flex-rows-between w-full">
              <p className="text-md font-bold tracking-wide text-gray-900">
                ${price}
              </p>
              <div className="flex items-start justify-start gap-1">
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faShareNodes} />
              </div>
            </div>
            <div className="flex-cols">
              <p className="line-clamp-1 text-[12px] font-semibold capitalize">
                {description}
              </p>
              <p className="line-clamp-1 text-[12px] font-semibold text-gray-900/70 uppercase">
                {category}
              </p>
            </div>
            <div className="flex-rows-between w-full">
              <div className="flex items-center justify-start gap-1">
                <div className="flex-row-start">
                  {Array.from({ length: 5 }, (_, i) => i).map((el) => (
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-[10px] text-yellow-300/70"
                    />
                  ))}
                </div>
                <p className="text-[11px] text-gray-900/60">
                  ({`${reviews.length} review${reviews.length > 1 ? "s" : ""}`})
                </p>
              </div>
              <button className="text-semibold cursor-pointer text-[11px]">
                Write a Review
              </button>
            </div>
          </div>
          <div className="flex-cols -50 mx-auto mt-4 w-[100%] gap-1 bg-white p-2">
            <div className="flex-cols w-full">
              <p className="text-[14px] font-semibold text-gray-900/70 capitalize">
                Options
              </p>
              <div className="flex-cols my-2 w-full">
                <p className="text-sm font-semibold capitalize">colour:</p>
                <select
                  name="colour-code"
                  id=""
                  className="w-full cursor-pointer rounded-sm border border-gray-900/20 p-1 shadow shadow-gray-950/10 outline-0"
                >
                  <option value="blue">
                    <div className="flex-row-start gap-1">
                      <p className="bg-primary-color h-10 w-10 rounded-sm"></p>
                      blue
                      <FontAwesomeIcon icon={faUsersRectangle} />
                    </div>
                  </option>
                </select>
                <div className="flex-rows my-3 gap-3">
                  {Array.from({ length: 5 }, (_, i) => i).map((color) => (
                    <button className="bg-primary-color h-6 w-6 cursor-pointer rounded-sm shadow shadow-gray-900/20"></button>
                  ))}
                </div>
              </div>
              <div className="flex-cols gap-2">
                <p className="text-sm font-semibold capitalize">Size: </p>
                <div className="flex-rows flex-wrap gap-4">
                  {[
                    "XSmall",
                    "Small",
                    "Meduim",
                    "Large",
                    "XLarge",
                    "2XLarge",
                  ].map((size) => (
                    <SizeButton>{size}</SizeButton>
                  ))}
                </div>
              </div>
              <div className="flex-rows-between mt-14 w-full border-t-[0.5px] border-gray-950/20 pt-2">
                <p className="text-sm text-gray-800/70 capitalize">
                  Quantity :
                </p>
                <div className="flex-rows gap-1">
                  <StateButton icon={faMinus} />
                  <input
                    type="number"
                    defaultValue={1}
                    className="no-spinner w-15 rounded-md border-[0.5px] border-gray-300/70 px-2 text-center text-sm font-bold text-gray-500 shadow shadow-gray-800/20 outline-0"
                  />
                  <StateButton icon={faPlus} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col-start mx-auto mt-8 w-[100%] gap-1 bg-white p-4">
        <div className="flex-rows-between w-full">
          <p className="text-sm font-semibold tracking-wide text-gray-900/50 capitalize">
            1 Review
          </p>
          <button className="cursor-pointer text-[12px] tracking-tight text-red-400 capitalize">
            view all
          </button>
        </div>
        <div className="flex-rows-between w-full">
          <p className="text-[12px] font-semibold tracking-wide text-gray-950/40">
            Desmond Aninakwa - 8th Apr 2024
          </p>
          <div className="flex-rows">
            {Array.from({ length: 5 }, (_, i) => i).map((star) => (
              <FontAwesomeIcon
                icon={faStar}
                className="text-[8px] text-yellow-300"
              />
            ))}
          </div>
        </div>
        <p className="text-[12px] font-bold tracking-wide text-gray-950/80">
          Oxford graduate sweat top
        </p>
        <p className="line-clamp-2 text-[11px] font-semibold tracking-wide text-gray-800/80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magnam,
          deleniti magni qui debitis blanditiis fugit dolorem a ut vero vitae
          sunt recusandae enim quasi praesentium exercitationem, laborum ad.
          Eum.
        </p>
      </div>
      {/* hold two fixed buttoms */}
      <div className="flex-rows-between ring- fixed bottom-13 left-0 z-50 grid w-full grid-cols-2 gap-4 border-t-[0.3px] border-gray-950/10 bg-gray-100 px-5 py-2">
        <button
          className="from-primary-color to-primary-color/60 text-uppercase w-full cursor-pointer rounded-sm bg-linear-to-r p-2 text-center text-[12px] font-semibold text-gray-50 uppercase"
          onClick={addToChart}
        >
          add to cart
        </button>
        <button className="from-primary-color to-primary-color/60 text-uppercase w-full rounded-sm bg-linear-to-r p-2 text-center text-[12px] font-semibold text-gray-50 uppercase">
          buy now
        </button>
      </div>
      <div className="flex-cols mx-auto mt-10 w-[100%] gap-1 bg-white p-2">
        <p className="text-sm font-semibold tracking-wide text-gray-900/60">
          Related products
        </p>
        {/* <div><CardSeller /></div> */}
        <div className="flex-cols gap-3">
          <div className="grid grid-cols-2 gap-4">
            <LoadingCart />
            <LoadingCart />
          </div>
          <div className="flex-row-center w-full">
            <Oval
              width={40}
              strokeWidth={5}
              color="#523c00"
              secondaryColor="#ece1ba"
            />
            {/* <Audio /> */}
            {/* <TailSpin /> */}
            {/* <ThreeCircles /> */}
            {/* <ThreeDots /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function SizeButton({ children }) {
  return (
    <button className="rounded-sm px-3 py-1 text-sm font-normal tracking-wide text-gray-600/80 capitalize shadow shadow-gray-950/30 outline-0">
      {children}
    </button>
  );
}

function StateButton({ icon }) {
  return (
    <button className="flex-col-center from-primary-color to-primary-color/70 cursor-pointer flex-col rounded-sm bg-linear-to-br px-2 py-1">
      <FontAwesomeIcon icon={icon} className="text-sm text-white" />
    </button>
  );
}

export default Details;
