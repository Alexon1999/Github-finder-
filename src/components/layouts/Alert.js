import React from 'react';
// racf

const Alert = ({ alert }) => {
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
