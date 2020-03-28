import React from 'react';
import './css/home.css';


export const Home = () => (
    <React.Fragment>
        <div className="container">
            <div className="homeText">
                <div className="homeTitleDiv">
                    <h1 className="homeTitle">Qogi</h1>
                </div>
                <div className="missiontextdiv">
                    <p className="d-inline-flex missionText">Using technology to solve problems,<br></br><br></br> step by step, to make the world a better place</p>
                </div>
                <div className="d-inline-flex learnMoreDiv ">
                    <p className="d-inline-flex learnMoreText">If you want to learn more,  <a className="clickHereHome" href="./about"> Click here!</a></p>
                </div>       
            </div>
        </div>
    </React.Fragment>
)
