import React from "react";
import homepage from "../images/homepage.jpg";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={homepage}
              alt="an anatomical diagram of the vulva"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Ova</h1>
            <p>
              An app to help you get diagnosed sooner. 


            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;