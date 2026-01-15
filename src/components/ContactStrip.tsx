import React from 'react';

const ContactStrip: React.FC = () => {
  return (
    <section className="service-contact">
      <div className="service-shell service-contact__grid">
        <div className="service-contact__block">
          <p className="service-kicker">Contact</p>
          <h4 className="service-contact__headline">info@qualitytechlabs.com</h4>
          <p className="service-contact__text">
            C-312 Gali no 13, Mulla Colony, Vasundhara enclave, East Delhi 110096
          </p>
        </div>

        <div className="service-contact__links">
          <div>
            <p className="service-contact__label">Company</p>
            <p>About us</p>
            <p>Contact us</p>
            <p>Our Work</p>
          </div>
          <div>
            <p className="service-contact__label">Work</p>
            <p>Our Work</p>
            <p>News</p>
            <p>Contact us</p>
          </div>
          <div>
            <p className="service-contact__label">Career</p>
            <p>Open Roles</p>
            <p>Culture</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
