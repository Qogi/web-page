import React from 'react';
import './css/contact.css';

export const Contact = () => (
    <div>  
        <div class="jumbotron jumbotron-fluid contactJumbo">
            <div className="contactJumboField">
                <h2 className="text-center contactText">
                    Contact us
                </h2>
                <p className="text-center contactText2">
                    Our team is happy to answer to any questions, queries or requests
                </p>
            </div>
        </div>
        <div className="container contactContainer">
            <div class="grid-3 center contactGrid">
                <div className="contactMethod">
                    <i class="fas fa-envelope"></i>
                    <span>qogidevs@gmail.com</span>
                </div>
                <div className="contactMethod">
                    <i class="fas fa-mobile-alt"></i>
                    <span>+353 89 123 4567</span>
                </div>
                <div className="contactMethod">
                    <i class="fas fa-map-pin"></i>
                    <span>Dublin, Ireland</span>
                </div>
            </div>
        </div>
    </div>  
)