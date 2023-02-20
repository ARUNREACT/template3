import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Itr() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 pb-sm-5 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-11"}
          h6={`Products & Solutions / `}
          span={"ITR Filing"}
          h1={`ITR Filing`}
          p1={`Filing ITR just got a little more convenient. PayPe’s platform now facilitates online ITR filing through an assisted model. Now customers can conveniently get their ITR filed at their closest PayPe retailer. To file their ITR, customers simply have to fill out their form with the relevant details and submit it to the merchant. After submitting the form, the customer will be shortly contacted by our associate who will personally guide them through the entire process.`}
          headimg={
            "https://production.cyware.com/enterprise/img/cert.d54df11.svg"
          }
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
