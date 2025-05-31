import "./ContactForm.css"
import React from "react";


export default function ContactForm(){
    return (
        <div className="contactForm">
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
                    <input type="text" className="nameInput"/>
                </div>
            </div>

            <div className="contactContentSection">
                <div className="contactContentHeader">
                    Email:
                </div>
                <div className="contactContentBox">
                    <input type="text" className="nameInput"/>
                </div>
            </div>

            <div className="contactContentSection">
                <div className="contactContentHeader">
                    Subject:
                </div>
                <div className="contactContentBox">
                    <input type="text" className="nameInput"/>
                </div>
            </div>
            <div style={{height: "1vw"}}></div>
            <div className="contactContentSection">
                <div className="contactContentHeader">
                    Message:
                </div>
                <div className="contactMessageRegion">
                    <textarea className="messageArea"></textarea>
                </div>
            </div>
            <button className="contactSubmit">Submit</button>

        </div>
    );
}
