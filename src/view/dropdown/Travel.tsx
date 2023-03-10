import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Travel() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-12"}
          h6={`Products & Solutions / `}
          span={"Travel Services"}
          h1={`Travel Services`}
          p1={`PayPe offers a variety travel services such as train and flight ticket bookings at reasonably priced and comprehensive rates. Now instead of dealing with an unknown travel agent, customers can comfortably visit their trusted PayPe-associated merchant and get the best deals on their travel and train ticket bookings. Our travel ticket booking service is backed by a team of responsive customer care executives for guidance and convenient query resolutions for our retailers.`}
          headimg={require("../../asset/sample1/about.png")}
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
