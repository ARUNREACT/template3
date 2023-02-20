import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../view/aboutus/About";
import { Contact } from "../view/contact/Contact";
import { Dashboard } from "../view/dashboard/Dashboard";
import Chart from "../view/dashboard/Map";
import { Dashboardhead } from "../view/dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../view/dashboradfooter/Dashboardfooter";
import { Api } from "../view/dashboradfooter/products/Api";
import { Pos } from "../view/dashboradfooter/products/Pos";
import { Aadhaarbanking } from "../view/dropdown/Aadhaarbanking";
import { Aadhaarpay } from "../view/dropdown/Aadhaarpay";
import { Air } from "../view/dropdown/Air";
import { Balance } from "../view/dropdown/Balance";
import { Balanceenquiry } from "../view/dropdown/Balanceenquiry";
import { Bill } from "../view/dropdown/Bill";
import { Cashes } from "../view/dropdown/Cashes";
import { Cashwithdrawl } from "../view/dropdown/Cashwithdrawl";
import { Cms } from "../view/dropdown/Cms";
import { Digital } from "../view/dropdown/Digital";
import { Dmt } from "../view/dropdown/Dmt";
import { Indo } from "../view/dropdown/Indo";
import { Itr } from "../view/dropdown/Itrfilling";
import { Microatm } from "../view/dropdown/Microatm";
import { Mini } from "../view/dropdown/Mini";
import { Ministatement } from "../view/dropdown/Ministatement";
import { Money } from "../view/dropdown/Money";
import { Pan } from "../view/dropdown/Pan";
import { Railway } from "../view/dropdown/Railway";
import { Recharge } from "../view/dropdown/Recharge";
import { Travel } from "../view/dropdown/Travel";
import { Utilities } from "../view/dropdown/Utilities";
import { Login } from "../view/login/Login";
import { Privacy } from "../view/terms & privacy/Privacy";
import { Terms } from "../view/terms & privacy/Terms";

function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboardhead" element={<Dashboardhead />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        /**************DROP-DOWN**************** */
        <Route path="/money" element={<Money />} />
        <Route path="/dmt" element={<Dmt />} />
        <Route path="/indo" element={<Indo />} />
        <Route path="/aadhaarbanking" element={<Aadhaarbanking />} />
        <Route path="/aadhaarpay" element={<Aadhaarpay />} />
        <Route path="/cashwithdrawl" element={<Cashwithdrawl />} />
        <Route path="/balanceenquiry" element={<Balanceenquiry />} />
        <Route path="/ministatement" element={<Ministatement />} />
        <Route path="/microatm" element={<Microatm />} />
        <Route path="/cashes" element={<Cashes />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/mini" element={<Mini />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/utilities" element={<Utilities />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/Recharge" element={<Recharge />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/air" element={<Air />} />
        <Route path="/railway" element={<Railway />} />
        <Route path="/cms" element={<Cms />} />
        <Route path="/pan" element={<Pan />} />
        <Route path="/itr" element={<Itr />} />
        /**************DROP-DOWN**************** */
        <Route path="/api" element={<Api />} />
        <Route path="/pos" element={<Pos />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboardfooter" element={<Dashboardfooter />} />
      </Routes>
    </div>
  );
}

export default MainNavigator;
