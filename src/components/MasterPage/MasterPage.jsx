import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom";
export default function MasterPage() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
