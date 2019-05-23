import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
        <div>
            <div className="header">
                    <Link to="/"><img src="/imgs/logoffs.png" alt="logo" className='logo'/></Link>
            </div>
        </div> 



    );
};

export default Header;
