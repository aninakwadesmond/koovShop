import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";

function RootNavigaation() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootNavigaation;
