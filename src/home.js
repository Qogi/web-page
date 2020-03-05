import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container, Button } from 'react-bootstrap';
import './css/home.css';


export const Home = () => (
    
    <div>
        <div className="jumbotron jumbotronA"></div>
        <Container>
            <div className="homeText">
                <h1 className="display-4 ">Qogi</h1>
                <h3>
                    Modern technology solutions
                    <br></br><small className="text-muted">A start-up aimed at providing the community with simple technological solutions</small>
                </h3>
                <div className="homeButton" >
                    <Button href="./about"  size="lg" className="learnButton">Learn About Us</Button>
                </div>
            </div>
        </Container>
        <div className="jumbotron jumbotronB"></div>
        {/* <div className="container">
            <br></br><h1 className="display-5 text-center ">What we do</h1>
            <p className="text-center">
                Our team works in 3 stages ..
            </p>
            <div class="card-deck homeCards">
                <div class="card identifyCard"> 
                    <br></br><h5 class="identify-title text-center">Identify</h5>
                    <i className="far fa-lightbulb lightbulb fa-10x"></i>
                    <div class="card-body identifyBody">
                        <p class="identify-text">Identify a problem within the wider community</p>
                    </div>
                </div>
                <div class="card createCard">
                    <br></br><h5 class="create-title text-center">Create</h5>
                    <img class="card-img-top createImg" src="./assets/createImg.png" alt="Create"/>
                    <div class="card-body createBody">
                        <p class="create-text">Create software or technology that solves the problem</p>
                    </div>
                </div>
                <div class="card implementCard">
                    <br></br><h5 class="implement-title text-center">Implement</h5>
                    <img class="card-img-top implementImg" src="./assets/implementImg.png" alt="Implement"/>
                    <div class="card-body implementBody">
                        <p class="implement-text">Implement the solution into society</p>
                    </div>
                </div>
            </div>
            
        </div> */}
    </div>
)
