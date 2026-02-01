import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function DropMore({ title }) {
  return (
    <div
      className="group mx-auto my-0 flex w-[95%] cursor-pointer flex-col items-start justify-start gap-2 rounded"
      tabIndex={1}
    >
      <p className="group flex w-full items-center justify-between rounded border-[0.1px] border-gray-400/50 p-2 text-sm font-bold tracking-wider capitalize">
        <span className="duration-300 group-focus:text-red-400">{title}</span>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="rotate-90 transition-all duration-300 group-focus:-rotate-90 group-focus:text-red-300"
        />
      </p>

      <div className="flex max-h-0 w-full flex-col items-start justify-start gap-1 divide-y divide-gray-300 overflow-hidden rounded border-0 border-gray-400/70 p-0 transition-all duration-300 group-focus:max-h-screen group-focus:border-[0.3px] group-focus:p-2 [&>a]:w-full [&>a]:text-sm [&>a]:text-gray-500">
        <Link>Our team</Link>
        <Link>Our team</Link>
        <Link>Our team</Link>
        <Link>Our team</Link>
        <Link>Our team</Link>
        <Link>Our team</Link>
      </div>
    </div>
  );
}

export default DropMore;
