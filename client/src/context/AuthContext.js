// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:4000/api/v1/auth/login', { email, password });
            setUser(response.data.user);
            setToken(response.data.token);
            return response
        } catch (error) {
            console.log(error);
            return error.response;
        }
    };


    const register = async (name, email, role, password, phoneNumber) => {
        try {
            const response = await axios.post('http://localhost:4000/api/v1/auth/register', { name, email, password, role, phone: phoneNumber });
            return response
        } catch (error) {
            console.log(error);
            return error.response;
        }
    }

    const logout = () => {
        setUser(null);
    };


    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
