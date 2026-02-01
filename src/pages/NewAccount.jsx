import { Form, useLocation } from "react-router-dom";
import FormLabelInput from "../components/FormLabelInput";
import Navigation from "../components/Navigation";
import SubNavigation from "../components/SubNavigation";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { useEffect } from "react";

function NewAccount() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <div>
      <Navigation top={false} />
      <SubNavigation icon={faSearch} title="New account" />
      <Form className="flex-cols mt-5 w-full gap-[0.4rem]">
        <FormLabelInput label="Email / Address" type="email" />
        <FormLabelInput label="password" type="password" />
        <FormLabelInput label="confirm password" type="password" />
        <FormLabelInput label="confirm password" type="password" />
        <FormLabelInput label="first name" type="text" />
        <FormLabelInput label="last name" type="text" />
        <FormLabelInput label="address line" type="text" />
        <FormLabelInput label="suburb / city" type="text" />
        <FormLabelInput label="postal code" type="text" />
        <FormLabelInput label="phone Number" type="text" />
        <button className="buttonForm w-full">create account </button>
      </Form>
      <Footer />
    </div>
  );
}

// function Input({ label, type }) {
//   return (
//     <div className="flex-cols w-full gap-[0.1rem] p-1 px-2">
//       <label
//         htmlFor="email"
//         className="text-[14px] font-semibold text-gray-950/80 capitalize"
//       >
//         {label}
//       </label>
//       <input
//         type={type}
//         id="email"
//         className="p2 h-8 w-full cursor-pointer rounded-md border-[0.3px] border-gray-950/30 px-3 text-[14px] font-semibold tracking-wider text-gray-950/70 shadow shadow-gray-950/10 outline-0"
//       />
//     </div>
//   );
// }

export default NewAccount;
