import {
  Headtext,
  Headslide,
  Vertical,
  Horizontal,
  Services,
} from "../../component/Layout";
import {
  Dashboardhead,
  Headeroption,
} from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";

export function About() {
  return (
    <div className="about">
      <Dashboardhead />
      <div className="main-img">
        <Headslide
          headclass={"col-lg-10 main-head mx-auto d-flex flex-wrap"}
          h6class={"head-h6 col-sm-5 col-7"}
          h6={`Who we are`}
          h1={`About Us`}
          p1={`India is currently the powerhouse of fintech innovations and with many fintechs focusing on the rapid advancement of cutting-edge payment products we have become the market leader in processing digital transactions. Despite this, there is a large volume of India’s population that still doesn’t have access to basic banking facilities. We have decided to change that. With PayPe, we aim to not only create revolutionary financial solutions but also bridge the gap of technological inaccessibility between rural and urban India.`}
          headimg={
            "https://production.cyware.com/enterprise/img/cert.d54df11.svg"
          }
        />
      </div>
      <div className="what col-lg-10 mx-auto p-sm-0 py-sm-5 py-3">
        <Headtext h1={"What We DO"} line={"line"} />
        <div className="d-flex flex-wrap justify-content-around">
          <Services
            img={"https://rnfiservices.com/images/vision.png"}
            h5={`Vision`}
            p={`To become the leading financial solutions provider on the market by providing avant-garde yet simplified and seamless financial solutions.`}
          />
          <Services
            img={"https://rnfiservices.com/images/mission.png"}
            h5={`MIssion`}
            p={`To empower rural India by promoting the accessibility of financial technology with simple and efficient financial solutions, thus aiding the development of a digital BHARAT.`}
          />
        </div>
      </div>

      <Vertical />
      <Horizontal />

      <Dashboardfooter />
    </div>
  );
}
