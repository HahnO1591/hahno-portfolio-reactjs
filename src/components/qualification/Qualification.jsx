import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  
  return (
    <section className="qualification section" id="experience">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div
                 className={
                  toggleState === 1
                   ? "qualification__button qualification__active button--flex"
                    : "qualification__button button--flex"
                  }
                  onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={
                  toggleState === 2
                   ? "qualification__button qualification__active button--flex"
                    : "qualification__button button--flex"
                  }
                  onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
              <div
               className={
                toggleState === 1
                 ? "qualification__content qualification__content-active" 
                 : "qualification__content"
                }
              >
                <div className="qualification__data">
                  <div className='qualification__box'>
                    <h3 className="qualification__title">Responsive Web Design</h3>
                      <span className="qualification__subtitle">@ freeCodeCamp</span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> Jan 2023 to Feb 2023
                      </div>
                      <a href="https://www.freecodecamp.org/certification/Hahn1591/responsive-web-design" target="_blank" className='view-certificate'><i class='bx bx-medal'></i> View Certificate</a>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div className='qualification__box'>
                    <h3 className="qualification__title">Full Stack Web Development</h3>
                      <span className="qualification__subtitle">@ Zuitt Coding Bootcamp</span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> May 2022 to June 2022
                      </div>
                      <a href="http://share.zertify.zuitt.co/certificate/4419c8e2-0260-4331-82bb-867c41c275f2/" target="_blank" className='view-certificate'><i class='bx bx-medal'></i> View Certificate</a>
                  </div>
                </div>

                <div className="qualification__data">
                <div className='qualification__box'>
                    <h3 className="qualification__title">The Complete Javascript Course</h3>
                      <span className="qualification__subtitle">@ Udemy</span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> Dec 2022 to current
                      </div>
                      <a href="" target="_blank" className='view-certificate'><i class='bx bx-medal'></i> Available Soon</a>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div className='qualification__box'>
                    <h3 className="qualification__title">React - The Compelte Guide</h3>
                      <span className="qualification__subtitle">@ Udemy</span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> Dec 2022 to current
                      </div>
                      <a href="" target="_blank" className='view-certificate'><i class='bx bx-medal'></i> Available Soon</a>
                  </div>
                </div>

                <div className="qualification__data">
                <div className='qualification__box'>
                    <h3 className="qualification__title">Web Development (OJT)</h3>
                      <span className="qualification__subtitle">@ TRC</span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> 2012
                      </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    
                  </div>

                  <div className='qualification__box'>
                    <h3 className="qualification__title">BS Information Technology major in Computer Science</h3>
                      <span className="qualification__subtitle">@ Quezon City Polytechnic University</span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> 2009 to 2013
                      </div>
                  </div>
                </div>
              </div>

              <div className={
                toggleState === 2
                 ? "qualification__content qualification__content-active" 
                 : "qualification__content"
                }>
                <div className="qualification__data">
                <div className='qualification__box'>
                    <h3 className="qualification__title">Full Stack Web Development</h3>
                      <span className="qualification__subtitle">@ Zuitt Coding Bootcamp</span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> May 2022 to June 2022
                      </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div className="qualification__data">
                  <div></div>



                </div>
                </div>

                

                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div className='qualification__box'>
                    <h3 className="qualification__title">Customer Service Representative</h3>
                      <span className="qualification__subtitle">@ Ibex Global</span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> Nov 2021 to March 2022
                      </div>
                  </div>
                </div>

                <div className="qualification__data">
                <div className='qualification__box'>
                    <h3 className="qualification__title">Customer Service Representative</h3>
                      <span className="qualification__subtitle">@ Afni</span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> April 2021 to Aug 2021
                      </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div className='qualification__box'>
                    <h3 className="qualification__title">Graphic Designer</h3>
                      <span className="qualification__subtitle">@ Freelance</span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> Mar 2018 to Mar 2021
                      </div>
                  </div>
                </div>

                <div className="qualification__data">
                <div className='qualification__box'>
                    <h3 className="qualification__title">Customer Service Representative</h3>
                      <span className="qualification__subtitle">@ C3/Customer Contact Channels</span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> April 2016 to Aug 2017
                      </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    
                  </div>

                  <div className='qualification__box'>
                    <h3 className="qualification__title">Office Clerk</h3>
                      <span className="qualification__subtitle">@ @ BDO Insurance Brokers, Inc.</span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> Sept. 2014 to Feb. 2015
                      </div>
                  </div>
                </div>

              </div>

            </div>
        </div>
    </section>
  )
}

export default Qualification
