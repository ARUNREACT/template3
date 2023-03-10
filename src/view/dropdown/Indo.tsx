import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Indo() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-11"}
          h6={`Products & Solutions / Money Transfer / `}
          span={"Indo Money Transfer"}
          h1={`Indo Nepal Money Transfer`}
          p1={`We have introduced the Indo-Nepal money transfer facility on our platform, in accordance with the Indo-Nepal Remittance Facility (Scheme) launched in May 2008, to focus on facilitating the needs of Nepalese migrant workers, working in India.`}
          p2={`With PayPe Indo-Nepal money transfer service, cross-border remittances from India to Nepal have become quick, convenient, and hassle-free. Now, any Nepali citizen working in India can send cash back to their country just by going to their closest PayPe-associated merchant. The merchant will accept cash from any Nepali citizen and then transfer the amount into the beneficiary’s account in Nepal.`}
          headimg={require("../../asset/sample1/about.png")}
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
