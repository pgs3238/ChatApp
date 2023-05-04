//import logo from './logo.svg';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import './App.css';

const App = () => {
  return (
      <ChatEngine
          height="100vh"
          projectID="f8d494d2-1097-4a56-98a4-7fdb896b8a58"
          userName="Paul-Admin"
          userSecret="Admin99"
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
  );
}

export default App;

//  https://www.youtube.com/watch?v=jcOKU9f86XE&t=754sS

//  chatengine.io
//  Login:      paul-gerhard.siegel@hs-osnabrueck.de
//  Passwort:   NewYork99

//  User 1:
//  Login:      Paul-Admin
//  Passwort:   Admin99

//  User 2:
//  Login:      Mehmet
//  Passwort:   123123


