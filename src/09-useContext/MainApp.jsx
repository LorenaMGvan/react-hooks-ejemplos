import React from 'react';
import { Navigate, Route, Routes , Link } from 'react-router-dom';

// import { Navigate, Route, Routes , Link } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
    return (
        <UserProvider>
            <Navbar />
            {/* quiero hacer que este MainApp se muestre en todas las páginas */}
            <Routes>
                <Route path="/"  element={< HomePage />}/>
                <Route path="about"  element={< AboutPage />}/>
                <Route path="login"  element={< LoginPage />}/>
                <Route path="/*"  element={ <Navigate to="/about" />}/>
            </Routes>
        </UserProvider>
    )

}