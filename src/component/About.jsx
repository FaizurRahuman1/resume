import React from "react";
import './styles/about.css'

const url = 'https://drive.google.com/file/d/1kdMPJxl3mBGDv_XL_w6D32wWpSp2xXth/view?usp=sharing'


function About(props) {
    return(
        <section id="about">
            <div className="container mt-5 p-3">
             
             <div className="section-title text-center">
                <h2 className="text-title display-4">About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatibus aliquam, reiciendis tempore maiores minus optio voluptates pariatur qui! Magnam architecto laboriosam atque optio aliquid porro sequi dolorem a commodi.</p>
             </div>
            {/* personal info */}
             <div className="row">
                 <div className="col-md-4 col-lg-4">
                     <img src={`https://picsum.photos/id/544/500/500`} alt="no img" className="img-fluid img-thumbnail profile-img" />
                 </div>
                 <div className="col-lg-8 col-md-8 pt-lg-0 content">
                    <h3>Web & Full Stack Developer</h3>
                    <p className="text-secondary">
                        <em>Lorem ipsum dolor sit amet consectetur adipisicing elit. facere asperiores sed accusamus cum dolores dolorum? A consequuntur ea repudiandae soluta non!</em>
                    </p>

                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <i className="bi bi-envelope me-2"></i>
                                    <strong>Email</strong>
                                    <span className="text-success float-end">
                                        faizurrahuman70@gmail.com
                                    </span>
                                </li>
                            
                                <li className="list-group-item">
                                    <i className="bi bi-phone-fill me-2"></i>
                                    <strong>Mobile</strong>
                                    <span className="text-success float-end">
                                       9894214968
                                    </span>
                                </li>

                               
                                <li className="list-group-item">
                                    <i className="bi bi-browser-edge me-2"></i>
                                    <strong>Website</strong>
                                    <span className="text-success float-end">
                                    https://faizurrahuman1.github.io/template1/
                                    </span>
                                </li>

                               
                                <li className="list-group-item">
                                    <i className="bi bi-globe me-2"></i>
                                    <strong>City</strong>
                                    <span className="text-success float-end">
                                        Dindigul.Tamilnadu
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-6">
                        <ul className="list-group">
                                <li className="list-group-item">
                                    <i className="bi bi-book me-2"></i>
                                    <strong>Qualification</strong>
                                    <span className="text-success float-end">
                                       BE in Mechanical
                                    </span>
                                </li>
                            
                                <li className="list-group-item">
                                    <i className="bi bi-note me-2"></i>
                                    <strong>Certification</strong>
                                    <span className="text-success float-end">
                                      DIPLOMA IN PRODUCT DESIGN
                                      (Autocadd,solidworks) <br />
                                      MERN STACK DEVELOPER
                                    </span>
                                </li>

                              <li className="list-group-item d-grid">
                                <a href={url} target='_blank' className="btn btn-outline-info">
                                    <i className="bi bi-arrow-down"></i>Download CV
                                </a>
                              </li>

                               
                               
                            </ul>
                        </div>
                    </div>
                 </div>
             </div>

             {/* skills */}
             <div className="section-title text-center">
                <h2 className="text-title display-4">Skills</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatibus aliquam, reiciendis tempore maiores minus optio voluptates pariatur qui! Magnam architecto laboriosam atque optio aliquid porro sequi dolorem a commodi.</p>
             </div>

             <div className="row skills-content">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="skill-block mt-3 mb-3">
                <strong className="text-success">HTML <i className="val float-end">98%</i></strong>
                    <div className="progress" role="progressbar">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width:`98%`}}>98%</div>

                    </div>
                    </div>
                    
                    <div className="skill-block mt-3 mb-3">
                <strong className="text-danger">Css & Css3 <i className="val float-end">88%</i></strong>
                    <div className="progress" role="progressbar">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{width:`88%`}}>88%</div>

                    </div>
                    </div>

                    <div className="skill-block mt-3 mb-3">
                <strong className="text-primary">Javascript <i className="val float-end">80%</i></strong>
                    <div className="progress" role="progressbar">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{width:`80%`}}>80%</div>

                    </div>
                    </div>

                    <div className="skill-block mt-3 mb-3">
                <strong className="text-secondary">Jquery <i className="val float-end">80%</i></strong>
                    <div className="progress" role="progressbar">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{width:`80%`}}>80%</div>

                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="skill-block mt-3 mb-3">
                <strong className="text-info">Bootstrap <i className="val float-end">80%</i></strong>
                    <div className="progress" role="progressbar">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width:`80%`}}>80%</div>
                    </div>
                    </div>

                    <div className="skill-block mt-3 mb-3">
                <strong className="text-warning">React <i className="val float-end">70%</i></strong>
                    <div className="progress" role="progressbar">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width:`70%`}}>70%</div>

                    </div>
                    </div>

                    <div className="skill-block mt-3 mb-3">
                <strong className="text-dark">Nodejs & Expressjs <i className="val float-end">80%</i></strong>
                    <div className="progress" role="progressbar">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" style={{width:`80%`}}>80%</div>

                    </div>
                    </div>

                    <div className="skill-block mt-3 mb-3">
                <strong className="text-success">MangoDB <i className="val float-end">70%</i></strong>
                    <div className="progress" role="progressbar">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width:`70%`}}>70%</div>

                    </div>
                    </div>
                </div>
             </div>
             {/* end of skills */}
         </div>
        </section>
    )
}
export default About