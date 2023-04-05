import React from "react";
import './styles/project.css';

function Projects(props) {
    return(
        <section id="projects">
            <div className="container">
            <div className="row">
                <div className="col-md-12 text-center mt-5">
                    <h3 className="display-3 text-title">Projects</h3>
                </div>
            </div>
            <div className="row">
            <div className="col-md-12 mt-5 mb-3">
                <ul className="nav nav-pills" id="project" role='tablist'>
                    <li className="nav-item">
                        <button className="nav-link active" id="html" data-bs-toggle="tab" data-bs-target="#nav-html">HTML&CSS</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link active" id="js" data-bs-toggle="tab" data-bs-target="#nav-js">Javascript</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link active" id="react"
                        data-bs-toggle="tab" data-bs-target="#nav-react">React</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link active" id="react-api"
                        data-bs-toggle="tab" data-bs-target="#nav-react-api">React-API</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link active" id="mern"
                        data-bs-toggle="tab" data-bs-target="#nav-mern">MERN Stack</button>
                    </li>
                </ul>
            </div>
        </div>
          
          <div className="row">
            <div className="col-md-12">
                <div className="tab-content" id="project-tab">
                    {/* {first panel} */}
                    <div className="tab-pane fade show active" id="nav-html">
                        <div className="card">
                          <div className="card-header">
                            <h5 className="text-success text-success text-center">HTML&Css projects</h5>
                          </div>
                          <div className="card-body">
                            {/* {projects} */}
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card">
                                        <img src="https://picsum.photos/id/243/400/400" alt="no image" className="card-img-top"/>
                                        <div className="card-body">
                                            <h5 className="text-center">project-1</h5>
                                            <div className="d-flex justify-content-between">
                                                <a href="#" className="btn btn-outline-success btn-sm" target='blank'>Preview</a>
                                                <a href="#" className="btn btn-outline-secondary btn-sm" target='blank'>Code</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="card">
                                        <img src="https://picsum.photos/id/243/400/400" alt="no image" className="card-img-top"/>
                                        <div className="card-body">
                                            <h5 className="text-center">project-2</h5>
                                            <div className="d-flex justify-content-between">
                                                <a href="#" className="btn btn-outline-success btn-sm" target='blank'>Preview</a>
                                                <a href="#" className="btn btn-outline-secondary btn-sm" target='blank'>Code</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="card">
                                        <img src="https://picsum.photos/id/243/400/400" alt="no image" className="card-img-top"/>
                                        <div className="card-body">
                                            <h5 className="text-center">project-3</h5>
                                            <div className="d-flex justify-content-between">
                                                <a href="#" className="btn btn-outline-success btn-sm" target='blank'>Preview</a>
                                                <a href="#" className="btn btn-outline-secondary btn-sm" target='blank'>Code</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="card">
                                        <img src="https://picsum.photos/id/243/400/400" alt="no image" className="card-img-top"/>
                                        <div className="card-body">
                                            <h5 className="text-center">project-4</h5>
                                            <div className="d-flex justify-content-between">
                                                <a href="#" className="btn btn-outline-success btn-sm" target='blank'>Preview</a>
                                                <a href="#" className="btn btn-outline-secondary btn-sm" target='blank'>Code</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>

                     {/* {second-panel} */}
                    <div className="tab-pane fade" id="nav-js">
                        <div className="card">
                          <div className="card-header">
                            <h5 className="text-success text-primary text-center">Javascript projects</h5>
                          </div>
                          <div className="card-body"></div>
                        </div>
                    </div>

                    {/* {third panel} */}

                    <div className="tab-pane fade" id="nav-react">
                        <div className="card">
                          <div className="card-header">
                            <h5 className="text-success text-primary text-center">React projects</h5>
                          </div>
                          <div className="card-body"></div>
                        </div>
                    </div>
                     
                     {/* {fourth panel} */}
                    <div className="tab-pane fade" id="nav-react-api">
                        <div className="card">
                          <div className="card-header">
                            <h5 className="text-success text-primary text-center">React-API projects</h5>
                          </div>
                          <div className="card-body"></div>
                        </div>
                    </div>

                      {/* {fifth panel} */}
                    <div className="tab-pane fade" id="nav-mern">
                        <div className="card">
                          <div className="card-header">
                            <h5 className="text-success text-primary text-center">MERN projects</h5>
                          </div>
                          <div className="card-body"></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
       
        </section>
    )
}
export default Projects