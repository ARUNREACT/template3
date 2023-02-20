import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Balanceenquiry() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-11"}
          h6={`Products & Solutions / Aadhaar Banking / `}
          span={"Balance Enquiry"}
          h1={`Balance Enquiry`}
          p1={`Now retailers can access the amount details of an Aadhar liked bank account just by using the customer’s Aadhar number and their biometric details.`}
          p2={`Using AePS balance inquiry service customers can avoid the trouble of visiting a bank branch. Now instead they can go to their closest Relipay-associated merchant who will carry out this basic banking service.`}
          headimg={
            "https://production.cyware.com/enterprise/img/cert.d54df11.svg"
          }
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
