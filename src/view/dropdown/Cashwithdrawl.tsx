import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Cashwithdrawl() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-11"}
          h6={`Products & Solutions / Aadhaar Banking / `}
          span={"Cash Withdrawal"}
          h1={`Cash Withdrawal`}
          p1={`Now customers can perform cash withdrawals from their bank accounts with the help of their Aadhar card just by visiting any Relipay merchant. With our AePS services, we intend to extend our cash withdrawal services to the most remote areas of our country, in an attempt to make banking convenient in the previously unserviceable regions.`}
          headimg={
            "https://production.cyware.com/enterprise/img/cert.d54df11.svg"
          }
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
