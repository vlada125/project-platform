// Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerLicense } from '@syncfusion/ej2-base';
// Styles
import './index.css';

// Components
import App from './App';

// Helpers
import reportWebVitals from './reportWebVitals';

// Contexts
import { TaskProvider } from './contexts/TaskContext';
import { AppProvider } from './contexts/AppContext';
import { ChatProvider } from './contexts/ChatContext';
import { ProjectProvider } from './contexts/ProjectContext';
import { AuthProvider } from './contexts/AuthContext';


// Registering Syncfusion license key
registerLicense(process.env.REACT_APP_SYNCFUSION_LICENSE || '');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthProvider>
      <AppProvider>
    <TaskProvider>
      <ChatProvider>
        <ProjectProvider>

          <App />
        </ProjectProvider>
      </ChatProvider>
    </TaskProvider>
  </AppProvider>
  </AuthProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
