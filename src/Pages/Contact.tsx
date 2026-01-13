import React from "react";
import "../css/ContactPage.css";
import FooterMinimal from "../components/FooterMinimal";
import NextSteps from "../components/NextSteps";
import SocialMedia from "../components/SocialMedia";

const ContactUs: React.FC = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <p className="tagline">CONNECT WITH US!</p>
          <h1>
            Turn Your Vision Into an <br />
            Experience That Lasts
          </h1>

          <div className="email">✉️ business@qualitytechlabs.com</div>
          <div className="flex  gap-4 mb-5">
            <SocialMedia />
          </div>
        </div>

        <div className="hero-right">
          <h2>Let’s Talk</h2>

          <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Company" />
            <input type="tel" placeholder="Phone number" />
            <textarea placeholder="Message" />

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <NextSteps />

      {/* Footer */}
      <FooterMinimal />
    </div>
  );
};

export default ContactUs;

//  Send it to the moon 🚀
