import React from "react"
import styled from "styled-components"
import { Wrapper } from "../styles/baseStyles"

function ContactUs() {
  return (
    <ContactUsSec>
      <Wrapper>
        <div className="d-flex">
          <div className="personal-information">
            <h2>Contact Us</h2>
            <p>
              Let's make something new, different and more meaningful or make
              thing more visual or conceptual?
            </p>
            <div className="infos">
              <div className="d-flex">
                <figure>
                  <img src="" alt="" />
                </figure>
                <div className="content">
                  <h6>Call me</h6>
                  <p></p>
                </div>
              </div>
              <div className="d-flex">
                <figure>
                  <img src="" alt="" />
                </figure>
                <div className="content">
                  <h6>Email</h6>
                  <p></p>
                </div>
              </div>
              <div className="d-flex">
                <figure>
                  <img src="" alt="" />
                </figure>
                <div className="content">
                  <h6>Address</h6>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="social-link">
              <p>Find Me on</p>
            </div>
          </div>
          <div className="contact-form">
            <h2>Drop a Line</h2>
            <form action="">
              <div className="d-flex">
                <input type="text" className="form-input" placeholder="Name" />
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email"
                />
              </div>
              <div className="d-flex">
                <input
                  type="phone"
                  className="form-input"
                  placeholder="Phone#"
                />
                <select className="form-input">
                  <option hidden>Budget</option>
                  <option value="1000-5000">1000-5000</option>
                  <option value="5000-10000">1000-5000</option>
                </select>
              </div>
              <textarea className="form-input" cols="30" rows="10" placeholder="Message"></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </Wrapper>
    </ContactUsSec>
  )
}
const ContactUsSec = styled.div`
  background: #060606;
  padding: 5em 0;
  .personal-information {
    flex-basis: 40%;
  }
  .contact-form {
    flex-basis: 60%;
  }
`
export default ContactUs
