import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <section className="h-16 text-center p-6 font-plainThin font-bold text-lg">
               <nav>
                    <Link to="/">Home</Link>
                    <Link className="ml-4" to="/aboutus">About Us</Link>
               </nav>
          </section>
     );
};

export default Header;