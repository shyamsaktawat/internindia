
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout'; 

import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    
  useEffect(() => {
    const elts = {
      text1: document.getElementById("text1"),
      text2: document.getElementById("text2")
    };

    const texts = ["Internship Certificates", "Competitive Coding", "Resume Building", "Placement Support", "Community Support", "Interactive Classes"];
    const morphTime = 1.50;
    const cooldownTime = 1.15;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    function setMorph(fraction) {
      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown() {
      morph = 0;

      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";

      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
    }

    function animate() {
      requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime - time) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();
  }, []);
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the duration of the internship program?",
      answer: "The internship program is structured over three exciting months, each focusing on different aspects of learning and skill development. It's a journey of growth and discovery!"
    },
    {
      question: "What can I expect to learn during the first month?",
      answer: "The first month is a knowledge powerhouse! You'll dive into theoretical learning from industry experts, engage in live interactive sessions, clear your doubts, and participate in 4-5 weekly sessions via Zoom or Google Meet. It's like drinking from a firehose of information!"
    },
    {
      question: "How is the second month of the program structured?",
      answer: "Month two is where the rubber meets the road! You'll apply concepts learned in the first month, work on real-time projects with mentor assistance, and complete both individual (7-day sprint) and group (21-day marathon) projects. It's time to put your skills to the test!"
    },
    {
      question: "What support is provided during the third month?",
      answer: "The third month is your launchpad to success! You'll go through multiple mock interview sessions, get hands-on resume building assistance, and receive placement support to prepare you for exciting job opportunities. We're committed to helping you land your dream role!"
    },
    {
      question: "What additional benefits does the program offer?",
      answer: "We've got perks galore! You'll receive internship certificates, access competitive coding opportunities, enjoy community support, and join an exclusive WhatsApp community for networking and additional resources. It's not just an internship; it's a complete growth package!"
    }
  ];
  

  return (
    <Layout>
         
    {<div className="landing-page">
      

      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="Zoom max-w-2xl mb-12 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              <div id="container">
                <span id="text1"></span>
                <span id="text2"></span>
              </div>
              <svg id="filters" style={{display: 'none'}}>
                <defs>
                  <filter id="threshold">
                    <feColorMatrix in="SourceGraphic"
                      type="matrix"
                      values="1 0 0 0 0
                              0 1 0 0 0
                              0 0 1 0 0
                              0 0 0 255 -140" />
                  </filter>
                </defs>
              </svg>
            </h1>
          </div>
          <div className="hidden mt-12 sm:gap-24 sm:mt-12 md:mt-12 lg:mt-12 sm:w-48 lg:col-span-5 lg:flex">
            <img src="/images/newlogo.png" alt="hero image" />
          </div>
        </div>
      </section>
      <section className="bg-blue-50 dark:bg-blue-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <h1 className="max-w-2xl mb-12 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Internship + Training <br />Course Structure
          </h1>
          
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">1st MONTH</h1>
              
              <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Theoretical learning from Industrial Experts.</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Live interactive sessions.</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Doubt clearing sessions.</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Weekly 4-5 sessions via Zoom or Google Meet.</span>
                </li>
              </ul>
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">2nd MONTH</h1>
              
              <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Application of concepts learned in the first month.</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Real-time Projects with proper mentor assistance, to build an attractive resume.</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Minor Project - Individual (07 days).</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Major Project - Group (21 days).</span>
                </li>
              </ul>
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">3rd MONTH</h1>
              
              <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Multiple sessions of Mock</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Resume building</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Placement Assistance</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Guest Lecture</span>
                </li>
              </ul>
            </div>
            <img className="w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/iphone2.png" alt="dashboard feature image" />
          </div>
          <section className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div className="max-w-screen-sm mx-auto text-center">
              <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Start your <span className="text-blue-600">Internship Today</span></h2>
              <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Apply for your internship in just a few steps. Application fee: 1000 rupees.</p>
              <a href="/apply" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                Apply Now
              </a>
            </div>
          </div>
        </section>
        
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Network with smart people</h2>
              <h2 className="mb-8 font-light text-2xl">Great things happen when great people come together. It's Magic!</h2>
              <h2 className="mb-8 font-light text-2xl">Connect with a diverse community of minds to network, share ideas, and gain valuable insights into your work.</h2>
            </div>
            <img className="w-full mb-4 rounded-lg lg:mb-0 lg:flex custom-image-container1 custom-rounded-image1" src="./images/community1.png" alt="dashboard feature image" />
          </div>
        
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
              <li className="flex space-x-3 items-center ">
                <img src="./images/cf.png" alt="CodeForces" className="w-24 h-12 object-contain" />
                <svg className="flex-shrink-0 w-8 h-8 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </li>
              <li className="flex space-x-3 items-center ">
                <img src="./images/tc_new_logo-300x156-removebg-preview.png" alt="LeetCode" className="object-contain" />
                <svg className="flex-shrink-0 w-8 h-8 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </li>
              <li className="flex space-x-3 items-center ">
                <img src="./images/1668775330427-removebg-preview.png" alt="LeetCode" className="object-contain" />
                <svg className="flex-shrink-0 w-8 h-8 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </li>
            </ul>
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white text-right">Boost your ratings with our community</h2>
              <img className="w-full mb-4 rounded-lg lg:mb-0 lg:flex custom-rounded-image" src="./images/finaliphone.png" alt="dashboard feature image" />
            </div>
          </div>
        
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                <span className="text-blue-600">Learn</span> by doing and taking inspiration from others
              </h2>
              <h2 className="mb-4 text-2xl tracking-tight dark:text-white">
                Talk to people about design, marketing, web3, and a lot more!
              </h2>
              <p>
                Upskill by participating in hackathons, live events, and speaker sessions.
              </p>
            </div>
            <div className="custom-image-container">
              <img className="w-full mb-4 lg:mb-0 lg:flex custom-rounded-image" src="./images/meet.png" alt="dashboard feature image" />
            </div>
          </div>
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-8 xl:gap-16">
          <div className="w-full lg:order-1 order-2 overflow-hidden">
            <div className="image-container">
              <img className="responsive-image w-full mb-4 lg:mb-0" src="./images/Untitled(3).png" alt="dashboard feature image" />
            </div>
          </div>
          <div className="w-full lg:order-2 order-1">
            <h2 className="mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Get Your Offer Letter within 
              <span className="text-blue-600">24 Hours </span> of registration
            </h2>
          </div>
        </div>
    
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-8 xl:gap-16">
          <div className="w-full lg:order-1 order-2">
            <h2 className="mb-4 text-xl sm:text-xl md:text-3xl lg:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              ✅Unique internship certificates from partners <br />
              ✅Company-partnered certification program  <br />
              ✅Long-lasting, special certification value<br />
            </h2>
          </div>
          <div className="w-full lg:order-2 order-1 overflow-hidden">
            <div className="image-container">
              <img className="responsive-image w-full mb-4 lg:mb-0" src="./images/INTERNSHIPCERTIFICATE.png" alt="dashboard feature image" />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-8 xl:gap-16">
          <div className="w-full lg:order-1 order-2 overflow-hidden">
            <div className="image-container">
              <img className="responsive-image w-full mb-4 lg:mb-0" src="./images/jobgroup.png" alt="dashboard feature image" />
            </div>
          </div>
          <div className="w-full lg:order-2 order-1">
            <h2 className="mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Welcome to Intern India: Your Premium WhatsApp Channel for Internship and Job Notifications, with YouTube Tutorials for Registration and Job Process Assistance.                        
            </h2>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-8 xl:gap-16">
          <div className="w-full lg:order-1 order-2">
            <h2 className="mb-4 text-xl sm:text-xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              ✅Clear your doubts with experts <br />
              ✅Get Access to our exclusive Material  <br />
              ✅Hints for all contest here <br />
              ✅Join with us to learn more<br /> 
            </h2>
          </div>
          <div className="w-full lg:order-2 order-1 overflow-hidden">
            <div className="image-container">
              <img className="responsive-image w-full mb-4 lg:mb-0" src="./images/codinggroup.png" alt="dashboard feature image" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
   
    <section className="bg-white dark:bg-gray-900">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <h1 className="text-lg font-medium text-3xl text-purple-600 md:text-3xl dark:text-purple-800">community support</h1>
          <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">Get support from a community of over 500 like minded student </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</p>
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <a href="#" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                Explore Legality Guide
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
            <div>
              <a href="#" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                Visit the Trust Center
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
            <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path></svg>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">24*7 support</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">get dedicated support on each and every thing on </p>
          </div>
          <div>
            <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">500+ Users</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">Trusted by over 500 users </p>
          </div>
          <div>
            <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path></svg>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">10+ college's</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">our students come from over 10+ college</p>
          </div>
          <div>
            <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">10+ placements</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">over 10+ placements </p>
          </div>
        </div>
      </div>
    </section>
    <section id="home" className="bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-4xl px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-extrabold text-center text-gray-900 dark:text-white">
          Frequently Asked <span className="text-purple-600">Questions</span>
        </h2>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openQuestion === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {openQuestion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 bg-purple-50 dark:bg-gray-700">
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>}
    
  </Layout>
    

    
  
);
}

export default LandingPage;


     