import React from 'react';
import './css/about.css';
import Image from 'react-bootstrap/Image'

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
                                We are a small team of ambitious individuals who are constantly on the hunt to improve that which is around them. We look to identify any problems present in society, find 
                                possible society and environmentally friendly solutions, and implement these solutions in a swift and efficient manner. 


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
                <h2 className="text-center ourTeamTitle">Our Team</h2>
                <div class="row">
                    <div className="col-sm">
                        <Image src="./assets/images.jpg" fluid />
                    </div>
                    <div className="col-sm">
                        <h3>Hasan Opiev</h3>
                    </div>
                </div>    
                <div class="row">
                    <div className="col-sm">
                        <h3>Mahmoud AlMahroum</h3>
                    </div>
                    <div className="col-sm">
                        <Image src="./assets/images.jpg" fluid />
                    </div>
                </div> 
            </div>
        </div>
    </div>
)