import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Railway() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-10 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-12"}
          h6={`Products & Solutions / Travel Services  / `}
          span={"Train Ticket Booking"}
          h1={`Train Ticket Booking`}
          p1={`As the principle IRCTC agent, Relipay, offers its retailers the facility to book train tickets for their customers to any destination across India in a quick and hassle free manner with competitive rates and great commissions.`}
          headimg={
            "https://production.cyware.com/enterprise/img/cert.d54df11.svg"
          }
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
