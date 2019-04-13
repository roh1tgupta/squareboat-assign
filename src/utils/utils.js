const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
  "Aug", "Sep", "Oct", "Nov", "Dec"];
export const getFormattedDateStringMediaStats = (time) => {
  
  const dateObj = new Date(time * 1000);
  const hour = dateObj.getHours();
  const ampm = hour > 12 ? 'pm' : 'am';
  const formattedStr = (`00${dateObj.getDate()}`).slice(-2) +
    ' ' + months[dateObj.getMonth() + 1] +
    ' ' +  dateObj.getFullYear() +  
    ' | ' + (hour > 12 ? hour - 12 : hour) +
    ' : ' + (`00${dateObj.getMinutes()}`).slice(-2) +
    ' ' + ampm;
  return formattedStr;
};


export const getLastMessageInfo  = item => {
  if (item.lastSentMessageTime > item.lastReceivedMessageTime) {
    return { time: item.lastSentMessageTime, message: item.lastSentMessage };
  }
  return { time: item.lastReceivedMessageTime, message: item.lastReceivedMessage };
}

export const getEllipsizedText = (text, len) => {
  if (text.length < len) {
    return text;
  }
  text = text.substr(0, len - 3);
  return text + '...';
}

export const getTimeInHourMinutes = time => {
  const dateObj = new Date(time * 1000);
  const hour = dateObj.getHours();
  const ampm = hour > 12 ? 'pm' : 'am';
  return (hour > 12 ? hour - 12 : hour) + ' : ' + (`00${dateObj.getMinutes()}`).slice(-2) + ' ' + ampm;
  
}
