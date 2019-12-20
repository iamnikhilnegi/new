import React from 'react';
import SideBarLabel from './sideBarLabel.jsx';
// eslint-disable-next-line no-unused-vars

function SideBarPanel() {

    return (
        <div className="side-bar-panel">
            <SideBarLabel Label="Home" toPath='/' />
            <SideBarLabel Label="Profile" toPath='/profile' />
            <SideBarLabel Label="Register" toPath='/register' />
            <SideBarLabel Label="Login" toPath='/login' />
        </div>
    );
}

export default SideBarPanel;