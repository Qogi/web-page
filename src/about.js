import React from 'react';
import './css/about.css';

export const About = () => (
    <div>  
        <div class="jumbotron jumbotron-fluid aboutJumbo">
        
        </div>
        <div className="container">     
            <div className="aboutUs "> 
                <h2 className="text-center">About Us</h2>
                <p className="text-center">
                    Qogi solutions is a Dublin based start-up aimed at provding the community with technological and software based solutions. 
                    <br></br>We were founded in 2019 by two students, Hasan Opiev and Mahmoud AlMahroum. 
                </p>
            </div><br></br>
            <div className="ourTeam">
                <h2 className="text-center">Our Team</h2>
                <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top hasanImg" src="./assets/images.jpg" alt="Hasan Opiev image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Hasan Opiev</h5>
                            <p class="card-text">Trinity College Dublin</p>
                            <p class="card-text"><small class="text-muted">Founder</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top mahmoudImg" src="..." alt="Mahmoud Al-Mahroum image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Mahmoud Al-Mahroum</h5>
                            <p class="card-text">Technological University Dublin</p>
                            <p class="card-text"><small class="text-muted">Founder</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)