import React, { useState } from 'react';
import * as config from '../../config/config';

export default function(props) {
  const index = props.index;
  const [subindex, setSubIndex] = useState(0);
  return (
    <div className="sidebar-content">
      <div className="info">
      <img src={require("../../assets/images/18571.jpeg")} alt="user_image" className="image" />
      <div className="user_name">Rohit Gupta</div>
      <div className="status">Life starts at the end of your comfort zone</div>
      </div>
      <div className="menu">
        
          {
            Object.values(config.navitem).map((item, ind) => (
              <section className="menuitems">
                <div className={`menuitemsHeading  ${ind === index ? 'selectedItem' : '' }`} onClick={() => {
                  props.updateIndex(ind);
                  setSubIndex(0);
                  if (ind === 0) {
                    props.updateSelected('chats');
                  } else {
                    props.updateSelected('notAvilable');
                  }
                }}>
                  <span className="logo">{item.logo}</span>
                  <span className={`item-name`}>{item.name}</span>
                </div>
                <div className="subitems">
                  { item.subitems.map((subitem, subind) => (
                    <div className={`subitemslist ${index === ind && subindex === subind ? 'selectedSub' : ''}`}
                      onClick={() => {
                        if (ind !== index) {
                          props.updateIndex(ind);
                        }
                        setSubIndex(subind);
                        if (ind === 0 && subind === 0) {
                          props.updateSelected('chats');
                        } else {
                          props.updateSelected('notAvailable');
                        }
                      }}>
                      {subitem}
                    </div>
                  ) ) }
                </div>
              </section>
            ))
          }
        
      </div>
    </div>
  );
}