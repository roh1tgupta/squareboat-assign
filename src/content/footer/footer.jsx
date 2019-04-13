import React from 'react';
import * as config from '../../config/config';
export default function() {
  return (
    <div className="footer">
      <span className="heart">
        {config.Logosvg}
      </span>
      <span className="logo-text">
        italk
      </span>
    </div>
  );
}