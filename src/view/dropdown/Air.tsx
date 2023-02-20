import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Air() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-10 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-12"}
          h6={`Products & Solutions / Travel Services /`}
          span={"Airline Ticket Booking"}
          h1={`Airline Ticket Booking`}
          p1={`PayPe flight ticket booking service provides the retailers with a user friendly platform on which they can compare prices and offers from multiple airlines and offer the best deals on both domestic and international flights to their customers, thereby developing a sense of loyalty within their customer base/ customers.`}
          headimg={
            "https://production.cyware.com/enterprise/img/cert.d54df11.svg"
          }
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
