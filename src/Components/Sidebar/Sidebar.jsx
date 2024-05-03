import React from 'react';
import './Sidebar.css';
import { FaRegUserCircle } from "react-icons/fa";
import { PiDatabaseBold } from "react-icons/pi";
import { PiFunnelBold } from "react-icons/pi";
import { BsShop } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { HiOutlineEyeDropper } from "react-icons/hi2";
import { PiMoneyWavy } from "react-icons/pi";
import Body from '../Body/Body';
import { useState } from 'react';



const Sidebar = () => {

  const [button, setButton] = useState('hr')

  const handleDashboard = (value) => {
    const elements = document.querySelectorAll('.sidebar div');
    elements.forEach((element) => {
      if (element.id === value) {
        setButton(value);
        element.classList.add('option-clicked');
      } else {
        element.classList.remove('option-clicked');
      }
    });
  };

  return (
    <div className='body-container'>
      <div className="sidebar">
        <p className='p'>Dashboard</p>
        <div className="dashboard-option-top" id="patients" onClick={() => handleDashboard('patients')} >
          <FaRegUserCircle />
          Patients
        </div>
        <div className="dashboard-option option-clicked" id="hr" onClick={() => handleDashboard('hr')} >
          <PiDatabaseBold />
          HR
        </div>
        <div className="dashboard-option" id="labs" onClick={() => handleDashboard('labs')} >
          <PiFunnelBold />
          Labs
        </div>
        <div className="dashboard-option-bottom" id="pharma" onClick={() => handleDashboard('pharma')} >
          <BsShop />
          Pharma
        </div>
        <p className='p'>Processes</p>
        <div className="process-option-top" id='registration' onClick={()=>handleDashboard('registration')}>
          <HiOutlineNewspaper />
          Registration
        </div>
        <div className="process-option" id='consultation' onClick={()=>handleDashboard('consultation')}>
          <HiOutlineDocumentText />
          Consultation
        </div>
        <div className="process-option" id='tests' onClick={()=>handleDashboard('tests')}>
          <HiOutlineEyeDropper />
          <div className="" style={{textWrap: 'nowrap'}}>Tests&Reports</div>
        </div>
        <div className="process-option-bottom" id='billing' onClick={()=>handleDashboard('billing')}>
          <PiMoneyWavy />
          Billing
        </div>
      </div>
      <div className="body">
        <Body value={button} />
      </div>
    </div>
  );
};

export default Sidebar;
