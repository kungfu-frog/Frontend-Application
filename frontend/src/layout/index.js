import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';

const AdminLayout = props => {
    return (
        <div className="container">
            <Header/>
            <Aside/>
            <div className="main">
                {props.children}
            </div>
            <Footer/>
        </div>
    );
}

export default AdminLayout;