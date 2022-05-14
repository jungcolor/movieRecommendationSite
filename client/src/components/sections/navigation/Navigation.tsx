import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div>
                <Link to="/">HOME</Link>
            </div>
            <div>
                <Link to="/comment">COMMENT</Link>
            </div>
        </nav>
    );
}

export default Navigation;