import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Aadhaarbanking() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-11"}
          h6={`Products & Solutions / `}
          span={"Aadhaar Banking"}
          h1={`Aadhaar Banking`}
          p1={`We have taken a huge leap towards promoting the government’s attempts towards the promotion of financial inclusion in India, with the help of our Aadhar banking services.`}
          p2={`Now services such as Cash Withdrawal, Balance Enquiry, Mini-statements, Aadhaar Pay and Cash Deposits can be availed by the customers through PayPe platform. Our Aadhar banking services, don’t just benefit the customers but also the retailers in rural areas. The retailers will earn a commission every time they carry out a transaction for a customer, thus generating an alternative source of income for them.`}
          headimg={
            "https://production.cyware.com/enterprise/img/cert.d54df11.svg"
          }
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
