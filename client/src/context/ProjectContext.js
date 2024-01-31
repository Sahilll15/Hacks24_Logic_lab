// ProjectContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {

    const [projects, setProjects] = useState([]);


    const createProject = async (name, description, hasOwnerEmail, hasOwnerPhone) => {
        try {
            const response = await axios.post('http://localhost:4000/api/v1/project/create', { name, description, hasOwnerEmail, hasOwnerPhone }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('auth')}`
                }
            });

            console.log(response.data.project)
            return response
        } catch (error) {
            console.log(error);
            return error.response;
        }
    }

    const getProjectsByDesigner = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/project/designer', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('auth')}`
                }
            });
            setProjects(response.data.projects)
            return response
        } catch (error) {
            console.log(error);
            return error.response;
        }
    }



    return (
        <ProjectContext.Provider value={{ createProject, projects, getProjectsByDesigner }}>
            {children}
        </ProjectContext.Provider>
    );
};

const useProject = () => {
    const context = useContext(ProjectContext);
    if (!context) {
        throw new Error('useProject must be used within an ProjectProvider');
    }
    return context;
};

export { ProjectProvider, useProject };
