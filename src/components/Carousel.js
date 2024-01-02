import React from "react";
import './carousel.css';
import {Carousel} from 'react-bootstrap';
import ieee from '../images/logo.jpg';
import devops from '../images/devops-multicolor.png';
import github from '../images/github-action-01.webp';
import dockerkubernetes from '../images/docker-kubernetes.jpg';
import gcp from '../images/NEW-GCP-Logo.png'

const Carouselhome =()=>{
    return(
        <div className="carousel">
        <Carousel className="carousel-fade">
            <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={ieee} alt="IEEE logo"/>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={devops} alt="DevOps"/>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={github} alt="github actions"/>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={dockerkubernetes} alt="docker-kubernetes"/>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={gcp} alt="gcp"/>
            </Carousel.Item>

        </Carousel>
        
        </div>
    )

}

export default Carouselhome;