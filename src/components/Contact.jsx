import React from "react";

function Link(props) {
  return (
      <div className="contact_div">
          <img src={props.source} alt="" />
          <br />
          <a className="c-div btn" href={props.refLink}>{props.anchorText}</a>
      </div>
  );
}

function Contact() {
    return (
        <div className="contact-me">
            <h2 className="c-div">Contact Me</h2>
            <Link source= "images/github.png" refLink="https://github.com/jasonzhao1" anchorText="GitHub"/>
            <Link source= "images/email.png" refLink="mailto:x332zhao@uwaterloo.ca" anchorText="Email Me"/>
            <Link source= "images/linkedin.png" refLink="https://www.linkedin.com/in/jzhao0226/" anchorText="LinkedIn"/>
            <Link source= "images/facebook.png" refLink="https://www.facebook.com/jason.zhao.777701" anchorText="FaceBook"/>
        </div>
    )
}

export default Contact;