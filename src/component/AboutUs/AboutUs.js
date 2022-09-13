import React from 'react';

import framePhoto from '../../images/frame-photo.png';

const AboutUs = () => {
     return (
          <div className="h-[60vh] mt-10">
               <img className="ml-[5rem] sm:ml-[9rem] md:ml-[14rem] lg:ml-[20rem] xl:ml-[28rem] 2xl:ml-[36rem] 3xl:ml-[42rem] 4xl:ml-[46rem]" src={framePhoto} alt="individual stuff"/>
               <p className="text-xl font-inter font-normal p-10 2xl:w-2/3 2xl:mx-auto">
                    Iftekhar Ahmed completed Diploma in Electrical then he going to finding what he do and finally decide his passion in Web development. new thing make things on your own to create a equal amount of distinction. Learn & Grow
               </p>
          </div>
     );
};

export default AboutUs;