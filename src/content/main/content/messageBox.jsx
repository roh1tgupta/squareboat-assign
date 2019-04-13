import React, { useState } from 'react';
import * as config from '../../../config/config';
import * as dummy from '../../../config/dummyContacts';
import * as utils from '../../../utils/utils';
import eyesvg from '../../../assets/svg/eyesvg';
import barChartsvg from '../../../assets/svg/barchartsvg';
import plusCirclesvg from '../../../assets/svg/pluscircle';
import sendsvg from '../../../assets/svg/send';

export default function() {
  const [selectedIndex, setIndex] = useState(0);
  const messageObj = config.navitem.Messages;
  const [isPluscircleActive, setPlusCircle] = useState(false);
  const messagechats = dummy.dummyContacts[selectedIndex].chats;
  return (
    <div className="messageBox">
      <section className="upperSection">
        <div className="leftSection">
          <span className="icon">
            <img src={require("../../../assets/svg/message-square (30).svg")} alt="_icon" />
          </span>
          <span className="text">{messageObj.name}</span>
        </div>
        <div className="rightSection">
          <img src={require("../../../assets/svg/maximize-2(24).svg")} alt="_icon" className="maximizeicon"/>
        </div>
      </section>

      <section className="chatbox">
        <section className="leftSection">
          <section className="upper">
            <div className="left">Chats </div>
            <div className="right">29/30 </div>
          </section>
          <section className="contactList">
          {
            dummy.dummyContacts.map((item, index) => {
              const info = utils.getLastMessageInfo(item);
              return (
                <div className={`${index === selectedIndex ? 'selected' : 'contactGroup'}`} key={item.lastSentMessageTime}>
                  <section className="contactList-upper" onClick={() => setIndex(index)}>
                    <div className="image">
                      <img src={require(`../../../assets/images/${item.image}.jpg`)} alt="img" className="contactList-img" />
                    </div>
                    <div className="contactList-name-message">
                      <div className="name">{item.name}</div>
                      <div className="lastMessage">{utils.getEllipsizedText(info.message, 30)}</div>
                    </div>
                  </section>
                  <section className="contactList-info">
                    <div className="info-left">{utils.getFormattedDateStringMediaStats(info.time)}</div>
                    <div className="info-right">
                      <div className="reply-info">
                        <img src={require("../../../assets/svg/eye.svg")} alt="img" className="watchingicon" />
                        <span className="replies">{item.replies} Replies</span>
                      </div>
                      <div className="report-info">
                        <img src={require("../../../assets/svg/bar-chart-2.svg")} alt="img" className="reportImg" />
                        <span className="reports">{item.reportStatus}</span>
                      </div>
                    </div>
                  </section>
                  <div className="underline"></div>
                </div>
              );
            })
          }
          </section>
        </section>
        <section className="rightSection">
          <section className="upper">
            <div className="reply">
              <span className="watchingicon">{eyesvg()}</span>
              <span className="replyText">REPLIES</span>
            </div>
            <div className="report">
              <span className="reportImg">{barChartsvg()}</span>
              <span className="replyText">REPORTS</span>
            </div>
          </section>
          <section className="chatHistory">
            <div className="chatDate"> Today </div>
            <section className="historySection">
              {
                messagechats ? (
                  messagechats.sort((a,b) => { return a.time - b.time}).map((chat, index) => {
                    if (chat.message === '' && !chat.img) {
                      return null;
                    }
                    return <div key={chat.time}>
                      <div className={`${chat.sender === 'me' ? 'sent' : 'received'}`}>
                        <div>
                          {
                            chat.img ? (<img
                              src={require(`../../../assets/images/${chat.img}`)}
                              alt="img"
                              className="chatimg"
                            />) :
                              (<span className="chatmessage">{chat.message}</span>)
                              
                          }
                        </div>
                        <div className="messagetime">{utils.getTimeInHourMinutes(chat.time)}</div>
                      </div>
                      {
                        index === (messagechats.length - 1) 
                        || index === (messagechats.length - 2) ? (
                          <div>
                            <img
                              src={require(`../../../assets/images/${chat.sender === 'me' ? 'rohit' : chat.sender}.jpg`)}
                              alt="img"
                              className={`historyimg ${chat.sender === 'me' ? 'mine' : 'friends'}`}
                            />
                          </div>
                        ) : null
                      }
                    </div>
                  })
                ) : null
              }
            </section>
            <div className="inputBox">
              <div
                className={`pluscircle`}
                onClick={() => {setPlusCircle(!isPluscircleActive)}}
              >
              <span className={`${isPluscircleActive ? 'plusCircleActive' : 'plusCircleNotActive'}`}>
                {plusCirclesvg()}
                {
                  isPluscircleActive ? (
                  <div className="animation">
                    {
                      dummy.dummyFeature.map((item, ind) => {
                        return <div className={item.logo + ' animationItem'} key="item.name">
                          <img
                            className={`${item.logo}Logo logo`}
                            src={require(`../../../assets/svg/${item.logo}.svg`)}
                            alt="img"
                          />
                          <span className="audiologo name">{item.name}</span>  
                      </div>
                      })
                    }
                  </div>
                  ) : null
                }
                
              </span>
              </div>
              <input className="inputtext" type="textbox" placeholder="type here.."></input>
              <button className="sendButton">
                {sendsvg()}<div className="sendText">Send</div>
              </button>
            </div>
          </section>
        </section>
      </section>
      
    </div>
  )
}