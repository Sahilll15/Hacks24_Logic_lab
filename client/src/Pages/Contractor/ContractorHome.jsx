import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";
import NewProjectForm from "../../Components/Designer/Home/NewProjectForm";
import ImageCard from "../../Components/Cards/ImageCard";

const ContractorHome = () => {

    
  return (
<div>
      <div className="min-h-screen bg-gray-50">
        <div>
          <p className="ml-4 text-2xl">
            <br/>
            WELCOME, <b className="text-orange-400">Contractor NAME</b>
          </p>
        </div>
        
        <div className="flex m-16">

          

        <ImageCard projTitle="Project Name" custNo="8888888888" custEmail="abc@gmail.com" img="https://avatars.githubusercontent.com/u/121731399?v=3" />
          
        </div>
      </div>

    </div>
  )
}

export default ContractorHome