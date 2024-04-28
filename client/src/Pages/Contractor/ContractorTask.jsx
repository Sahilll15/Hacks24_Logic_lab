import React from 'react'
import LongCard from '../../Components/Cards/LongCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const ContractorTask = () => {

  const { taskId } = useParams()
  const [task, setTask] = useState([])

  const getTaskById = async () => {


    const response = await axios.get(`http://localhost:4000/api/v1/contractor/get/task/${taskId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('auth')}`
      }

    })

    console.log(response.data.task)
    setTask(response.data.task)

  }


  useEffect(() => {
    getTaskById()
  }, [])


  return (
    <div>
      <div className='mt-4'>
        <LongCard task={task} name="Plaster work" id="1" desc="hall cieling plaster workk pending" status="Completed" />
      </div>
    </div>
  )
}

export default ContractorTask