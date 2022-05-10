import React, { Component } from 'react';

export class ChatBot extends Component {
  componentDidMount() {
    (function (d, m) {
      let kommunicateSettings = {
        appId: '390a82f9eb47597dd598809fff36b36ed',
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      let s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
      let h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }
  render() {
    return null;
  }
}

export default ChatBot;
