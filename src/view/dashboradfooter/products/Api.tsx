import { Headslide } from "../../../component/Layout";
import { Dashboardhead } from "../../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../Dashboardfooter";

export function Api() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 "}
          h6={`Products & Solutions /`}
          span={"API"}
          h1={`Application Program Interface`}
          p1={`The world’s most powerfuland easy-to-use APIs`}
          p2={`We agonize over the right abstractions so your teams don’t need to stitch together disparate systems or spend months integrating payments functionality.`}
          p3={`RNFI provides APIs to Channel Partner’s to create their own portal. RNFI is aggregating major services under a single API platform to enable our Channel Partner's retail networks to service the requirements of customers pertaining to Domestic Money Transfers, Bill Payments, Recharges, Travel Bookings, as well as for AEPS & Aadhaar Pay Services.`}
          headimg={
            "https://production.cyware.com/enterprise/img/cert.d54df11.svg"
          }
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
