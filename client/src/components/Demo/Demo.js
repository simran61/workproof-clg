import React from "react";
import { Link } from "react-router-dom";
import men from "./men.png";
import women from "./women.png";
import study from "./study.jpg";
import interview from "./interview.jpg";
import brand from "./brand.png";
import blob from "./blob.png";
import standOut from "./standOut.png";
import networking from "./networking.png";
import portfolio from "./portfolio.png";
import comments from "./comments.png";
import dev from "./dev.png";
import "./styles.css";

const Demo = () => {
  return (
    <div className="demo">
      <img className="men" src={men} alt="" />
      <div className="header_line">
        We believe in work, not in a piece of paper
      </div>
      <h1 className="primary_heading">
        It's Time For <br /> A <span className="blue">New</span> Way Of <br />{" "}
        Success
      </h1>
      <div className="tagline">
        A one step solution for all your projects related curosity and an
        alternative for you old fasioned resumes!
      </div>
      <img className="women" src={women} alt="" />
      <Link to="/">
        <button className="btn_primary">Get Started</button>
      </Link>
      <div className="position">
        <div className="show_flex">
          <img src={study} alt="" className="image1" />
          <img src={interview} alt="" className="image2" />
        </div>
        <img src={blob} className="blob" alt="" />
      </div>
      <div className="placements">
        <h1 className="brand_heading">
          More than 20+ users got placed in top companies by building their
          portfolio
        </h1>
        <img src={brand} alt="" className="brand_img" />
        <hr />
      </div>
      <div className="features">
        <h1>Why should you use WorkProof</h1>
        <div className="cards_container">
          <div className="card">
            <img src={standOut} alt="" className="card_img" />
            <h2 className="card_title">Stand Out</h2>
            <div className="card_desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              dolores sed laudantium alias tempora obcaecati!
            </div>
          </div>

          <div className="card">
            <img src={networking} alt="" className="card_img" />
            <h2 className="card_title">Networking</h2>
            <div className="card_desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              dolores sed laudantium alias tempora obcaecati!
            </div>
          </div>

          <div className="card">
            <img src={comments} alt="" className="card_img" />
            <h2 className="card_title">Comments Feedback</h2>
            <div className="card_desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              dolores sed laudantium alias tempora obcaecati!
            </div>
          </div>

          <div className="card">
            <img src={portfolio} alt="" className="card_img" />
            <h2 className="card_title">Online Portfolio</h2>
            <div className="card_desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              dolores sed laudantium alias tempora obcaecati!
            </div>
          </div>
        </div>
      </div>
      <div className="developers">
        <h1 className="developers_heading">Meet the</h1>
        <span className="span_heading">developers...</span>
        <p className="dev_para">
          Meet all the developers who build this web app from scratch as a one
          step solution as an for your resume and fear of being a tier 2 or tier
          3 college student.
        </p>
        <img className="set_dev" src={dev} alt="" />
      </div>
      <div className="footer">
        <h2 className="">Want to know more?</h2>
        <div className="input_div">
          <input
            className="input"
            placeholder="Enter your email..."
            type="email"
          />
          <button className="btn_primary submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
