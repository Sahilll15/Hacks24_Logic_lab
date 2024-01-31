import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./Pages/Landing/Landing";
import Document from "./Pages/Docs/Document";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Profile from "./Pages/Profile/Profile";
import DesignerHome from "./Pages/Designer/DesignerHome";
import ProjectUpdate from "./Pages/Designer/ProjectUpdate";
import RoomStatus from "./Pages/Designer/RoomStatus";
import ContractorHome from "./Pages/Contractor/ContractorHome";
import ContractorTask from "./Pages/Contractor/ContractorTask";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import CustomerHome from "./Pages/Customer/CustomerHome";
import CustDash from "./Pages/Customer/CustDash";
import Chat from "./Pages/Customer/Chat";
import Deadline from "./Pages/Customer/Charts";
import Allchart from "./Pages/Charts/Allchart";
import AmazonProductComponent from "./Pages/ExtraFeatres/Fetchproducts";
import Zego from "./Pages/ExtraFeatres/Zego";
import Video from "./Pages/ExtraFeatres/Video";
import CustomerDashBoard from "./Pages/Dashboard/CustomerDashboard";
import FeedbackForm from "./Pages/ExtraFeatres/Feedback";

const App = () => {
  return (
    <>
      <Router>
        <>
          <Navbar />

          <ToastContainer />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Landing />} />
            <Route element={<ProtectedRoutes />} >
              <Route path="/docs" element={<Document />} />
              <Route path="/charts" element={<Allchart />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/designer" element={<DesignerHome />} />
              <Route path="/project/:projectId" element={<ProjectUpdate />} />
              <Route path="/room/:roomId" element={<RoomStatus />} />
              <Route path="/contractor" element={<ContractorHome />} />
              <Route path="/contractor/task" element={<ContractorTask />} />
              <Route path="/customer" element={<CustomerHome />} />
              <Route path="/customerdashboard/:pId" element={<CustomerDashBoard />} />
              <Route path="/chat/:pId" element={<Chat />} />
              <Route path="/customer/charts" element={<Deadline />} />
              <Route path="/ecommerce" element={<AmazonProductComponent />} />
              <Route path="/video" element={<Video />} />
              <Route path="/feedback" element={<FeedbackForm />} />
              <Route path="/meet/:roomId" element={<Zego />} />

            </Route>

          </Routes>
        </>
      </Router >

    </>
  )
}

export default App