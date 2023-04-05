import React from "react";
import "./styles/resume.css"

function Resume(props) {
    return(
       <section id="resume">
         <div className="container mt-5 p-3">
            <div className="section-title text-center">
                <h2 className="text-info display-4">Resume</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum voluptas delectus cum tempora, corporis suscipit aut porro cumque magni quas repellat quod magnam voluptates, asperiores quis unde voluptate neque eveniet!</p>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h6 className="display-6 text-secondary">Education</h6>
                    <div className="resume-item pb-0">
                        <h4>Bachelors Degree</h4>
                        <h5>2014-2019</h5>
                        <p><em>Karpagam University,Coimbatore</em></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus non.</p>
                    </div>

                    <div className="resume-item pb-0">
                        <h4>Higher Secondary Education</h4>
                        <h5>2012-2014</h5>
                        <p><em>Akshaya Academy,Palani</em></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus non.</p>
                    </div>

                    <div className="resume-item pb-0">
                        <h4>Secondary Education</h4>
                        <h5>2010-2012</h5>
                        <p><em>Vidhyaa Sikshaa Matric hr sec school,Dindigul</em></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus non.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h6 className="display-6 text-secondary">Certifications</h6>

                    <div className="resume-item pb-0">
                        <h4>MERN Stack</h4>
                        <h5>2023</h5>
                        <p><em>Be Practical Tech Solutions, Bengalore</em></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus non.</p>
                    </div>

                    <div className="resume-item pb-0">
                        <h4>Web Development</h4>
                        <h5>2023</h5>
                        <p><em>Be Practical Tech Solutions, Bengalore</em></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus non.</p>
                    </div>
                </div>
            </div>
        </div>
       </section>
    )
}
export default Resume