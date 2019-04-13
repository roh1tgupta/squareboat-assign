import React, { useState } from 'react';
import Sidebar from './sidebar';
import Content from './content/content';
export default function(props) {
  const [selected, updateSelected] = useState('chats');

  return (
    <div className="main">
      <div  className="sidebar">
        <Sidebar
          {...props}
          updateSelected={(item) => updateSelected(item)} />
      </div>
      <div className="content">
        <Content selected={props.index === 0 ? selected : 'notAvailable'} />
      </div>
    </div>
  )
}