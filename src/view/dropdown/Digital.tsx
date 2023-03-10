import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Digital() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-11"}
          h6={`Products & Solutions / `}
          span={"Digital Payment"}
          h1={`Digital Payment – QR`}
          p1={`PayPe has launched their QR code services, Now merchants can quickly generate a QR code to carry out swift, secure and reliable UPI transactions, thus eliminating the need of managing excessive amounts of cash. This will also help them to promote their business as large number of customers are leaning towards digital payments.`}
          headimg={require("../../asset/sample1/about.png")}
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
