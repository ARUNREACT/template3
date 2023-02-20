import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Dmt() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-11"}
          h6={`Products & Solutions / `}
          span={"Money Transfer"}
          h1={`Domestic Money Transfer`}
          p1={`PayPe is building a bridge between the banks and the unbanked population. With PayPe’s domestic money transfer service, customers can now quickly and reliably send money across different bank accounts throughout the country.`}
          p2={`In order to avail the domestic money transfer service, a customer needs to just visit their closest Relipay-associated merchant without having to visit a bank branch. By providing convenient banking services we aim to promote financial inclusion, especially in rural areas.`}
          headimg={
            "https://production.cyware.com/enterprise/img/cert.d54df11.svg"
          }
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
