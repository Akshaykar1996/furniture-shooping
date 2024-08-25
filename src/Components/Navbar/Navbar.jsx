import React from "react";
import "../../App.css";
import { navIcons } from "../../Constant/Images/NavIcons";

export const SideNavbar = ({ children }) => {
  console.log(children)
  console.log(navIcons);
  return (
    <>
      <div className="mainlayout">
        <div className="sideNav">
          <img src="../../Images/NavIcons/Home.svg" alt="" />
          <div className="iconList">
            {navIcons?.map((item) => (
              <div className="Nav">
                <img src={item} alt="" className="navIcons" />
              </div>
            ))}
          </div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};
