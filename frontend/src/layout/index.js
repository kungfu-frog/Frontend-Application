import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';

const AdminLayout = props => {
    return (
        <div className="container">
            <Header/>
            <div className="wrap">
                <Aside/>
                <div className="main">
                    {props.children}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AdminLayout;