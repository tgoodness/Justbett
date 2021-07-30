import React from 'react';
import Loader from '../../../../../lib/assets/dashboard/group/loader.png';
function Processing() {
  return (
    <div className="processing-wrapper">
      <img src={Loader} alt="Loader"/>
      <div>
        <h5>Processing result</h5>
        <h6>Please wait ...</h6>
      </div>
    </div>
  );
}

export default Processing;
