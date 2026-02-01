import { useLocation } from "react-router-dom";
import FormLabelInput from "../components/FormLabelInput";
import Navigation from "../components/Navigation";
import { useEffect } from "react";

function Contact() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <div className="mb-20">
      {/* <Navigation /> */}
      <div className="flex-cols mx-auto mt-10 w-[95%] gap-2">
        <p className="text-[12px] font-semibold tracking-wide">
          Please fill out the form below if you need assistance
        </p>
        <FormLabelInput label="full name" type="text" />
        <FormLabelInput label="phone number" type="text" />
        <FormLabelInput label="email address" type="email" />
        <FormLabelInput label="order number" type="text" />
        <FormLabelInput label="comment/question" type="text" textarea={true} />
        <FormLabelInput
          label="please answer the question below for additional verification"
          type="number"
          row={true}
        />
        <button className="buttonForm">submit form</button>
      </div>
    </div>
  );
}

export default Contact;
