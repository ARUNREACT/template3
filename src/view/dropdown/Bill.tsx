import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Bill() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-12"}
          h6={`Products & Solutions / Utilities / `}
          span={"Bill Payments"}
          h1={`Bill Payments`}
          p1={`Merchants can now pay the gas, water, and electricity bill of their customers right from the comfort of their shop and earn a commission for each transaction, thus generating a lucrative alternate source of revenue for themselves.`}
          headimg={
            "https://production.cyware.com/enterprise/img/cert.d54df11.svg"
          }
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
