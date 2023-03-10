import { Headslide } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";
import { Parah } from "./Terms";

export function Privacy() {
  return (
    <div className="terms">
      <Dashboardhead />
      <div className="drop-head">
        <Headslide
          headclass={"col-lg-10  pb-sm-5 main-head mx-auto d-flex  flex-wrap"}
          h1={`Privacy Policy`}
          headimg={require("../../asset/sample1/about.png")}
        />
      </div>
      <div className="term-content col-sm-11 col-lg-10 mx-auto p-2 bg-dange">
        <Parah
          h2={`Introduction to Privacy Policy`}
          p1={`Subject to these Terms of Use, Merchant Onboarding Policy, KYC Policy, Disputes and Grievance Redressal Policy and Privacy Policy (collectively, "POLICIES"), PayPe offers the Services set forth in Schedule I herein.`}
          p2={`Schedule I also contains descriptions and process flows of all Services that are offered to Users. These descriptions and process flows are set out in Part A to Part G in Schedule I.`}
          p3={`PayPe is constantly evolving in order to provide the best possible experience and information to its Users. You acknowledge and agree that the form and nature of the Services which PayPe provides may change from time to time without any prior notice to you.`}
          p4={`As part of this continuing process, you acknowledge and agree that PayPe may stop (permanently or temporarily) providing the Services (or any features within the Services) to you or to Users generally at PayPe's sole discretion, without any prior notice. You may stop using the Services at any point of time. You do not need to specifically inform PayPe when you stop using the Services.`}
          p5={`You acknowledge and agree that if PayPe disables access to your account, you may be prevented from accessing the Services, your account details or any files or other content which is contained in your account, and PayPe shall intimate you regarding the same.`}
          p6={`PayPe reserves the right to delete your User information stored in your account including but not limited to all or any personal information or any sensitive personal data or information ("SPDI") stored in your User account. Alternately, a User may notify us if they do not wish that we retain or use the personal information or SPDI by contacting the Grievance Officer (as provided below). However, in such a case, we may not be able to provide you some or all of our Services.`}
          p7={`You acknowledge and agree that while PayPe may not currently have set a fixed upper limit on the number of transmissions you may send or receive through the Services, such fixed upper limits may be set by PayPe at any time, solely at PayPe's discretion.`}
        />
        <Parah
          h2={`Information we collect and how we use it`}
          p1={`Subject to these Terms of Use, Merchant Onboarding Policy, KYC Policy, Disputes and Grievance Redressal Policy and Privacy Policy (collectively, "POLICIES"), PayPe offers the Services set forth in Schedule I herein.`}
          p2={`Schedule I also contains descriptions and process flows of all Services that are offered to Users. These descriptions and process flows are set out in Part A to Part G in Schedule I.`}
          p3={`PayPe is constantly evolving in order to provide the best possible experience and information to its Users. You acknowledge and agree that the form and nature of the Services which PayPe provides may change from time to time without any prior notice to you.`}
          p4={`As part of this continuing process, you acknowledge and agree that PayPe may stop (permanently or temporarily) providing the Services (or any features within the Services) to you or to Users generally at PayPe's sole discretion, without any prior notice. You may stop using the Services at any point of time. You do not need to specifically inform PayPe when you stop using the Services.`}
          p5={`You acknowledge and agree that if PayPe disables access to your account, you may be prevented from accessing the Services, your account details or any files or other content which is contained in your account, and PayPe shall intimate you regarding the same.`}
          p6={`PayPe reserves the right to delete your User information stored in your account including but not limited to all or any personal information or any sensitive personal data or information ("SPDI") stored in your User account. Alternately, a User may notify us if they do not wish that we retain or use the personal information or SPDI by contacting the Grievance Officer (as provided below). However, in such a case, we may not be able to provide you some or all of our Services.`}
          p7={`You acknowledge and agree that while PayPe may not currently have set a fixed upper limit on the number of transmissions you may send or receive through the Services, such fixed upper limits may be set by PayPe at any time, solely at PayPe's discretion.`}
        />
      </div>
      <Dashboardfooter />
    </div>
  );
}

//    <Parah
//      h2={`Introduction and Terms of Use`}
//      p1={``}
//      p2={``}
//      p3={``}
//      p4={``}
//      p5={``}
//      p6={``}
//      p7={``}
//    />;
