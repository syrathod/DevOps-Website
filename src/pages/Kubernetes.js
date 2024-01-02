import React from 'react'
import "./pages.css"
import kube_img from "../images/Kubernetes-removebg-preview.png"
function Kubernetes() {
    return (
        <div className="kube_page">
            <h1><b>Kubernetes</b> </h1>

            <p style={{ fontSize: 20, fontWeight: 600 }}>
                Kubernetes is an open source container orchestration
                platform that automates many of the manual processes involved in deploying,
                managing, and scaling containerized applications. It helps you fully implement
                and rely on a container-based infrastructure in production environments. And
                because Kubernetes is all about automation of operational tasks, you can do many
                of the same things other application platforms or management systems let you do,
                but for your containers. Under Kubernetes the main points to be discussed are:
            </p>
            <br />
            <ul className="kube_points">
                <li>Introduction to container orchestration</li>
                <li>Tools for Orchestration and need of Kubernetes</li>
                <li>Introduction to Kubernetes and its architecture</li>
                <li>The Terminology involved in Kubernetes and its installation</li>
                <li>Hands-on demo of commands in minikube</li>
            </ul>
            <img src={kube_img} alt="" className='kube_img'/>
        </div>
    )
};

export default Kubernetes