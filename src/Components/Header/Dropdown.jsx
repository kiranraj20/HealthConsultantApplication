import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('Patients');

  const handleOption = (newValue) => {
    setValue(newValue);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const handleMenu = () => {
    setIsOpen(!isOpen); // Toggle the dropdown menu
  };

  return (
    <div className="">
      <div className="">
        <p className='button' onClick={handleMenu}>{value? value : 'Patients'}</p>
        <ul className={isOpen ? 'menu-open' : 'menu-close'}>
          <li className='option' onClick={() => handleOption('Patients')}>Patients</li>
          <li className='option' onClick={() => handleOption('Doctors')}>Doctors</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
