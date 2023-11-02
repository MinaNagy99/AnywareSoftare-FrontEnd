import React from "react";
import SideBarComponent from "../pages/DashbourdComponent/SideBarComponent/SideBarComponent.jsx";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../pages/DashbourdComponent/NavbarComponent/NavbarComponent.jsx";

export default function LayoutComponent() {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-2 col-4 bg-secondColor  px-0  pb-5 text-light text-center pt-5">
                 <SideBarComponent></SideBarComponent>       
            <div />
          </div>
          <div className="col-md-10 col-8  px-0">
              <NavbarComponent />
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
