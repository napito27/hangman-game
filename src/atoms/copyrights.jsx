import React from 'react';

function Copyrights({appName, designer}) {

  return (
    <div className='copyright'>
      <p>© 2024 {appName}. All rights reserved.</p>
      <p>Designed by {designer}.</p>
    </div>

  );
}

export default Copyrights;