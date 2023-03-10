import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Microatm() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-11"}
          h6={`Products & Solutions / Aadhaar Banking / `}
          span={"Micro ATM"}
          h1={`Micro ATM`}
          p1={`Since ATMs have a high setup cost and are only financially viable in places that have a high footfall, it is extremely difficult to find ATMs in rural areas where even the population is below the minimum required footfall.`}
          p2={`Now with the help of PayPe’s micro-ATM service, bank account holders can access the services offered by a regular ATM just by visiting their closest PayPe-associated merchant. Since the set-up cost of a micro-ATM is extremely low, even small merchants can set up a micro-ATM and carry out transactions for their customers and earn a generous commission.`}
          headimg={require("../../asset/sample1/about.png")}
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
