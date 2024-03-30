import React from 'react';
import v from '../../styles/variables';

function Image({ className }) {
  return (
    <div>
      <img src={v.imageLogo} className={className} style={{ width: "70px", height: "50px" }} alt="" />
    </div>
  );
}

export default Image;
