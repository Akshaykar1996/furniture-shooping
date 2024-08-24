import React from "react";
import "../../App.css";
import { navIcons } from "../../Constant/Images/NavIcons";

export const SideNavbar = ({ children }) => {
  console.log(children);
  console.log(navIcons);
  return (
    <>
      <div className="mainlayout">
        <div className="allNav">
          <div className="sideNav">
            <div className="iconList">
              {navIcons?.map((item) => (
                <div className="Nav">
                  <img src={item} alt="" className="navIcons" />
                </div>
              ))}
            </div>
          </div>
          <div className="bottomNavBar">
          <div className="bottomNav">
            <div className="bottomIconList">
              {navIcons?.map((item) => (
                <div className="btnNav">
                  <img src={item} alt="" className="navIcons" />
                </div>
              ))}
            </div>
          </div>

          </div>
        </div>

        <div>{children}</div>
      </div>
    </>
  );
};
