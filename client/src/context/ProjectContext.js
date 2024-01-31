// ProjectContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {

    const [projects, setProjects] = useState([]);


    const [project, setProject] = useState(null);


    const setCurrentproject = (project) => {

        setProject(project);
    }


    const createProject = async (payload) => {
        try {
            const { title, description, homeOwnerEmail, homeOwnerPhone } = payload;
            const response = await axios.post('http://localhost:4000/api/v1/project/create', { title, description, homeOwnerEmail, homeOwnerPhone }, {
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
            console.log(response.data.projects)
            setProjects(response.data.projects)
            return response
        } catch (error) {
            console.log(error);
            return error.response;
        }
    }



    return (
        <ProjectContext.Provider value={{ createProject, projects, getProjectsByDesigner, project, setCurrentproject }}>
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
