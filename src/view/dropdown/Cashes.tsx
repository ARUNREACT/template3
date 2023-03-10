import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Cashes() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-11"}
          h6={`Products & Solutions / Micro ATM / `}
          span={"Cash Withdrawal"}
          h1={`Cash Withdrawal`}
          p1={`Customers can conduct swift cash withdrawals via M-ATM just by visiting their closest PayPe merchant. Thus, by eliminating the need of having to search for an ATM, which can be an extremely tedious task for someone living in a rural area, we aim to make banking more accessible and increase the population of banked individuals in India.`}
          headimg={require("../../asset/sample1/about.png")}
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
