import React from 'react';

function Notification({showNotification}) {

  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You already enter this letter</p>
    </div>
  );
}

export default Notification;