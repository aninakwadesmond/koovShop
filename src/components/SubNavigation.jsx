import { faClose, faHomeLg } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function SubNavigation({ icon, title }) {
  return (
    <div className="flex w-full items-center justify-between border-[1px] border-gray-950/20 p-2">
      <Link to="/">
        <FontAwesomeIcon icon={icon} />
      </Link>

      <h1 className="text-[1.2rem] font-bold tracking-wide capitalize">
        {title}
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

export default SubNavigation;
