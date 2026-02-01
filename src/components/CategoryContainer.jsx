import {
  faArrowDown,
  faArrowUp,
  faClose,
  faHomeLg,
  faPlus,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  emptyshopProducts,
  resetQuery,
  setActive,
} from "../Slice/Feautures/Categories";
import { useEffect, useState } from "react";
import SubNavigation from "./SubNavigation";

function CategoryContainer() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  useEffect(() => {
    if (!location.pathname.split("/").includes("shop")) {
      console.log("you've moved away from shop");
      dispatch(emptyshopProducts());
      dispatch(resetQuery());
      // dispatch
    }
  }, [location.pathname]);
  return (
    <div className="flex-cols">
      {/* <Navigation /> */}
      <SubNavigation icon={faHomeLg} title="  categories" />
      <div className="group mt-6 flex w-full flex-col items-center justify-center gap-0">
        <Item
          more={[
            "laptops",
            "mens-watches",
            "dresses",
            "skirts",
            "paints / trousers",
            "jeans",
            "shirts",
            "hoodes",
          ]}
          heading="clothing"
        />
        <Item
          more={["sneakers", "casual shoes", "boots", "sandals", "flats"]}
          heading="footwear"
        />
        <Item
          more={[
            "hats/caps",
            "belts",
            "scanner",
            "socks",
            "watches",
            "wallets",
            "hair accessories",
          ]}
          heading="accessories"
        />
        <Item
          more={[
            "handbags",
            "backpacks",
            "Tote bags",
            "travel bags",
            "laptop bags",
          ]}
          heading="bags"
        />
        <Item
          more={["necklaces", "rings", "Earrings", "braclets", "anklects"]}
          heading="jewelry"
        />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex w-full items-center justify-between border-[1px] border-gray-950/20 p-2">
      <Link to="/">
        <FontAwesomeIcon icon={faHomeLg} />
      </Link>

      <h1 className="text-[1.2rem] font-bold tracking-wide capitalize">
        categories
      </h1>
      <Link to=".." relative="path">
        <FontAwesomeIcon
          icon={faClose}
          className="text-md hover:bg-secondary-color cursor-pointer p-1 duration-300 hover:rounded-full"
        />
      </Link>
    </div>
  );
}

function Item({ more, heading }) {
  // const {} = useSelector(state=> state.categories)
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.categories);
  function handleToggeleMore() {
    setOpen((prev) => !prev);
    dispatch(setActive(heading));
  }

  return (
    <div className="flex-cols" tabIndex={1} onClick={handleToggeleMore}>
      <SingleCategory heading={heading} />
      <div className="flex-cols gap-[0.15rem] overflow-hidden duration-500 group-focus:max-h-screen">
        {active === heading &&
          more.map((item, index) => (
            <Link
              onClick={() => dispatch(emptyshopProducts())}
              to={`/shop/${item}`}
              key={index}
              className="flex-rows gap-2 text-sm font-semibold capitalize duration-300 hover:underline hover:underline-offset-3"
            >
              {item}
            </Link>
          ))}
      </div>
    </div>
  );
}

function SingleCategory({ heading }) {
  const { active } = useSelector((state) => state.categories);
  return (
    <div className="flex cursor-pointer items-center justify-start gap-2 p-1">
      <h2 className="font-semibold tracking-wide text-gray-950/70 capitalize duration-300 group-focus:text-red-300">
        {heading}
      </h2>
      <FontAwesomeIcon
        icon={active === heading ? faArrowUp : faArrowDown}
        className="text-[10px] font-semibold text-gray-950/70 duration-300 group-focus:-rotate-180 group-focus:text-red-300"
      />
    </div>
  );
}

export default CategoryContainer;
