import React from 'react'
import { Formik, Form } from 'formik'
import Input from '../../components/Input'
import * as Yup from 'yup'
import Link from 'next/link'
import { toast } from 'react-toastify';
import { useState } from 'react'
import Signup1 from '/public/images/Signup2.png'
import { useEffect } from 'react'
import { Router } from '@mui/icons-material'
import { useRouter } from 'next/router'







const SignupPage = () => {
  let [loading, setloading] = useState(false)

  let router = useRouter()

  const initialValues = {
    email: '',
    password: '',
    username: '',
    confirm_password: '',
  }
  const validate = (values) => {
    let errors = {}
    if (isNaN(values.password)) {
      errors.password = 'Password Must be A Mix Of Alphabets and Numbers'
    }

    return errors
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required').min(5, 'Atleast 5 characters required'),

    password: Yup.string().required('Required').matches(/^(?=.{6,})/, "Must Contain 6 Characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])/,
        "Must Contain One Uppercase, One Lowercase"
      )
      .matches(
        /^(?=.*[!@#\$%\^&\*])/,
        "Must Contain One Special Case Character"
      )
      .matches(/^(?=.{6,20}$)\D*\d/, "Must Contain One Number"),

    username: Yup.string().required('Required').min(5, 'Atleast 5 characters required'),

    confirm_password: Yup.string().required('Required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });
  const onSubmit = (values) => {
    Signup(values)


  }
  const Signup = async (values) => {
    try {
      setloading(true)
      let response = await fetch('https://my-notebook-my-notebook.herokuapp.com/api/v1/Signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'username': values.username,
          'password': values.password,
          'email': values.email
        })
      })
      let data = await response.json()
      if (response.status === 201) {
        router.push('/')
        toast('Signed Up Succesfully', { position: toast.POSITION.TOP_LEFT })
      }
      else {
        if (data.username) {
          toast("A user with that username already exists.", { position: toast.POSITION.TOP_LEFT })
        }
        if (data.error) {
          toast('User Already Exists with the given Email', { position: toast.POSITION.TOP_LEFT })
        }
        else {
          toast("Signup Unsuccesfull", { position: toast.POSITION.TOP_LEFT })
        }

      }
      // Gansta@11519
      setloading(false)
    }
    catch (e) {
      toast("Signup Unsuccesfull", { position: toast.POSITION.TOP_LEFT })
    }

  }
  // Gansgta@11519
  
  return (
    <div style={{ 'backgroundImage': `url(${Signup1.src})` }} className=' bg-center bg-no-repeat bg-cover'>

      <Formik initialValues={initialValues} validationSchema={validationSchema || validate} onSubmit={onSubmit}>
        {

          formik =>

            <Form>

              <section className="text-gray-600 body-font ">
                <div className="container px-4 py-24 mx-auto flex flex-wrap items-center max-w-[800px]">

                  <div className="  bg-white  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                    <div className="relative mb-4">
                      <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Username</label>
                      <Input type="text" id="full-name" name="username" className="w-full bg-white rounded border-emerald-600 border-2 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                      <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                      <Input type="email" id="email" name="email" className="w-full bg-white rounded border-emerald-600 border-2 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                      <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                      <Input type="password" id="password" name="password" className="w-full bg-white rounded border-emerald-600 border-2 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                      <label htmlFor="confirm_password" className="leading-7 text-sm text-gray-600">Confirm Password</label>
                      <Input type="password" id="confirm_password" name="confirm_password" className="w-full bg-white rounded border-emerald-600 border-2 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className='sm:flex my-2 '>
                      <button type="reset" className="text-white bg-emerald-500 border-0 py-2 text-xs px-7 focus:orose-none hover:bg-emerald-600 rounded sm:text-lg">Reset</button>
                      <div className='sm:hidden my-3'></div>
                      <button disabled={!formik.isValid || !formik.dirty} type="submit" className="text-white bg-emerald-500 border-0 py-2 px-4 focus:outline-none hover:bg-emerald-600 rounded text-xs sm:text-lg sm:mx-2 ">Signup</button>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">Already Have An Account <Link className='' href='/auth/Login'><a className='text-emerald-500'>Login</a></Link></p>
                  </div>
                </div>
              </section>
            </Form>


        }
      </Formik>

    </div>
  )
}

export default SignupPage