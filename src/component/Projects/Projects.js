import React from 'react';

import reactExplore from '../../images/reactExplore.png';
import icamDistribution from '../../images/icamDistribution.png';

const Projects = () => {
     return (
          <div>
               <h2 className="font-kenokyLight text-[7vw] ml-[68vw] mt-14">Projects</h2>
               <div>
                    <div>
                         <img className="w-8/12 lazyload" src={icamDistribution} alt="other projects" />
                         <section className="flex justify-start">
                              <div className="font-kenokyLight ml-12 mt-[3%]">
                                   <h1 className="text-[2vw] 1xs:text-2xl sm:text-sm 3xl:text-2xl">By Iftekhar Ahmed</h1>
                                   <h1 className="text-[2vw] 1xs:text-2xl sm:text-sm 3xl:text-2xl">September -- 2022</h1>
                              </div>
                              <button className="bg-[#CC9933] rounded-lg p-2 font-saolDisplayRegular ml-10 mt-[3%]">
                                   <a className="text-white" href="https://icam-distribution.netlify.app/" target="_blank" rel="noreferrer">Live Link</a>
                              </button>
                         </section>
                    </div>
                    <div className="mt-[5%]">
                         <img className="w-8/12 lazyload" src={reactExplore} alt="other projects" />
                         <section className="flex justify-start">
                              <div className="font-kenokyLight ml-12">
                                   <h1 className="text-[2vw] 1xs:text-2xl sm:text-sm 3xl:text-2xl">By Iftekhar Ahmed</h1>
                                   <h1 className="text-[2vw] 1xs:text-2xl sm:text-sm 3xl:text-2xl">August -- 2022</h1>
                              </div>
                              <button className="bg-[#CC9933] rounded-lg p-2 font-saolDisplayRegular ml-10">
                                   <a className="text-white" href="https://react-explore.netlify.app" target="_blank" rel="noreferrer">Live Link</a>
                              </button>
                         </section>
                    </div>
               </div>
          </div>
     );
};

export default Projects;