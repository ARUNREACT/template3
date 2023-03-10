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
      <div className="col-md-6 col-12">
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
        <img src={require("../asset/sample1/partners/part1.png")} />
        <img src={require("../asset/sample1/partners/part2.png")} />
        <img src={require("../asset/sample1/partners/part3.png")} />
        <img src={require("../asset/sample1/partners/part4.png")} />
        <img src={require("../asset/sample1/partners/part5.png")} />
        <img src={require("../asset/sample1/partners/part6.png")} />
        <img src={require("../asset/sample1/partners/part7.png")} />
        <img src={require("../asset/sample1/partners/part8.png")} />
        <img src={require("../asset/sample1/partners/part9.png")} />
        <img src={require("../asset/sample1/partners/part10.png")} />
        <img src={require("../asset/sample1/partners/part11.png")} />
        <img src={require("../asset/sample1/partners/part12.png")} />
        <img src={require("../asset/sample1/partners/part13.png")} />
        <img src={require("../asset/sample1/partners/part14.png")} />
        <img src={require("../asset/sample1/partners/part15.png")} />
        <img src={require("../asset/sample1/partners/part16.png")} />
        <img src={require("../asset/sample1/partners/part17.png")} />
        <img src={require("../asset/sample1/partners/part18.png")} />
        <img src={require("../asset/sample1/partners/part19.png")} />
        <img src={require("../asset/sample1/partners/part20.png")} />
      </div>
    </div>
  );
}
export function Horizontal(props: any) {
  return (
    <div className="infinite-scroll-container py-5 my-5">
      <div data-aos="slide-up" className="col-lg-10 mx-auto">
        <Headtext
          h6class={"head-h6"}
          h6={`From the origin`}
          h1={`Our Journey`}
          line={"line"}
        />
      </div>
      <div>
        <img
          className="img-fluid"
          data-aos="zoom-in"
          src={require("../asset/sample1/hori.png")}
          alt="Infinite Scroll Image"
        />
      </div>
    </div>
  );
}
export function Connect(props: any) {
  return (
    <div className="connect ">
      <div className="connect-child col-lg-10 mx-auto py-5 my-5 py-sm-0 my-sm-0">
        <div data-aos="slide-right" className="col-md-6 col-12 img-content ">
          <Headtext
            h6class={"head-h6"}
            h6={`Have a query ?`}
            h1={`Connect with us!`}
          />
          <img
            data-aos="fade-up"
            className="img-fluid vert-move d-flex mx-auto mx-lg-0"
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
