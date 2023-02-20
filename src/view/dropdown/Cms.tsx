import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function Cms() {
  return (
    <div className="money">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-11 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-12"}
          h6={`Products & Solutions / `}
          span={"Cash Management Services"}
          h1={`Cash Management Services`}
          p1={`Our cash management service offers a full range of products and services to efficiently and effectively cater to the cash managing of our clients. We are extensively engaged in CMS operations with some of the most prestigious NBFCs, MFIs, and Service aggregators and are thriving to build up an ecosystem for Cash Flow fluid mechanics to optimize and facilitate effective cash management for our client’s business operations.`}
          headimg={
            "https://production.cyware.com/enterprise/img/cert.d54df11.svg"
          }
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}
