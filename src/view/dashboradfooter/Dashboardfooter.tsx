import "./Dashboardfooter.styles.css";

export function Option(props: any) {
  return (
    <div className="d-flex flex-column option">
      <h5 className="p-0 ">{props.h5}</h5>
      <span></span>
      <a href={props.a1href}>{props.a1name}</a>
      <a href={props.a2href}>{props.a2name}</a>
      <a href={props.a3href}>{props.a3name}</a>
      <a href={props.a4href}>{props.a4name}</a>
      <a href={props.a5href}>{props.a5name}</a>
    </div>
  );
}
export function Icon(props: any) {
  return (
    <p className="d-flex icon">
      <a href={props.href}>
        <i className={props.icon}></i>
      </a>
      {props.p}
      <br />
      {props.p1}
    </p>
  );
}

export function Dashboardfooter() {
  return (
    <div className="main-footer">
      <div className="footer col-lg-11 mx-auto d-flex flex-wrap pt-5 p-0">
        <div className="col-md-3 col-sm-6 one ">
          <Option h5={`Head Office`} />
          <Icon
            icon={"fa fa-map-marker fs-5"}
            p={`UG-5,PayPe House,Plot No.42,`}
            p1={` DLF Industrial Area, Kirti Nagar,New Delhi - 110015, India`}
          />
          <Icon
            icon={"fa fa-phone fs-5"}
            p={`011 4920 7777`}
            p1={`012 0476 8888`}
          />
          <Icon icon={"fa fa-envelope fs-6"} p={`Paype@1234gmail.com`} />
        </div>
        <div className="col-md-3 col-sm-6  order-1 order-md-0">
          <Option
            h5={`Our Company`}
            a1href={"/"}
            a1name={`Home`}
            a2href={"/about"}
            a2name={`About`}
            a3href={"/contact"}
            a3name={`Contact us`}
            a4href={"/terms"}
            a4name={`Terms & Conditions`}
            a5href={"/privacy"}
            a5name={`Privacy Policy`}
          />
        </div>
        <div className="col-md-3 col-sm-6  order-1 order-sm-2 order-md-0">
          <Option
            h5={`Services`}
            a1href={"/money"}
            a1name={`Money Transfer`}
            a2href={"/aadhaarbanking"}
            a2name={`Aadhaar Banking`}
            a3href={"/microatm"}
            a3name={`Micro ATM`}
            a4href={"/digital"}
            a4name={`Digital Payment`}
            a5href={"/utilities"}
            a5name={`Utility Payments`}
          />
        </div>
        <div className="col-md-3 col-sm-6 four order-1 order-sm-2 order-md-0">
          <Option
            a1href={"/travel"}
            a1name={`Travel Services`}
            a2href={"/cms"}
            a2name={`CMS`}
            a3href={"/pan"}
            a3name={`PAN Card`}
            a4href={"/itr"}
            a4name={`ITR Filling`}
          />
        </div>
        <div className="col-md-3 col-sm-6 col-7  one">
          <Option h5={`Sales Helpdesk`} />
          <Icon icon={"fa fa-envelope fs-6"} p={`Paype@1234gmail.com`} />
          <Icon icon={"fa fa-phone fs-5"} p={`011 4920 7777`} />
        </div>

        <div className="col-md-3 col-sm-6 order-md-0 order-2 social">
          <Option h5={`Follow us on`} />
          <div
            className=" col-8 col-sm-12 d-flex p-0"
            style={{ marginTop: "-25px" }}
          >
            <Icon href={"#"} icon={"fa fa-facebook fs-3 "} />
            <Icon href={"#"} icon={"fa fa-twitter fs-3 "} />
            <Icon href={"#"} icon={"fa fa-youtube fs-3 "} />
            <Icon href={"#"} icon={"fa fa-instagram fs-3 "} />
            <Icon href={"#"} icon={"fa fa-linkedin fs-3 "} />
            <Icon href={"#"} icon={"fa fa-google fs-3 "} />
          </div>
        </div>
        <div className="col-md-3 col-sm-6 order-1  order-md-0 ">
          <Option
            h5={`Products`}
            a1href={"/api"}
            a1name={`API`}
            a2href={"/pos"}
            a2name={`POS`}
          />
        </div>
        <p className="text-center order-4 col-12 mt-4 last">
          © 2021 PayPe PVT. LTD. ALL RIGHT RESERVED.
        </p>
      </div>
    </div>
  );
}
