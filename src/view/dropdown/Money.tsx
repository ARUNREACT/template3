import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Money() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-12 pb-sm-5 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-lg-10"}
          h6={`Products & Solutions / `}
          span={"Money Transfer"}
          h1={`Money Transfer`}
          p1={`Money transfer is a crucial and basic need in our day-to-day lives. At PayPe we hope to empower people belonging to the rural and migrant segment of our country by ensuring that this basic need is expertly and conveniently met with the help of our remittance services.`}
          p2={`We offer both Domestic and Indo-Nepal money transfer services. Our Domestic Money Transfer services cater to the needs of the rural segment and our Indo-Nepal money transfer services cater to the needs of the Nepalese migrants in our country.`}
          p3={`We have simplified and streamlined the process of money transfers for the convenience of our customers. Now all the customer has to do is visit their closest PayPe-associated merchant to carry out their transactions. With an ever-expanding network of merchants, we are rapidly eliminating the need of going to the bank for our customers, especially in rural areas.`}
          headimg={require("../../asset/sample1/about.png")}
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
