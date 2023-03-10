import { Headslide } from "../../../component/Layout";
import { Dashboardhead } from "../../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../Dashboardfooter";

export function Pos() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 "}
          h6={`Products & Solutions /`}
          span={"POS"}
          h1={`POS`}
          p1={`COMMING SOON`}
          headimg={require("../../../asset/sample1/about.png")}
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
