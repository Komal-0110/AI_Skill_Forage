import { ChatContextProvider } from './context/chatContext';
import SideBar from './components/SideBar';
import ChatView from './components/ChatView';
import { useEffect, useState } from 'react';
import Modal from './components/Modal';
import Setting from './components/Setting';
import LoginModal from './components/LoginModal';

const App = () => {
  const [modalLoginOpen, setModalLoginOpen] = useState(false);

  useEffect(() => {
    const apiKey = window.localStorage.getItem('api-key');
    if (!apiKey) {
      setModalLoginOpen(true);
    }
  }, []);
  return (
    <ChatContextProvider>
      <Modal title='Setting' modalLoginOpen={modalLoginOpen} setModalLoginOpen={setModalLoginOpen}>
        <LoginModal modalLoginOpen={modalLoginOpen} setModalLoginOpen={setModalLoginOpen} />
      </Modal>
      <div className='flex transition duration-500 ease-in-out'>
        <SideBar />
        <ChatView />
      </div>
    </ChatContextProvider>
  );
};

export default App;
