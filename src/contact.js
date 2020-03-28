import React from 'react';
import './css/contact.css';
import { PageFooter } from './components/footer';

export const Contact = () => (
    <React.Fragment>   
        <div>  
            <div>
                <h1 className="text-center contactText">-  Contact us  -</h1>
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
        <PageFooter/>
    </React.Fragment>  
)