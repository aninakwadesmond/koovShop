import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import SubNavigation from "./SubNavigation";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Navigation from "./Navigation";
import { useEffect } from "react";
const moreContent = [
  "home",
  "christmas",
  "faq",
  "terms & conditions",
  "shipping & returns",
  "contact us",
  "bloq",
];

const gift = [faFacebook, faInstagram, faTelegram];

function MoreComponent() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <div className="flex w-full flex-col">
      <Navigation top={false} />
      <SubNavigation icon={faNavicon} title="More" />
      <Content />
      <GiftCertificate />
    </div>
  );
}

function Content() {
  return (
    <div className="mt-10 flex h-60 items-center justify-center">
      <div className="flex-cols gap-3">
        {moreContent.map((content) => (
          <Link className="w-full text-center text-sm font-semibold tracking-wide text-gray-950/80 uppercase underline-offset-2 hover:underline">
            {content}
          </Link>
        ))}
      </div>
    </div>
  );
}

function GiftCertificate() {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-2 border-t-[0.1px] border-t-gray-950/20 pt-2">
      <div className="cols flex gap-2">
        <h1 className="text-md font-semibold tracking-wide text-gray-950/80 uppercase">
          gift certificate
        </h1>
      </div>
      <div className="flex-row-center gap-2">
        {gift.map((icon) => (
          <Link>
            <FontAwesomeIcon icon={icon} className="text-[1.5rem]" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MoreComponent;
