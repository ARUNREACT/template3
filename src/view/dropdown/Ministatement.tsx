import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Ministatement() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-11"}
          h6={`Products & Solutions / Aadhaar Banking / `}
          span={"Mini Statement"}
          h1={`Mini Statement`}
          p1={`Now account holders, especially in the impoverished areas of India who don’t own a smartphone won’t have to go all the way to a bank to get a bank statement.`}
          p2={`Any bank account holder can quickly and conveniently obtain a mini-bank statement of their last 10 bank transactions just by using their Aadhar Card, biometric identity, and account number.`}
          headimg={
            "https://production.cyware.com/enterprise/img/cert.d54df11.svg"
          }
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
