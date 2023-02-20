import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Mini() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-11"}
          h6={`Products & Solutions / Micro ATM / `}
          span={"Mini Statement"}
          h1={`Mini Statement`}
          p1={`We at PayPe have eliminated the need for not just a bank branch, and an ATM, but even a smartphone to conduct basic banking services such as checking balance statements, cash withdrawal & cash deposits.`}
          p2={`Bank account holders can now get a mini statement of their last 10 bank account transactions by visiting any PayPe merchant. This facility allows rural bank account holders to conduct basic banking facility without needing to visit a bank branch or even an ATM.`}
          headimg={
            "https://production.cyware.com/enterprise/img/cert.d54df11.svg"
          }
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
