import React from 'react';

function Figure({wrongLetters}) {
  const error = wrongLetters.length;
  
  return (
    <>
      <svg height='250' width='200' className='figure-container'>
        {/* Rod */}
        <line x1='20' y1='230' x2='100' y2='230' /> {/**base */}
        {error > 0 && <line x1='60' y1='20' x2='60' y2='230' />} {/**post */}
        {error > 1 && <line x1='60' y1='20' x2='140' y2='20' />} {/**top */}        
        {error > 1 && <line x1='140' y1='20' x2='140' y2='50' />} {/**rope */}

        {/* head */}
        {error > 2 && <circle cx='140' cy='70' r='20' />}

        {/* body */}
        {error > 3 && <line x1='140' y1='90' x2='140' y2='150' />}

        {/* left amr */}
        {error > 4 && <line x1='140' y1='120' x2='115' y2='95' />}
        {error > 4 && <circle cx='111' cy='91' r='3' />}
        
        {/* right arm */}
        {error > 5 && <line x1='140' y1='120' x2='165' y2='95' />}
        {error > 5 && <circle cx='169' cy='91' r='3' />}

        {/* left leg */}
        {error > 6 && <line x1='140' y1='150' x2='116' y2='185' />}
        {error > 6 && <circle cx='113' cy='189' r='3' />}

        {/* right leg */}
        {error > 7 && <line x1='140' y1='150' x2='164' y2='185' />}
        {error > 7 && <circle cx='167' cy='189' r='3' />}
      </svg>
    </>
  );
}

export default Figure;