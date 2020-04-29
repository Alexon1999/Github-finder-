import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

// racf

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    //&&: si alerte est different de null
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle '> {alert.msg}</i>
      </div>
    )
  );
};

export default Alert;
