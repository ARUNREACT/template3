import "../component/Layout.css";

export function Headtext(props: any) {
  return (
    <div className="headtext">
      <h6 data-aos="slide-right" className={props.h6class}>
        {props.h6} <span>{props.span}</span>
      </h6>
      <p data-aos="slide-right" className={props.pclassname}>
        {props.p}
      </p>
      <h1 data-aos="slide-right">{props.h1}</h1>
      <div data-aos="slide-right" className="mainline">
        <div className={props.line}></div>
      </div>
      <p data-aos="slide-right">{props.p1}</p>
      <a data-aos="fade-down" href={props.href}>
        {props.a}
      </a>
      <p data-aos="slide-right">{props.p2}</p>
      <p data-aos="slide-right">{props.p3}</p>
    </div>
  );
}

export function Services(props: any) {
  return (
    <div data-aos="slide-up" className="services">
      <div data-aos="zoom-in" className="servicesimg">
        <img className="img-fluid " src={props.img} alt="" />
      </div>
      <h5 data-aos="fade-up" className="pt-2">
        {props.h5}
      </h5>
      <p data-aos="fade-up">{props.p}</p>
    </div>
  );
}

export function Button(props: any) {
  return (
    <div className="d-flex justify-content-center pt-5">
      <button data-aos="fade-up" className={props.btnclassname}>
        {props.btnvalue}
      </button>
    </div>
  );
}

export function Headslide(props: any) {
  return (
    <div className={props.headclass}>
      <div className="col-md-6 col-12 pt-md-5">
        <Headtext
          h6class={props.h6class}
          h6={props.h6}
          span={props.span}
          h1={props.h1}
          p={props.p}
          p1={props.p1}
          p2={props.p2}
          p3={props.p3}
        />
      </div>
      <div className="head-slide-img col-md-6 col-12 ">
        <img
          data-aos="fade-down"
          className="img-fluid"
          src={props.headimg}
          alt=""
        />
      </div>
    </div>
  );
}

export function Input(props: any) {
  return (
    <div
      data-aos="slide-up"
      className="input-div col-lg-10 col-md-11 col-sm-7 col-12"
    >
      <i className={props.icon}></i>
      <input
        className="input-field col-sm-11 col-10"
        placeholder={props.placeholder}
        type={props.type}
      />
      <span className={props.bar}></span>
    </div>
  );
}

export function Vertical(prop: any) {
  return (
    <div className="col-lg-10 mx-auto vertical my-sm-5">
      <Headtext h1={`Our Partners`} line={"line"} />
      <div data-aos="zoom-in" className="scroll mb-md-5">
        <img src="https://rnfiservices.com/images/irctc-logo.png" />
        <img src="https://rnfiservices.com/images/protean.png" />
        <img src="https://rnfiservices.com/images/mobikwik.png" />
        <img src="https://rnfiservices.com/images/blinkit-logo.png" />
        <img src="https://rnfiservices.com/images/bank-of-baroda.png" />
        <img src="https://rnfiservices.com/images/paytm-payment-bank.png" />
        <img src="https://rnfiservices.com/images/airtel-payment-bank.png" />
        <img src="https://rnfiservices.com/images/bharat-billpay.png" />
        <img src="https://rnfiservices.com/images/bank-india-logo.png" />
        <img src="https://rnfiservices.com/images/union-bank.png" />
        <img src="https://rnfiservices.com/images/axis-bank.png" />
        <img src="https://rnfiservices.com/images/icici-bank.png" />
        <img src="https://rnfiservices.com/images/tata-mg.png" />
        <img src="https://rnfiservices.com/images/chaitanya.png" />
        <img src="https://rnfiservices.com/images/muthoot-finance.png" />
        <img src="https://rnfiservices.com/images/india-family-mart.png" />
        <img src="https://rnfiservices.com/images/travel-boutique-online.png" />
        <img src="https://rnfiservices.com/images/razorpay-logo.png" />
        <img src="https://rnfiservices.com/images/easebuzz.png" />
        <img src="https://rnfiservices.com/images/cashfree-logo.png" />
      </div>
    </div>
  );
}

export function Horizontal(props: any) {
  return (
    <div className="infinite-scroll-container ">
      <div data-aos="slide-up" className="col-lg-10 mx-auto my-sm-5 pt-2">
        <Headtext
          h6class={"head-h6"}
          h6={`From the origin`}
          h1={`Our Journey`}
          line={"line"}
        />
      </div>
      <img
        data-aos="zoom-in"
        src="https://delighted.com/wp-content/uploads/2021/01/b2b-journey-2021-01.png?w=1260"
        alt="Infinite Scroll Image"
      />
    </div>
  );
}

export function Connect(props: any) {
  return (
    <div className="connect">
      <div className="connect-child col-lg-10 mx-auto">
        <div
          data-aos="slide-right"
          className="col-md-6 pt-5 mt-5 col-12 img-content "
        >
          <Headtext
            h6class={"head-h6"}
            h6={`Have a query ?`}
            h1={`Connect with us!`}
          />
          <img
            data-aos="fade-up"
            className="img-fluid vert-move py-3 d-flex mx-auto mx-lg-0"
            src={require("../asset/sample1/management.png")}
          />
        </div>
        <div className="col-md-6 col-12 p-0">
          <div className="col-md-11 d-flex flex-column align-items-center">
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
            <Input
              icon={"fa fa-envelope"}
              placeholder={"Email"}
              type={"mail"}
              bar={"bar"}
            />
            <Input
              icon={"fa fa-envelope"}
              placeholder={"Message"}
              type={"message"}
              bar={"bar"}
            />
            <Button btnvalue={"Submit"} />
          </div>
        </div>
      </div>
    </div>
  );
}
