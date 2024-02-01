import React, { useEffect } from 'react'
import { useState } from 'react'
import Piechart from '../../Components/Charts/PieChart'
import axios from 'axios'
import { useProject } from '../../context/ProjectContext'
import { useNavigate, useParams } from 'react-router-dom'



const CustomerDashBoard = () => {
    const [activePieChart, setActivePieCart] = useState('/pichart')

    const { projects, getProjectsByDesigner } = useProject();
    const [project, setProject] = useState(null)
    const [projectChart, setProjectChart] = useState(null)


    const { project: currentProjectId } = useProject()

    const { pId } = useParams();

    const navigate = useNavigate();


    const [data, setData] = useState([]);
    const [budget, setBudget] = useState([])

    // 65ba04c7150e86bb9e7d6621
    // 65ba0567150e86bb9e7d6626


    const fetchRoomsById = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/v1/project/get-single/65ba04c7150e86bb9e7d6621`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('auth')}`
                }
            })

            console.log(response)
            console.log('response.data from project', response.data)
            setProject(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchRoomChartById = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/v1/project/getProjectByIdChart/65ba04c7150e86bb9e7d6621`, {
                headers: {

                    'Authorization': `Bearer ${localStorage.getItem('auth')}`
                }
            })


            console.log('response.data from project', response.data)
            setProjectChart(response.data)



        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchRoomChartById()
        fetchRoomsById()
    }, [])


    useEffect(() => {
        console.log('project from customer ', project)

    }, [project])

    return (
        <div>
            <div className="flex-grow text-gray-800">
                <main className="p-6 sm:p-10 space-y-6">
                    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">

                        <div className="flex-1">

                            <button className='btn bg-green-500 p-2 rounded' onClick={() => navigate(`/chat/${pId}`)}>Chat</button>
                        </div>
                    </div>
                    <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                        <div className="flex items-center p-8 bg-white shadow rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">{Math.round(project?.percentageOfCompletionProject)}%</span>
                                <span className="block text-gray-500">Completed</span>
                            </div>
                        </div>
                        <div className="flex items-center p-8 bg-white shadow rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">{Math.round(100 - project?.percentageOfCompletionProject)}%</span>
                                <span className="block text-gray-500">Remaining</span>
                            </div>
                        </div>
                        <div className="flex items-center p-8 bg-white shadow rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">{project?.rooms.length}</span>
                                <span className="block text-gray-500">Rooms</span>
                            </div>
                        </div>
                        <div className="flex items-center p-8 bg-white shadow rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                                </svg>
                            </div>
                            <div>
                                <span className="inline-block text-2xl font-bold">{project?.tasks.length}</span>
                                <span className="block text-gray-500">Tasks</span>
                            </div>
                        </div>
                        <div className="flex items-center p-8 bg-white shadow rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">{project?.project?.budget}</span>
                                <span className="block text-gray-500">Budget</span>
                            </div>
                        </div>
                    </section>
                    <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
                        <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                            {/* <div className='flex gap-4'>
                                <div
                                    className={`px-6 py-5 font-semibold border-b border-gray-100 border-4 p-2 ${activePieChart === '/pichart' ? 'bg-green-300' : ''}`}
                                    onClick={() => setActivePieCart('/pichart')}
                                >
                                    Project Status
                                </div>
                                <div
                                    className={`px-6 py-5 font-semibold border-b border-gray-100 border-4 p-2 ${activePieChart === '/pichartbudget' ? 'bg-green-300' : ''}`}
                                    onClick={() => setActivePieCart('/pichartbudget')}
                                >
                                    Budget Status
                                </div>
                            </div> */}


                            <div className="p-4 flex-grow">
                                {/* <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Chart</div> */}
                                {

                                    <Piechart api={'getProjectByIdChart/65ba04c7150e86bb9e7d6621'} />
                                }
                            </div>
                        </div>
                        
                        <div className="row-span-3 bg-white shadow rounded-lg">
                            <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                                <span>Current Work going on</span>
                                <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
                                    Descending
                                    <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {/* Refer here for full dropdown menu code: https://tailwindui.com/components/application-ui/elements/dropdowns */}
                            </div>
                            <div className="overflow-y-auto" style={{ maxHeight: '24rem' }}>
                                <ul className="p-6 space-y-6">
                                    {
                                        projects.map((project) => (
                                            <li className="flex items-center">
                                                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                                    <img src="data:image/jpeg;base64,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" alt="Annette Watson profile picture" />
                                                </div>
                                                <span className="text-gray-600">{project?.project?.title}</span>
                                                <span className="ml-auto font-semibold">{
                                                    project?.project?.budget || 0
                                                }</span>
                                            </li>
                                        ))
                                    }



                                </ul>
                            </div>
                        </div>
                        {/* <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
              <div className="px-6 py-5 font-semibold border-b border-gray-100">Students by type of studying</div>
              <div className="p-4 flex-grow">
                <div className="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Chart</div>
              </div>
            </div> */}
                    </section>

                </main>
            </div>
        </div>

    )
}

export default CustomerDashBoard