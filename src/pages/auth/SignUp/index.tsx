// Dependencies
import React from 'react';

// Components
import { SignUpForm } from '../../../components/forms/SignUpForm';

// Export page
const SignUpPage = () => {
  return (
    <div className="w-screen h-screen bg-[#DDEBF7] flex sm:items-center items-start justify-center overflow-y-auto py-8">
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
