import "./Dashboardhead.styles.css";
import { List, XCircleFill } from "react-bootstrap-icons";
import React from "react";

export function Headeroption(props: any) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={props.href} target={props.footertarget}>
        {props.footaname}
        {/* <span>{props.Headeroption}</span> */}
      </a>
    </li>
  );
}

export function Dropdown(props: any) {
  return (
    <div>
      <a className="dropdown-item head" href={props.headhref}>
        {props.headname}
      </a>
      <a className="dropdown-item ll" href={props.childhref1}>
        {props.childname1}
      </a>
      <a className="dropdown-item ll" href={props.childhref2}>
        {props.childname2}
      </a>
      <a className="dropdown-item ll" href={props.childhref3}>
        {props.childname3}
      </a>
      <a className="dropdown-item ll" href={props.childhref4}>
        {props.childname4}
      </a>
    </div>
  );
}

export function Dashboardhead() {
  return (
    <div className="header fixed-top">
      <nav className="navbar navbar-expand-md  p-0">
        <div className="col-lg-10 mx-auto d-flex align-items-center justify-content-between">
          <a className="head-logo " href="/">
            <img
              src={require("../../../asset/sample1/mainlogo.png")}
              alt="paype logo"
              className="logo-circle"
            />
          </a>
          <a
            className="navbar-toggler border-0 p-3 col "
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i className="display-5 list mt-2 col-12 pt-2 d-flex justify-content-end">
              <List />
            </i>
          </a>
          <div
            className="offcanvas offcanvas-start-md "
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div
              className="offcanvas-header d-flex d-md-none "
              style={{ borderBottom: "1px solid black" }}
            >
              <a className="head-logo" href="/">
                <img
                  src={require("../../../asset/sample1/mainlogo.png")}
                  alt="paype logo"
                  className="logo-circle"
                />
              </a>
              <a
                href="javascript:void(0) "
                className="text-reset p-0 mb-3"
                data-bs-dismiss="offcanvas"
                aria-label="close"
              >
                <i className="fs-1 text-light">
                  <XCircleFill />
                </i>
              </a>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <Headeroption
                  footerli={"nav-item"}
                  foota={"nav-link"}
                  href={"/"}
                  footaname={"Home"}
                />
                <Headeroption
                  footerli={"nav-item"}
                  foota={"nav-link"}
                  href={"/about"}
                  footaname={"About PayPe"}
                />

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Products & Solutions
                  </a>

                  <ul className="dropdown-menu ">
                    <h5> Retailer - Services</h5>
                    <div className="drop-flex">
                      <div className="p-0 col-md-6 col-12">
                        <Dropdown
                          headhref={"/money"}
                          headname={"Money Transfer"}
                          childhref1={"/dmt"}
                          childname1={"Domestic Money Transfer"}
                          childhref2={"/indo"}
                          childname2={"Indo Nepal Money Transfer"}
                        />

                        <Dropdown
                          headhref={"/aadhaarbanking"}
                          headname={"Aadhaar Banking"}
                          childhref1={"/aadhaarpay"}
                          childname1={"Aadhaar pay"}
                          childhref2={"/cashwithdrawl"}
                          childname2={"Cash Withdrawal"}
                          childhref3={"/balanceenquiry"}
                          childname3={"Balance Enquiry"}
                          childhref4={"/ministatement"}
                          childname4={"Mini Statement"}
                        />
                        <Dropdown
                          headhref={"/microatm"}
                          headname={"Micro ATM"}
                          childhref1={"/cashes"}
                          childname1={"Cash Withdrawal"}
                          childhref2={"/balance"}
                          childname2={"Balance Enquiry"}
                          childhref3={"/mini"}
                          childname3={"Mini Statement"}
                        />
                        <Dropdown
                          headhref={"/digital"}
                          headname={"Digital Payment -QR"}
                        />
                      </div>
                      <div className="p-0 col-md-6 col-12">
                        <Dropdown
                          headhref={"/utilities"}
                          headname={"Utility Payments"}
                          childhref1={"/bill"}
                          childname1={"BBPS"}
                          childhref2={"/recharge"}
                          childname2={"Recharge"}
                        />

                        <Dropdown
                          headhref={"/travel"}
                          headname={"Travel Services"}
                          childhref1={"/air"}
                          childname1={"Air Ticket"}
                          childhref2={"/railway"}
                          childname2={"Railway Ticket"}
                        />

                        <Dropdown headhref={"/cms"} headname={"CMS"} />
                        <Dropdown headhref={"/pan"} headname={"PAN Card"} />
                        <Dropdown headhref={"/itr"} headname={"ITR Filling"} />
                      </div>
                    </div>
                  </ul>
                </li>

                <Headeroption
                  footerli={"nav-item"}
                  foota={"nav-link"}
                  href={"/contact"}
                  footaname={"Contact Us"}
                />
                <Headeroption
                  footerli={"nav-item"}
                  foota={"nav-link"}
                  href={"/login"}
                  footaname={"Login"}
                />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
