import React from "react";

function Contact(props) {
    return(
        <section id="contact">
            <div className="container">
              <section className="section-title mt-5">
                <h3 className="text-title display-3 mt-5 text-center">Contact</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam praesentium, laboriosam ipsam natus consequuntur tempore vel, asperiores itaque ab eligendi, sapiente quasi libero? Iusto at, nesciunt suscipit impedit dolorum excepturi.</p>
              </section>
              <div className="rpw mt-5">
                <div className="col-md-4 col-lg-4">
                    <div className="info">
                        <div className="address">
                            <i className="bi bi-geo-alt"></i>
                            <h4 className="text-title">Location</h4>
                            <p>24/D,Kannimar kovil street,Dindigul-624708</p>
                        </div>

                        <div className="email">
                            <i className="bi bi-envelope"></i>
                            <h4 className="text-title">Email-ID</h4>
                            <p>faizurrahuman70@gmail.com</p>
                        </div>

                        <div className="address">
                            <i className="bi bi-phone"></i>
                            <h4 className="text-title">Call</h4>
                            <p>9894214968</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-8 col-lg-8 mt-2 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <form action="" autoComplete="off">
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" name="name" id="name" className="form-control" required />
                                </div>

                                <div className="form-group mt-2">
                                    <label htmlFor="name">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" required />
                                </div>

                                <div className="form-group mt-2">
                                    <label htmlFor="name">Messages</label>
                                    <textarea name="msg" id="msg" cols='30' rows='5' className="form-control" required></textarea> 
                                </div>
                               
                               <div className="form-group mt-2">
                                <input type="submit" value='submit' className="btn btn-outline-secondary"/>
                               </div>
                            </form>
                        </div>
                    </div>
                </div>
              </div>
        </div>
        </section>
    )
}
export default Contact