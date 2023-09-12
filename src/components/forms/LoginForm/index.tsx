// Dependencies
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios, { AxiosError } from 'axios';

// Components
import { TextInput } from '../../common/TextInput';
import { Checkbox } from '../../common/Checkbox';
import { server } from '../../../utils/setting'
// Types
import { TEXT_INPUT_VARIANT } from '../../common/TextInput/types';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Export component
export const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [token, setToken] = useState('')
  const [isUserNotVerify, setIsUserNotVerify] = useState<boolean>(false)
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(8).required('Password is required'),
  });
  
  const handleLogin = async () => {
   
    await axios.post(`${server}/users/sign-in`, values).then((response) => {
      localStorage.setItem("token", response?.data?.accessToken)
      localStorage.setItem("email", values.email)
      window.location.pathname = '/home'
    }).catch((error: AxiosError) => {
      if (error.response?.status === 400) {
        toast.error("Input Error")
      } else if (error.response?.status == 401) {
        setIsUserNotVerify(true)
      } else if (error.response?.status === 404) {
        toast.warning("user with such email and password doesn't exists")
      } else if (error.response?.status === 400) {
        toast.warning("Incorrect Email or Password")
      } else if (error.response?.status === 500) {
        toast.warning("Thre was an internal server bug, please try again later")
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
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: handleLogin,
  });
  
  return (
    <div>
 {
      !isUserNotVerify ? (
        <div className="max-w-[440px] min-h-[580px] w-full rounded-[35px] bg-white sm:border-[18px] border-[8px] border-[#00C5FF] py-12 mx-4">
        <img className={'w-[380px] mx-auto sm:block hidden'} src={'/images/logos/full-logo.png'} alt={'full-logo'} />
        <img className={'mx-auto sm:hidden block w-32'} src={'/images/logos/Logo-01.svg'} alt={'full-logo'} />
        <div className={'sm:px-[38px] px-6'}>
          <TextInput
            name={'email'}
            className={'flex-1 mt-[38px]'}
            label={
              <div className={'flex items-center mb-1'}>
                <img className={'w-6 h-6'} src={'/images/icons/user-icon.svg'} alt={'user icon'} />
                <p className={'text-[18px] font-semibold text-[#C8C5C5]'}>Email</p>
              </div>
            }
            variant={TEXT_INPUT_VARIANT.CONTAINED}
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />
          <TextInput
            name={'password'}
            className={'flex-1 mt-[38px]'}
            label={
              <div className={'flex items-center mb-1'}>
                <img className={'w-6 h-6'} src={'/images/icons/key-icon.svg'} alt={'user icon'} />
                <p className={'text-[18px] font-semibold text-[#C8C5C5]'}>Password</p>
              </div>
            }
            variant={TEXT_INPUT_VARIANT.CONTAINED}
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            type={'password'}
          />
          <Checkbox
            className={'mt-[21px]'}
            checked={rememberMe}
            onClick={() => setRememberMe(prev => !prev)} label={'Remember me'}
          />
          <ToastContainer />
          <button className="w-full h-[49px] bg-[#00C5FF] rounded-[30px] text-[20px] font-bold text-white mt-5 mb-[19px]" onClick={handleLogin}>Log In</button>
          <a href={'#'} className={'text-[14px] font-semibold text-[#C8C5C5]'}>Lost your password?</a>
        </div>
      </div>
      ) : (
        <div className='flex rounded-[25px] overflow-hidden border-[5px] border-[#00C5FF] mx-4'>
        User with this Email is not verified
        <button className="block max-w-[282px] h-[49px] w-full bg-[#00C5FF] rounded-[30px] text-[20px] font-bold text-white mt-10 mb-[19px] mx-auto" onClick={handleNewVerificationLink}>Send verification link</button>
      </div>
      )
    }
    </div>
   
   
  );
};

