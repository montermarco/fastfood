import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">
                <img src="/imgs/logoff.png" alt="logo"/>
            </Link>
        </div>
    );
};

export default Header;