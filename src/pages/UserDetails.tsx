import React, { useState } from "react";
import "../styles/userDetails.scss";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { KeyboardBackspace, Star } from "@mui/icons-material";
import { Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import IUserDetailsRoutes from "../interfaces/userDetailsRoutes";

const userDetailsRoutes: IUserDetailsRoutes[] = [
  {
    name: "Documents",
    path: "userDetails/documents",
  },

  {
    name: "Bank Details",
    path: "userDetails/bankDetails",
  },

  {
    name: "Loan",
    path: "userDetails/loans",
  },

  {
    name: "Savings",
    path: "userDetails/savings",
  },
  {
    name: "App and System",
    path: "userDeails/appAndSystem",
  },
];

const UserDetails: React.FC = () => {
  const [active, setActive] = useState<React.SetStateAction<number>>(0);

  const handleLinkClick = (id: number) => {
    setActive(id);
  };

  return (
    <div className="userDetails-page">
      <Header />

      <div className="main">
        <Sidebar />
        <div className="user-details">
          <div className="back">
            <Link className="link" to={"/"}>
              <KeyboardBackspace className="back-icon" />
            </Link>
            <p>Back to Users</p>
          </div>

          <div className="header">
            <div className="title">
              <h4>User Details</h4>
            </div>
            <div className="buttons">
              <Button className="button blacklist">Blacklist User</Button>
              <Button className="button activate">Activate User</Button>
            </div>
          </div>

          <div className="section-1">
            <div className="up">
              <div className="user">
                <Avatar className="avatar" />
                <div className="name">
                  <h3>Grace Effiom</h3>
                  <p>LSQFf587g90</p>
                </div>
              </div>

              <div className="user-tier">
                <p>User's tier</p>
                <Star />
              </div>

              <div className="user-balance">
                <h2>N 200,000.00</h2>
                <p>9912345678/Providus Bank</p>
              </div>
            </div>

            <div className="down">
              {userDetailsRoutes.map((item, id) => {
                let { name, path } = item;
                return (
                  <div
                    key={id}
                    className={`link-container ${
                      id === active ? `active` : null
                    }`}
                  >
                    <Link
                      onClick={(e: React.MouseEvent<HTMLElement>) => {
                        handleLinkClick(id);
                      }}
                      className="link"
                      to={path}
                    >
                      {name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="section-2">
            <div className="personal-details">
              <h4>Personal Details</h4>
              <div className="details">
                <div>
                  <p>FULL NAME</p>
                  <h4>Grace Effiom</h4>
                </div>

                <div>
                  <p>Phone number</p>
                  <h4>0706789878</h4>
                </div>

                <div>
                  <p>Email Address</p>
                  <h4>grace@gmail.com</h4>
                </div>

                <div>
                  <p>Bvn</p>
                  <h4>123456789</h4>
                </div>

                <div>
                  <p>Gender</p>
                  <h4>Female</h4>
                </div>

                <div>
                  <p>Marital status</p>
                  <h4>Single</h4>
                </div>

                <div>
                  <p> Children</p>
                  <h4>None</h4>
                </div>

                <div>
                  <p>Type of residence</p>
                  <h4>Parent's Apartment</h4>
                </div>
              </div>
            </div>
            <div className="education">d</div>
            <div className="socials"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
