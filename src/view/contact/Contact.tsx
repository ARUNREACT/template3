import { Connect } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";
export function Contact() {
  return (
    <div className="contact">
      <Dashboardhead />
      <div>
        <Connect />
      </div>
      <Dashboardfooter />
    </div>
  );
}
