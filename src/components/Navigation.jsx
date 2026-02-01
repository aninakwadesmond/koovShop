import {
  faCartPlus,
  faHome,
  faHomeLg,
  faListDots,
  faLocation,
  faLocationArrow,
  faMapLocation,
  faPlayCircle,
  faSearch,
  faSearchLocation,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { emptyshopProducts } from "../Slice/Feautures/Categories";
import CartItems from "../pages/CartItems";

function Navigation({ top = true, bottom = true }) {
  const [scrollstate, setScroll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log(
      "current location is ",
      location.pathname,
      location,
      location.pathname.split("/").includes("shop"),
    );
  }, [location.pathname]);

  useEffect(() => {
    // document.documentElement.style.overflow = "auto";
    // document.body.style.overflow = "auto";
    function scroll() {
      // console.log(window.screenY);
      setScroll(window.screenY > 10);

      if (scroll) {
        // console.log("scrolling ...", scrollstate);
        // console.log(window.screenY, "after");
      }
    }
    scroll();

    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <>
      {top === true && <div className="bg-primary-color h-8 w-full"></div>}

      <div className="sticky top-0 z-50">
        <div
          className={`bg-secondary-color flex w-full flex-col items-center justify-center ${!scrollstate ? "shadow-lg shadow-gray-700/20" : "shadow-none"}`}
        >
          {top === true && (
            <div className="mx-auto flex w-full items-center justify-between px-3">
              <Link to="/shop/all">
                <FontAwesomeIcon
                  icon={faSearch}
                  size="x"
                  className="text-2xl"
                />
              </Link>
              <Link
                className="bg-primary-color mx-auto flex w-30 flex-col items-center justify-center"
                to="/"
              >
                <img
                  src="/images/logo-name.png"
                  alt="logo-name"
                  className="w-[90%]"
                  // style={{
                  //   clipPath:
                  //     "polygon(6% 29%, 95% 29%, 100% 0, 100% 80%, 100% 100%, 0 100%, 0% 80%, 0 0)",
                  // }}
                />
              </Link>
              <Link
                to="/cart"
                className="flex items-center justify-center gap-1"
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  size="x"
                  className="text-2xl"
                />
                {CartItems.length >= 1 && (
                  <span className="bg-primary-color/60 text-text-color flex h-6 w-6 items-center justify-center rounded-full text-[13px] font-bold">
                    {CartItems.length}
                  </span>
                )}
                {/* <span className="bg-primary-color/60 text-text-color flex h-6 w-6 items-center justify-center rounded-full text-[13px] font-bold">
                  {CartItems.length}
                </span> */}
              </Link>
            </div>
          )}

          <div className="flex-rows-between fixed bottom-0 left-0 z-50 mt-4 w-full overflow-visible bg-gray-100 p-2 px-4 shadow-lg ring-4 ring-gray-700/5">
            <BottomNav icon={faHomeLg} title="Home" to="/" />
            <BottomNav
              icon={faSearchLocation}
              title="categories"
              to="/categories"
            />
            <BottomNav icon={faUser} title="account" to="/account" />
            <BottomNav icon={faMapLocation} title="contact" to="/contact" />
            <BottomNav icon={faListDots} title="more" to="/more" />
          </div>
        </div>
      </div>
    </>
  );
}

function BottomNav({ icon, title, to = "" }) {
  return (
    <Link className="flex-col-center" to={to}>
      <FontAwesomeIcon icon={icon} className="text-xl" />
      <span className="font-meduim text-[11px] capitalize">{title}</span>
    </Link>
  );
}
export default Navigation;
