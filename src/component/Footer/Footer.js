import React from 'react';

const Footer = () => {

     const getDate = new Date();
     const Year = getDate.getFullYear();

     return (
          <div className="mt-24 font-kenokyLight text-xl ml-8">
               <section>
                    <div>
                         <h2>Dhaka</h2>
                         <h2>Bangladesh</h2>
                         <br />
                         <h2>ahmedrimon377472@gmail.com</h2>
                         <h2>+88 016 1016 2457</h2>
                    </div>
                    <div className="flex mt-8 text-2xl">
                         <div>
                              <a className="block" href="#work">Work</a>
                              <a className="block mt-2" href="#service">Service</a>
                              <a className="block mt-2" href="#about">About</a>
                         </div>
                         <div className="ml-8 md:ml-[20rem] lg:ml-[35rem] 2xl:ml-[60rem] 3xl:ml-[70rem]">
                              <a href="#careers">Careers</a>
                              <h2 href="#contact" className="mt-2">Contact</h2>
                         </div>
                    </div>
               </section>
               <section className="font-apercu mt-[6rem] mb-10 h-2/3">
                    <p className="text-sm">Part of Design</p>
                    <section className="flex mt-4">
                         <div>
                              <a className="text-md" href="https://www.facebook.com/anonnoruddho/" target="_blank" rel="noreferrer">Facebook</a>
                              <a className="text-md ml-4" href="#facebook">Instagram</a>
                              <a className="text-md ml-4" href="#Linkedin">Linkedin</a>
                         </div>
                         <div className="ml-[5rem] mt-[0.3rem]">
                              <p className="text-sm sm:ml-[8rem] md:ml-[14rem] lg:ml-[32rem] xl:ml-[44rem] 2xl:ml-[56rem] 3xl:ml-[80rem]">©{Year}</p>
                         </div>
                    </section>
               </section>
          </div>
     );
};

export default Footer;