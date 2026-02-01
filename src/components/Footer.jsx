import { useFetcher } from "react-router-dom";
import DropMore from "./DropMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const fetcher = useFetcher();
  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <div className="flex-col-center mx-auto mt-8 mb-4 w-[95%] rounded-sm border-[0.5px] border-gray-500/70 p-4">
        <div className="flex-col-center w-[95%]">
          <h4 className="text-sm font-bold text-gray-800">
            Subscribe to our newsletter
          </h4>

          <fetcher.Form className="flex-cols w-full gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-sm p-2 text-sm font-semibold tracking-wide text-gray-800/70 shadow shadow-gray-400/70 outline-0 placeholder:text-[12px]"
            />
            <button className="button text-text-color w-full bg-linear-to-r from-gray-950 to-gray-800 text-sm uppercase">
              Subscribe
            </button>
          </fetcher.Form>
        </div>
      </div>
      <div className="flex-col-start w-full">
        <DropMore title="Navigate" />
        <DropMore title="our categories" />
        <DropMore title="Brands" />
      </div>
      <Connect />
    </div>
  );
}

function Connect() {
  return (
    <div className="flex-cols-center mt-4 mb-14 gap-2">
      <p className="h-10 w-40 bg-red-300">
        <img
          src="../../public/images/logo-name.png"
          alt="logo-image"
          className="h-full w-full"
        />
      </p>
      <div className="flex-cols-center gap-1">
        <p className="text-sm font-semibold text-gray-400 capitalize">
          connect with us
        </p>
        <div className="flex-rows gap-1">
          <FontAwesomeIcon icon={faFacebook} className="text-[1.6rem]" />
          <FontAwesomeIcon icon={faInstagram} className="text-[1.6rem]" />
          <FontAwesomeIcon icon={faTwitter} className="text-[1.6rem]" />
        </div>
      </div>
      <p className="flex-cols-center mt-4 bg-gray-200/70 p-6 text-[12px] font-medium text-gray-500">
        &copy; 2026 kairova brand shop
      </p>
    </div>
  );
}

export default Footer;
