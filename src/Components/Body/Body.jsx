import React from 'react'
import Billing from '../Layouts/Billing';
import Tests from '../Layouts/Tests';
import Patients from '../Layouts/Patients';
import HR from '../Layouts/HR/HR.jsx';
import Labs from '../Layouts/Labs';
import Pharma from '../Layouts/Pharma';
import Registration from '../Layouts/Registration';
import Consultation from '../Layouts/Consultation';

const Body = ({value}) => {

  switch (value) {
    case 'patients': return <Patients />
      break;
    case 'hr': return <HR />
      break;
    case 'labs': return <Labs />
      break;
    case 'pharma': return <Pharma />
      break;
    case 'registration': return <Registration />
      break;
    case 'consultation': return <Consultation />
      break;
    case 'tests': return <Tests />
      break;
    case 'billing': return <Billing />
      break;
    
    default: return <HR />
      break;
  }
}

export default Body