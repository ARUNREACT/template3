import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Recharge() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-12"}
          h6={`Products & Solutions / Utilities / `}
          span={"Recharge"}
          h1={`Recharge`}
          p1={`Mobile recharges/ DTH recharges can now be offered by any retailer with the help of Relipay. Now customers who more often than not, don’t own smartphones avail prepaid mobile recharge services without facing the limitation of owning a smartphone.`}
          headimg={
            "https://production.cyware.com/enterprise/img/cert.d54df11.svg"
          }
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
