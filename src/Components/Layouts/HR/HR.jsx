import React from 'react'
import './HR.css'
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaRegChartBar } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { HiMiniArrowUturnRight } from "react-icons/hi2";
import { HiMiniArrowDown } from "react-icons/hi2";





const data = [
  { name : "John Smith", patient : "12", labs : "3", diet : "6" },
  { name : "Jane Doe", patient : "8", labs : "2", diet : "4" },
  { name : "Mark Johnson", patient : "6", labs : "1", diet : "2" },
  { name : "Mary Lee", patient : "10", labs : "4", diet : "8" },
  { name : "David Chen", patient : "14", labs : "5", diet : "9" },
  { name : "Emily Wang", patient : "5", labs : "2", diet : "3" },
  { name : "Mark William", patient : "9", labs : "6", diet : "7" },
  { name : "Emily Willis", patient : "2", labs : "4", diet : "8" },
  { name : "Kenzie Reeves", patient : "17", labs : "1", diet : "3" },
  { name : "Kira Noir", patient : "3", labs : "7", diet : "4" }
]



const HR = () => {
  return (
    <div className='hr-container'>
      <div className="hr">
        <p className='hr-text'><HiOutlineUserGroup /> Consultants</p>
      </div>
      <div className="filters">
        <p className='filter-text'>Filters</p>
        <div className="triangle"></div>
        <div className="range">Select Range<FaChevronDown /></div>
        <div className="circle"></div>
        <p className="summary-text">Summary</p>
        <div className="circle"></div>
        <p className="branch-text">Branch Wise</p>
      </div>
      <div className="content-bar">
        <div className="consultant-count">
          <div className="count-text">
            <p className='count-count'>Consultant Count</p>
            <p className='count-number'>90/900</p>
            <p className='count-time'>Today/Period</p>
          </div>
          <div className="count-icon"><HiMiniUserGroup className='icon' /></div>
        </div>
        <div className="consultations">
          <div className="consultations-text">
            <p className="consultations-count">Consultations</p>
            <p className="consultations-number">11/25</p>
            <p className="consultations-time">Today/Period</p>
          </div>
          <div className="consultations-icon"><FaRegChartBar className='icon' /></div>
        </div>
        <div className="labs">
        <div className="labs-text">
            <p className="labs-count">Labs</p>
            <p className="labs-number">25/560</p>
            <p className="labs-time">Today/Period</p>
          </div>
          <div className="labs-icon"><FaMoneyBill className='icon' /></div>
        </div>
        <div className="diet-plans">
        <div className="diet-plans-text">
            <p className="diet-plans-count">DietPlans</p>
            <p className="diet-plans-number">25/250</p>
            <p className="diet-plans-time">Today/Period</p>
          </div>
          <div className="diet-plans-icon"><FaMoneyCheckDollar className='icon' /></div>
        </div>
      </div>
      <div className="consultants-table">
        <div className="table-heading">
          <div className="heading">Consultants</div>
          <div className='arrow'>
            <div className="right-arrow"><HiMiniArrowUturnRight /></div>
            <div className="down-arrow"><HiMiniArrowDown /></div>
          </div>
        </div>
        <div className="table">
          <table>
            <tr>
              <th>NAME</th>
              <th>PATIENT COUNT</th>
              <th>LABS</th>
              <th>DIET PLANS</th>
            </tr>
            {data.map((val, key) => {
              return(
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.patient}</td>
                  <td>{val.labs}</td>
                  <td>{val.diet}</td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    </div>
  )
}

export default HR