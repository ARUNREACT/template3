import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Utilities() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-11"}
          h6={`Products & Solutions / `}
          span={"Utilities"}
          h1={`Utilities`}
          p1={`Merchants can help their customers in paying their utility bills and conduct mobile recharge /DTH recharge by turning their shop into an easy and accessible recharges bill payment center, with the help of PayPe’s platform.`}
          p2={`Customers, especially in the rural areas can visit their closest PayPe-associated merchant and pay their Utility and other recurring bills without having to stand in long queues.`}
          headimg={require("../../asset/sample1/about.png")}
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
