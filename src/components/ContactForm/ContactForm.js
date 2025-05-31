import "./ContactForm.css"
import React from "react";
import emailjs from "emailjs-com"


function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_3szjdhy', 'template_papgv7o', e.target, 'q2R6piG4JV4lLTJwP')
    .then(result => {
      console.log('Message sent!');
        e.target.reset();
    }, error => {
      console.log('Error:', error.text);
    });
}

export default function ContactForm(){
    return (
        <form onSubmit={sendEmail} className="contactForm">
            <center>
                <div className="contactTitle">
                     Contact Form
                </div>
            </center>

                <div className="contactContentSection">
                <div className="contactContentHeader">
                    Name:
                </div>
                <div className="contactContentBox">
                    <input type="text" className="nameInput" name="name" required/>
                </div>
            </div>

            <div className="contactContentSection">
                <div className="contactContentHeader">
                    Email:
                </div>
                <div className="contactContentBox">
                    <input type="text" className="nameInput" name="email" required/>
                </div>
            </div>

            <div className="contactContentSection">
                <div className="contactContentHeader">
                    Subject:
                </div>
                <div className="contactContentBox">
                    <input type="text" className="nameInput" name="Subject" required/>
                </div>
            </div>
            <div style={{height: "1vw"}}></div>
            <div className="contactContentSection">
                <div className="contactContentHeader">
                    Message:
                </div>
                <div className="contactMessageRegion">
                    <textarea className="messageArea" name="message" required></textarea>
                </div>
            </div>
            <button className="contactSubmit" type="submit">Submit</button>

        </form>
    );
}
