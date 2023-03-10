import { PersonFill, LockFill } from "react-bootstrap-icons";
import { Button, Input } from "../../component/Layout";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";

export function Login() {
  return (
    <div className="login">
      <Dashboardhead />

      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="signup-body "></div>
        <div className="oo col-lg-9  col-11"></div>
        <form className="form-body col-lg-9  col-11 ">
          <div className="d-flex align-items-center justify-content-center flex-wrap">
            <div className="form-img col-12 col-md-6">
              <img
                className="img-fluid"
                src={require("../../asset/sample1/guy.png")}
              ></img>
            </div>

            <div className="form-content col-12 col-md-6">
              <h2 className="mb-3 text-white">𝐋𝐎𝐆𝐈𝐍</h2>

              <Input
                icon={"icon fa fa-user"}
                placeholder={"Name"}
                type={"name"}
                bar={"bar"}
              />
              <Input
                icon={"fa fa-mobile"}
                placeholder={"mobile"}
                type={"number"}
                bar={"bar"}
              />
              <Button btnvalue={"Submit"} />

              <p className="mt-4 text-white">I am already a member</p>
              <a className="text-decoration-none text-white fs-5 " href="#">
                Sign up
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
