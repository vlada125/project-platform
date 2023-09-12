// Dependencies
import React from 'react';

// Components
import { LoginForm } from '../../../components/forms/LoginForm';

// Export page
const LoginPage = () => {
  return (
    <div className="w-screen h-screen bg-[#DDEBF7] flex items-center justify-center overflow-y-auto">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
