import React from 'react';
import './css/about.css';

export const About = () => (
    <div>  
        {/* <div class="jumbotron jumbotron-fluid aboutJumbo">
            <h2 className="text-center">Our company</h2>
        </div> */}
        <div>
            <h1 className="aboutText text-center">-  About us  -</h1>
        </div>
        
        <div className="container">     
            <div className="aboutUs"> 
                {/* <h2 className="title1" style={{color: "red"}}>Our company</h2> */}
                <p className="aboutUsText">
                    <span className="red italic">Qogi solutions</span> is a Dublin based start-up aimed at provding the community with technological and software based solutions. 
                    We look to identify problems, identify possible solutions, and implement them to make the world a better place.
                </p>
                
                <div class="row">
                    <div className="col-sm">
                        <div className="lrgTextDiv">
                            <p className="aboutUsLrgText">
                                <span className="red">Identify<br></br><br></br>Interpret<br></br><br></br>Implement</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="whoWeAreDiv">
                            <h2 className="display-4 whoWeAreTitle">
                                Who We Are
                            </h2>
                            <p className="whoWeAreText">

                            </p>
                        </div>
                    </div>
                </div>
            </div><br></br>
            <div className="ourTeam">
                <p className="teamText">
                    Qogi solutions is a Dublin based start-up aimed at provding the community with technological and software based solutions. 
                    We were founded in 2019 by two students, Hasan Opiev and Mahmoud AlMahroum. 
                </p>
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