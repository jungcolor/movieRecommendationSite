import React from 'react';
import MemberContainer from '../../sections/member/MemberContainer';
import NavigationContainer from '../../sections/navigation/NavigationContainer';

function Header() {
    return (
        <div id="header">
            <h2>HEADER</h2>
            <NavigationContainer />
            <MemberContainer />
        </div>
    );
}

export default Header;