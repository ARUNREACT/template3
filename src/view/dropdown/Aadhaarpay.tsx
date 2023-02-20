import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Aadhaarpay() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-11"}
          h6={`Products & Solutions / Aadhaar Banking /`}
          span={"Aadhaar Pay"}
          h1={`Aadhaar Pay`}
          p1={`Aadhaar Pay is a payment system with the help of which merchants can collect payments from their customers just by using their biometric identity and Aadhar number.`}
          p2={`Now with the help of our Aadhar pay services, customers in rural areas who don’t have access to smartphones can easily conduct payments without having to worry about remembering a pin, and merchants can perform seamless and instant transactions and eliminate the need for handling enormous amounts of cash.`}
          headimg={
            "https://production.cyware.com/enterprise/img/cert.d54df11.svg"
          }
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
