import { faUser } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../components/Navigation";
import SubNavigation from "../components/SubNavigation";
import { Form, Link } from "react-router-dom";
import FormLabelInput from "../components/FormLabelInput";

function Account() {
  return (
    <div className="w-full">
      <SubNavigation icon={faUser} title="account" />
      <Navigation top={false} />
      <UserLogin />
    </div>
  );
}

function UserLogin() {
  return (
    <Form className="flex h-[80vh] w-full flex-col items-center justify-center gap-1">
      <p className="text-normal text-sm tracking-tight text-gray-900 uppercase">
        sign in
      </p>
      {/* <p className="text-normal text-sm tracking-tight text-gray-600 uppercase">
        email address:
      </p> */}
      <FormLabelInput label="email address :" type="email" center="true" />
      <FormLabelInput label="password:" type="text" center="true" />
      <button className="buttonForm">sign in</button>
      <Link className="mt-7 cursor-pointer text-[12px] font-semibold tracking-wide text-red-500 hover:underline hover:underline-offset-4">
        Forget your password?
      </Link>
      <Link
        className="cursor-pointer text-[12px] font-semibold tracking-wide text-red-500 hover:underline hover:underline-offset-4"
        to="/createAccount"
      >
        Create account
      </Link>
    </Form>
  );
}

export default Account;
