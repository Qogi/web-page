import React from 'react';
import './css/products.css';
import { PageFooter } from './components/footer';

export const Products = () => (
    <React.Fragment>   
        <div>
            <div>
                <h1 className="productText text-center">-  Products page  -</h1>
            </div>
            <section class="services">
                <div class="grid-3 center">
                    <div>
                        <i class="fab fa-youtube fa-10x youtubeIcon"></i>
                        <h3>Youtube</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Alias, omnis laboriosam deleniti cupiditate nemo in?</p>
                    </div>
                    <div>
                        <i class="fas fa-chalkboard-teacher fa-10x coursesIcon"></i>
                        <h3>Courses</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Alias, omnis laboriosam deleniti cupiditate nemo in?</p>
                    </div>
                    <div>
                        <i class="fas fa-briefcase fa-10x projectsIcon"></i>
                        <h3>Freelancing Projects</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Alias, omnis laboriosam deleniti cupiditate nemo in?</p>
                    </div>
                    <div>
                        <i class="fas fa-briefcase fa-10x projectsIcon"></i>
                        <h3>Freelancing Projects</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Alias, omnis laboriosam deleniti cupiditate nemo in?</p>
                    </div>
                </div>
            </section>
        </div>
        <PageFooter/>
    </React.Fragment> 
)
