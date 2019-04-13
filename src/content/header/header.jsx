import React from 'react';
import * as config from '../../config/config';

export default function (props) {
  const navitems = Object.values(config.navitem);
  const index = props.index;
  return (
    <header className="header">
      <section className="logo">
        {config.Logosvg}<span className="logo-text">italk</span>
      </section>

      <nav className="nav">
      {
        navitems.map((item, ind) => (
          <div key={ind}
            className={`navigationItem ${index === ind ? 'selected': ''}`} 
            onClick={() => props.updateIndex(ind)}
          >
            {/* <img 
              src={require(`../../assets/svg/${item.name}.svg`)} alt="img" className="svg" /> */}
            <span>{item.logo}</span>
            <span className="itemName">{item.name}</span>
          
          </div>
        ))
      }
      </nav>

      <section className="accountDetail">
        <div className="floatright">
          <div className="account-item notification">
            {config.Notificationsvg}
          </div>
          <div className="account-item help">
            {config.Helpsvg}
          </div>
          <div className="account-item">
            <img src={require("../../assets/images/18571.jpeg")}
              alt="img" className="image"/>
            <span className="header-username">Rohit Gupta</span>
          </div>
        </div>
      </section>
    </header>
  );
}