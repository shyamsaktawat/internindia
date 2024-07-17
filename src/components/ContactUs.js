import React from 'react';


function ContactUs() {
  return (
    <main>
      {/* Hero */}
      <section className="section section-header pb-11 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-8 text-center">
              <h1 className="display-2 mb-3">Get in touch today</h1>
              <p className="lead">Have a new project in mind? Drop us a line about your project needs, we answer same day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="section py-0">
        <div className="container mt-n10">
          <div className="row">
            <div className="col-12">
              <iframe 
                className="map rounded" 
                id="gmap_canvas" 
                src="https://maps.google.com/maps?q=san%20francisco&t=&z=8&ie=UTF8&iwloc=&output=embed"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <section className="section section-lg pt-6">
        <div className="container">
          <div className="row justify-content-center mb-5 mb-lg-6">
            <div className="col-12 col-lg-8">
              <div className="card border-0 p-2 p-md-3 p-lg-5">
                <div className="card-header bg-white border-0 text-center">
                  <h2>Want to work with us?</h2>
                  <p>Cool! Let's talk about your project</p>
                </div>
                <div className="card-body px-0 pt-0">
                  <form action="#">
                    <div className="mb-4">
                      <label htmlFor="name">Your Name</label>
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon3"><span className="fas fa-user-circle"></span></span>
                        <input type="text" className="form-control" placeholder="e.g. Bonnie Green" id="name" required />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email">Your Email</label>
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon4"><span className="fas fa-envelope"></span></span>
                        <input type="email" className="form-control" placeholder="example@company.com" id="email" required />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message">Your Message</label>
                      <textarea placeholder="Your message" className="form-control" id="message" rows="4" required></textarea>
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn rounded btn-secondary">Send message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;