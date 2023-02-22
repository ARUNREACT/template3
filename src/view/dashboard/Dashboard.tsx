import "./Dashboard.styles.css";
import { Dashboardfooter } from "../dashboradfooter/Dashboardfooter";
import { Dashboardhead } from "../dashboardhead/headoption/Dashboardhead";
import "../../config/Color.css";
import {
  Button,
  Connect,
  Headtext,
  Horizontal,
  Input,
  Services,
  Vertical,
} from "../../component/Layout";
import Chart from "./Map";

export function Dashboard(): JSX.Element {
  return (
    <div className="home  mx-auto">
      <Dashboardhead />
      <div className="main-img">
        <div className="col-lg-10 d-flex flex-wrap mx-auto main-content  px-0">
          <div className="col-md-7 col-12 pt-md-5">
            <Headtext
              h6class={"head-h6 col-sm-5 col-7"}
              h6={`We are PayPe`}
              h1={`Revolutionary Fintech solutions for growth and acceleration`}
              p1={`At PayPe Tech Pvt Ltd, we strive to simplify digital payments to
              make them more convenient, reliable, and accessible for all,
              ensuring that location is not a limiting factor.`}
              a={`Read more ≻`}
              href={"/about"}
            />
          </div>
          <div className="col-md-5 col-12 d-md-block d-none">
            <div
              data-aos="fade-up"
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://www.rnfiservices.com/images/relipay-banner-1.png"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.rnfiservices.com/images/relipay-banner-1.png"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.rnfiservices.com/images/relipay-banner-1.png"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-services col-10 mx-auto p-0">
        <Headtext
          h6class={"head-h6"}
          h6={`What you can get`}
          h1={`Our Services`}
          line={"line"}
        />
        <Headtext
          pclassname={"col-lg-8 mt-lg-4 pt-lg-5 px-0 "}
          p={`With help of our innovative and hardworking team, we have created a
          pool of distinguished payment products and services with multiple
          Partnered Banks & Clients.`}
        />

        <div className="d-flex flex-wrap justify-content-around">
          <Services
            img={
              "https://uxwing.com/wp-content/themes/uxwing/download/banking-finance/mobile-money-transfer-icon.png"
            }
            h5={`Money Transfer`}
            p={`With our Domestic Money Transfer services, any customer can transfer money across Pan India through our expansive retailer network`}
          />
          <Services
            img={
              "https://cdn1.iconfinder.com/data/icons/soleicons-solid-vol-1/64/aadhaar_aadhar_card_driving_license_id-512.png"
            }
            h5={`Aadharr Banking`}
            p={`With our Domestic Money Transfer services, any customer can transfer money across Pan India through our expansive retailer network`}
          />
          <Services
            img={"https://static.thenounproject.com/png/4096449-200.png"}
            h5={`Mini ATM`}
            p={`With our Domestic Money Transfer services, any customer can transfer money across Pan India through our expansive retailer network`}
          />
          <Services
            img={
              "https://cdn0.iconfinder.com/data/icons/payments-3/66/60-512.png"
            }
            h5={`Digital Payment`}
            p={`With our Domestic Money Transfer services, any customer can transfer money across Pan India through our expansive retailer network`}
          />
          <Services
            img={
              "https://cdn4.iconfinder.com/data/icons/cab-line/128/Cab_-_Line_-_Expand-05-512.png"
            }
            h5={`Utility Payments`}
            p={`With our Domestic Money Transfer services, any customer can transfer money across Pan India through our expansive retailer network`}
          />
          <Services
            img={"https://cdn-icons-png.flaticon.com/512/2301/2301788.png"}
            h5={`Travel Services`}
            p={`With our Domestic Money Transfer services, any customer can transfer money across Pan India through our expansive retailer network`}
          />
          <Services
            img={"https://cdn-icons-png.flaticon.com/512/2956/2956548.png"}
            h5={`CMS`}
            p={`With our Domestic Money Transfer services, any customer can transfer money across Pan India through our expansive retailer network`}
          />
          <Services
            img={
              "https://icon-library.com/images/membership-card-icon/membership-card-icon-17.jpg"
            }
            h5={`PAN Card`}
            p={`With our Domestic Money Transfer services, any customer can transfer money across Pan India through our expansive retailer network`}
          />
        </div>
      </div>
      <div className="map mt-5">
        <div className="col-lg-10 mx-auto p-0 d-flex flex-wrap ">
          <div className="col-md-6 col-12 map-content">
            <Headtext
              h1={`One platform for all FinTech needs`}
              p1={`We have an emphatic presence in all the states of India with a deep-rooted network in urban, rural, and micro-rural DEHAT of BHARAT. The realm of agents spread across are well equipped and trained to serve the customers with every digital payment need.`}
              a={`Mission & Vision ≻`}
              href={"/about"}
            />
          </div>

          <div className="col-md-6 col-12 map-img py-sm-5 ">
            <Chart />
          </div>
        </div>
      </div>

      <Vertical />

      <Horizontal />

      <Connect />

      <Dashboardfooter />
    </div>
  );
}
