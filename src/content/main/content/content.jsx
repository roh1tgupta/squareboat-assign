import React from 'react';
import MessageBox from './messageBox';

export default function(props) {
  return (
    <div>
    { props.selected === 'chats' ? <MessageBox /> : (
      <div className="noContent"> no data available</div>
      )
    }
      
    </div>
  );
}