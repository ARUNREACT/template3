import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Balance() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-11"}
          h6={`Products & Solutions / Micro ATM / `}
          span={"Balance Enquiry"}
          h1={`Balance Enquiry`}
          p1={`As Micro-ATMs, have become a better alternative for merchants as compared to regular ATMs. Any PayPe-associated merchant can now carry out balance inquiries for their customers using their debit card. This feature is highly helpful for the customers based out in geographies where there is scarcity of ATM’s.`}
          headimg={require("../../asset/sample1/about.png")}
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
