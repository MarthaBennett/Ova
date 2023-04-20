import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About Ova</h1>

            <p>Hello! I'm Martha. I live in London. I have Endometriosis and I'm Ova it.</p>
            
            <p>I'm new to coding and this is one of my first forays into creating a personal project.</p>

            <h3>Why have you made Ova?</h3>
            
            <p>It took me 14 years, over 30 GPs, 10 gynaecologists and losing the ability to walk before I was diagnosed with Endometriosis, so I'm 
            keen to make sure that those coming after me do not have to fight so hard for diagnosis and care.</p>

            <p>In the UK, it currently takes an average of 8 years for someone to be diagnosed with Endometriosis.</p>

            <h3>What is Endometriosis and who does it affect?</h3>

              <p>Endometriosis is a whole-body condition that affects 1 in 10 people with wombs so it is as common as Asthma or Diabetes, yet there is very little research or funding awarded 
            to the condition. </p>
            
                <p>There are over 178 million people living with Endometriosis in the world today.</p>

                  <p>Endometriosis is not often life-threatening but it can be significantly life-limiting. It can compromise someone's fertility, prevent them from working or socialising 
            and/or cause a host of unpleasant symptoms such as vomiting, fainting, painful sex, migraines, depression, bowel issues, acute pain month-round and 
            nerve damage. </p>

            <h3>Why make an app?</h3>
                    <p>In lieu of a biomarker, a cure or updates in the way conditions like Endometriosis are taught in medical school, tech can help us create a data 
            set that cannot be ignored.</p>

                  <p>We're Ova it.</p>
                  <div class="footer-spacer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;