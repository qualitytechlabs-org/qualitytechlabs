import React from "react";
import { motion } from "framer-motion";
import aboutImg1 from "../assets/dummyImages/About_Dummy1.png";
import aboutImg2 from "../assets/dummyImages/About_Dummy2.png";
import aboutImg3 from "../assets/dummyImages/About_Dummy3.png";
import aboutImg4 from "../assets/dummyImages/About_Dummy4.png";
import aboutImg5 from "../assets/dummyImages/About_Dummy5.png";
import aboutImg6 from "../assets/dummyImages/About_Dummy6.png";
import aboutImg7 from "../assets/dummyImages/About_Dummy7.png";
import aboutImg8 from "../assets/dummyImages/About_Dummy8.png";
import valueImg1 from "../assets/dummyImages/value1.png";
import valueImg2 from "../assets/dummyImages/value2.png";
import valueImg3 from "../assets/dummyImages/value3.png";
import valueImg4 from "../assets/dummyImages/value4.png";



const ourImages = [
  aboutImg1,
  aboutImg2,
  aboutImg3,
  aboutImg4,
  aboutImg5,
  aboutImg6,
  aboutImg7,
  aboutImg8,
];

const companyValues = [
  {
    title: "Built on trust",
    desc: "We are an environment of trust by being reliable, consistent, and transparent. We do what we say we’re going to do, and protect and secure what we’ve done.",
    image: valueImg1,
  },
  {
    title: "Strength in diversity",
    desc: "We seek out a wide range of perspectives and experiences to reinforce our team. An inclusive, supportive culture is an integral part of our product and mission.",
    image: valueImg2,
  },
  {
    title: "Hungry and humble",
    desc: "We believe that ambitious, humble people can change the world. That means bringing as much to the table as possible, but prioritizing correctly and supporting the growth of others..",
    image: valueImg3,
  },
  {
    title: "Own our mission",
    desc: "By sticking true to our mission and values, we’ll be able to build a generational company that makes a positive change to the future..",
    image: valueImg4,
  },
];

const leaders = [
  { name: "Roger Rocha", role: "Head of Engineering", image: valueImg1 },
  { name: "Nathan Zhu", role: "CFO", image: valueImg2 },
  { name: "Elin Frid", role: "COO", image: valueImg3 },
  { name: "Nick Cust", role: "CPO", image: valueImg4 },
];

const AboutSection: React.FC = () => {
  
  return (
    <div className="bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <motion.h1
          className="mt-6 sm:mt-8 md:mt-12 
      text-3xl sm:text-4xl md:text-6xl font-serif font-bold 
      max-w-3xl text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We're on a mission to simplify technology for businesses through
          reliable, scalable, and innovative solutions.
        </motion.h1>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {ourImages.map((item, index) => (
            <img
              key={`index-${index}`}
              src={item}
              alt="team"
              className="rounded-xl object-cover"
            />
          ))}
        </div>
      </section>

      {/* BELIEFS SECTION */}
      <section className="bg-black/25 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            What we believe
          </h3>
          <h2
            className="
              w-full md:w-3/5
              text-2xl sm:text-3xl md:text-4xl
              font-serif font-bold mb-12 text-left
            "
          >
            We believe that successful startups are built with empowered teams
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {companyValues.map((item) => (
              <div key={item.title} className="text-center">
                {/* <div className="w-20 h-20 mx-auto rounded-full bg-orange-100 mb-6" /> */}
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  className="w-20 h-20 mx-auto rounded-full bg-orange-100 mb-6 object-cover"
                />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-left">
          <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            Our story
          </h3>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Quality was born from a simple idea — that equity ownership is at
            its best when it's fully appreciated
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Founders Kim Hansen and Jason Atkins saw time and time again that
            equity was being issued by founders only to be buried in legal
            jargon, ignored and ultimately misunderstood. <br />
            <br /> Using their experience in entrepreneurship, technology and
            law, they set out to change the way that teams interact with equity,
            in order to build legendary teams around the world.
            <br />
            <br /> Quality was born. Because hard working teams deserve a slice.
          </p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">
            A diverse team with a single mission
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {leaders.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt=""
                  aria-hidden="true"
                  className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4 object-cover"
                />
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gray-900 text-white py-24 px-6 text-center">
        <p className="text-gray-400 mb-2">
          Last week, 12,311 brand new publications got started.
        </p>
        <h3 className="text-3xl font-bold mb-8">Today, it's your turn.</h3>
        <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full font-medium">
          Start a Project
        </button>
      </section>
    </div>
  );
};

export default AboutSection;
