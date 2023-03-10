import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Pan() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-9"}
          h6={`Products & Solutions / `}
          span={"Pan Card Services"}
          h1={`Pan Card Services`}
          p1={`In an attempt to make government services more accessible PayPe has integrated pan card application services on its platform in association with Protean E Gov services. Any PayPe associate merchant can now help their customers carry out their PAN Card application or rectification and generate an additional source of revenue.`}
          p2={`Now individual customers wouldn’t have to trouble themselves with finding a particular merchant or government centre to carry out their pan card-related needs and can instead go to their closest PayPe-associated merchant and get the job done swiftly and conveniently.`}
          headimg={require("../../asset/sample1/about.png")}
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
