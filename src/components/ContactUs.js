import React, { useContext } from "react"
import styled from "styled-components"
import { Wrapper, PrimaryBtn } from "../styles/baseStyles"
import githubLogo from "../images/github.png"
import callIcon from "../images/phone.svg"
import mailIcon from "../images/email.svg"
import locationIcon from "../images/location.svg"
import elementContext from "./ElementContext"

function ContactUs() {
  let { contactUs } = useContext(elementContext)
  console.log("effect Contact us")
  return (
    <ContactUsSec
      className="common-sec"
      id="contactUs"
      ref={contactUs.reference}
      data-placement="5"
    >
      <Wrapper>
        <div className="d-flex">
          <div className="personal-information">
            <h2>Contact Us</h2>
            <p>
              Let's make something new, different and more meaningful or make
              thing more visual or conceptual?
            </p>
            <div className="infos">
              <div className="d-flex mb-2">
                <figure>
                  <img src={callIcon} alt="" />
                </figure>
                <div className="content">
                  <h6>Call me</h6>
                  <p>+123 456 7890</p>
                </div>
              </div>
              <div className="d-flex mb-2">
                <figure>
                  <img src={mailIcon} alt="" />
                </figure>
                <div className="content">
                  <h6>Email</h6>
                  <p>vinaykennedy@gmail.com</p>
                </div>
              </div>
              <div className="d-flex">
                <figure>
                  <img src={locationIcon} alt="" />
                </figure>
                <div className="content">
                  <h6>Address</h6>
                  <p>27 Division St, New York, NY 10002, USA</p>
                </div>
              </div>
            </div>
            <div className="social-link">
              <p>Find Me on</p>
              <a>
                <img src={githubLogo} alt="" />
              </a>
            </div>
          </div>
          <div className="contact-form">
            <h2>Drop a Line</h2>
            <form action="">
              <div className="d-flex form-spacing">
                <input type="text" className="form-input" placeholder="Name" />
                <input
                  type="email"
                  className="form-input mr-0"
                  placeholder="Email"
                />
              </div>
              <div className="d-flex form-spacing">
                <input
                  type="phone"
                  className="form-input"
                  placeholder="Phone#"
                />
                <select className="form-input  mr-0">
                  <option hidden>Budget</option>
                  <option value="1000-5000">1000-5000</option>
                  <option value="5000-10000">1000-5000</option>
                </select>
              </div>
              <textarea
                className="form-input mr-0"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <PrimaryBtn className="submit-btn">Submit</PrimaryBtn>
            </form>
          </div>
        </div>
      </Wrapper>
    </ContactUsSec>
  )
}
const ContactUsSec = styled.div`
  .personal-information {
    flex-basis: 40%;
    h2 {
      margin: 0 0 0.5em 0;
    }
    & > p {
      margin-bottom: 2em;
    }
    .infos {
      margin: 0 0 2em 0;
      figure {
        width: 3.063em;
        height: 3.063em;
        background-color: #000000;
        border: 1px solid #333333;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 1em 0 0;
      }
      .mb-2 {
        margin-bottom: 1em;
      }
      h6 {
        font-size: 1em;
        font-weight: normal;
        color: #6b6b6b;
      }
    }
    .social-link {
      p {
        margin-bottom: 0.5em;
      }
    }
  }
  .contact-form {
    flex-basis: 60%;
    margin-left: 1em;
    h2 {
      margin-bottom: 1em;
    }
    .form-input {
      border: 1px solid #333333;
      background-color: transparent;
      padding: 1em;
      flex: 1;
      width: 100%;
      color: #fff;
      margin: 0 2em 0 0;

      &::placeholder {
        color: #707070;
        font-size: 1.125em;
      }
      &.mr-0 {
        margin-right: 0;
      }
    }
    .form-spacing {
      margin: 0 0 2em 0;
    }
    select.form-input {
      color: #707070;
    }
    textarea.form-input {
      height: 12.813em;
      width: 100% !important;
      resize: none;
      margin-bottom: 2em;
      font-size: 1.125em;
    }
    .submit-btn{
      cursor: default;
    }
  }
`
export default ContactUs
