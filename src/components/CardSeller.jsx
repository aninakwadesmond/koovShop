import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setProductDetails } from "../Slice/Feautures/Details";

function CardSeller({ product }) {
  // console.log("card products", product);
  const dispatch = useDispatch();
  const {
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    tags,
    thumbnail: image,
    images,
  } = product;
  return (
    <Link
      to="/details"
      className="flex-cols m-4 w-[13rem] gap-2 pb-2"
      onClick={() => dispatch(setProductDetails(product))}
    >
      <div
        className="flex h-[10rem] w-full flex-col items-start justify-start gap-2 bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: "url('/images/image-1.jpg')" }}
      >
        <img
          // src={"/images/image-2.jpg"}
          src={image}
          alt="image-full"
          className="h-full w-full"
        />
      </div>
      <div className="flex-cols-center">
        <button className="button text-text-color w-full rounded-sm bg-linear-to-r from-gray-950 to-gray-900 text-[10px] uppercase">
          choose options
        </button>
        <p className="mx-auto my-1 line-clamp-2 w-[95%] text-[9px] font-bold tracking-wide text-gray-600">
          {description}
        </p>
        <p className="text-sm font-bold tracking-wide">${price}</p>
        <p className="flex-rows gap-1">
          {Array.from({ length: Math.round(rating) }, (_, i) => i).map(
            (star) => (
              <FontAwesomeIcon
                icon={faStar}
                className="text-[10px] text-yellow-200"
              />
            ),
          )}
        </p>
        <div className="flex-rows gap-1">
          {Array.from({ length: 5 }, (_, i) => i).map((color) => (
            <p className="mt-1 h-3 w-3 gap-1 bg-amber-300"></p>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default CardSeller;
