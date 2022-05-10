import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from './GlobalState';
import Header from './components/headers/Header';
import MainPages from './components/mainpages/Pages';
import Footer from './components/footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatBot from './components/chatbot/ChatBot';
toast.configure({
  position: toast.POSITION.BOTTOM_RIGHT,
});
function App() {
  return (
    <DataProvider>
      <Router>
        <div className='App'>
          <Header />
          <MainPages />
          <ChatBot />
          <Footer />
          {/* <ToastContainer
            position='bottom-left'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          /> */}
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
