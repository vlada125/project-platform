// Dependencies
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios, { AxiosError } from 'axios';
import { server } from '../../../utils/setting'

import {useAuthContext} from "../../../contexts/AuthContext"
// Components
import { TextInput } from '../../common/TextInput';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// I want to make a notification when I click the button  --- work? nope ok?
// how to do this on script? 
// Export component gimme a sec working now!!!!!
export const SignUpForm = () => {
  const [isRegisteredDone, setIsRegisterdeDone] = useState<boolean>(false)
  const SignUpSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email().required('Email is required'),
    jobTitle: Yup.string().required('Job title is required'),
    password: Yup.string().min(8).required('Password is required'),
    passwordConfirm: Yup.string().min(8).required('Password is required'),
  });


  
  const handleSignUp = async () => {
    await axios.post(`${server}/users/sign-up`, values).then((response) => {
      localStorage.setItem("email", values.email)
      setIsRegisterdeDone(true)
    }).catch((error: AxiosError) => {
      if (error.response?.status === 409) {
        toast.warning("Account already exist")
      } else if (error.response?.status === 400) {
        toast.error("Input Error")
      } else if (error.response?.status === 500) {
        toast.error("Internal server error")
      }
    })
  };

  const handleNewVerificationLink = async () => {
    const email = localStorage.getItem("email")
   
    await axios.post(`${server}/users/resend-verification`, {email: email}).then((response) => {
      toast.done("Sent check mail")
    }).catch((error: AxiosError) => {
      if (error.response?.status === 404) {
        toast.warning("User not found")
      } else if (error.response?.status === 400) {
        toast.error("Input Error")
      } else if (error.response?.status === 500) {
        toast.error("Internal server error")
      }
    })
  }
  
  const {
    errors,
    touched,
    values,
    handleSubmit,
    handleChange,
    resetForm
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: handleSignUp,
  });
  
  return (
    <div className={'flex rounded-[25px] overflow-hidden'}>
      {
        !isRegisteredDone ? (
          <div className={'flex rounded-[25px] overflow-hidden border-[5px] border-[#00C5FF] mx-4'}>
             <img className={'max-w-[546px] min-w-[450px] min-h-[750px] h-full object-cover md:block hidden'} src={'/images/general/sign-up-bg.png'} alt={'sign up bg'} />
          <div className="max-w-[680px] min-h-[750px] w-screen bg-white py-9">
            <img className={'max-w-[380px] w-full mx-auto sm:block hidden'} src={'/images/logos/full-logo.png'} alt={'full-logo'} />
            <img className={'mx-auto sm:hidden block w-32'} src={'/images/logos/Logo-01.svg'} alt={'full-logo'} />
            <p className={'sm:text-[28px] text-[21px] font-semibold text-[#01174F] mt-5 text-center'}>Create Your Account</p>
            <div className={'sm:px-[68px] px-6 sm:mt-[57px] mt-6'}>
              <div className={'w-full flex md:flex-row flex-col'}>
                <TextInput
                  name={'firstName'}
                  className={'flex-1 sm:mt-[38px] mt-6'}
                  label={'First Name'}
                  value={values.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                />
                <TextInput
                  name={'lastName'}
                  className={'flex-1 sm:mt-[38px] mt-6 md:ml-[40px] ml-0'}
                  label={'Last Name'}
                  value={values.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                />
              </div>
              <TextInput
                name={'email'}
                className={'flex-1 sm:mt-[38px] mt-6'}
                label={'Email'}
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />
              <TextInput
                name={'jobTitle'}
                className={'flex-1 sm:mt-[38px] mt-6'}
                label={'Job Title'}
                value={values.jobTitle}
                onChange={handleChange}
                error={errors.jobTitle}
              />
              <div className={'w-full flex md:flex-row flex-col'}>
                <TextInput
                  name={'password'}
                  className={'flex-1 sm:mt-[38px] mt-6'}
                  label={'Password'}
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                  type={'password'}
                />
                <TextInput
                  name={'passwordConfirm'}
                  className={'flex-1 sm:mt-[38px] mt-6 md:ml-[40px] ml-0'}
                  label={'Confirm Password'}
                  value={values.passwordConfirm}
                  onChange={handleChange}
                  error={errors.passwordConfirm}
                  type={'password'}
                />
              </div>
              <ToastContainer />
              <button className="block max-w-[282px] h-[49px] w-full bg-[#00C5FF] rounded-[30px] text-[20px] font-bold text-white mt-10 mb-[19px] mx-auto" onClick={handleSignUp}>Create Account</button>
            </div>
          </div>
          </div>
         
        ) : (
          <div className='flex rounded-[25px] overflow-hidden border-[5px] border-[#00C5FF] mx-4'>
            you need verify your account
            <button className="block max-w-[282px] h-[49px] w-full bg-[#00C5FF] rounded-[30px] text-[20px] font-bold text-white mt-10 mb-[19px] mx-auto" onClick={handleNewVerificationLink}>Resend verification link</button>
          </div>
        )
      }

  </div>
  );
};
