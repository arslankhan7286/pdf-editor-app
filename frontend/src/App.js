import React, { useState } from 'react';
import AuthenticationForm from './components/AuthenticationForm';
import FileUpload from './components/FileUpload';
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  // Function to handle form submission and authentication
  const handleAuthenticationSubmit = (data) => {
    const secretToken = process.env.REACT_APP_SECRET_TOKEN;
    if (data.token === secretToken) {
      setAuthenticated(true);
      toast.success('Token authenticated successfully!')
    } else {
      setAuthenticated(false);
      toast.error('Invalid token!')
    }
  };

  return (
    <div>
      {!authenticated ? (
        <AuthenticationForm onSubmit={handleAuthenticationSubmit} />
      ) : (
        <>
          <FileUpload />
        </>
      )}
       <ToastContainer />
    </div>
  );
};

export default App;