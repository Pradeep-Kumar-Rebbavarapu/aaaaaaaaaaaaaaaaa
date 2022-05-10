import React, { useContext, useState } from 'react'
import Context from '../../Context/Context';
import Login1 from '/public/images/Login3.png'
import { Formik, Form, Field } from 'formik'
import Input from '../../components/Input'
import * as Yup from 'yup'
import Router, { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import cookie from 'cookie'
import Link from 'next/link'
import { useEffect } from 'react'
export default function Login({Login}) {
  


  let { authtoken, setauthtoken } = useContext(Context)

  let router = useRouter()

  let [loading, setloading] = useState(false)
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required'),

    password: Yup.string().required('Required'),

    username: Yup.string().required('Required'),


  });
  const initialValues = {
    email: '',
    password: '',
    username: '',

  }

  const login = async (values) =>{
    try{
      let response = await fetch('/api/auth/authlogin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(values)
      })
      let data = await response.json()
      console.log(response);
      if(response.status===200){
        toast("Logged In succesfully", { position: toast.POSITION.TOP_LEFT })
      }
      else {
        toast("Log In Unsuccesfully Please Recheck Your Credentials", { position: toast.POSITION.TOP_LEFT })
        
      }
    }
    catch(e){
      toast("Log In Unsuccesfully Please Recheck Your Credentials", { position: toast.POSITION.TOP_LEFT })
    }
    
    
    
  }
  const onSubmit = (values) => {
    
    login(values)


  }




  return (
    <>
      <style jsx>
        {`
      #login{
        background-image:url(${Login1.src});
      }
      `}
      </style>
      <div id="login" className={`bg-cover bg-center bg-no-repeat w-full h-full `}>
        <div className='container ml-auto mr-auto'>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {

              formik =>

                <Form>

                  <section className="text-gray-600 body-font ">
                    <div className="container px-4  py-32 mx-auto flex flex-wrap max-w-[600px] items-center">

                      <div className="bg-white bg-opacity-70 rounded-lg p-4 flex flex-col md:ml-auto w-full  ">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center">Log in</h2>
                        <div className="relative mb-4 ">
                          <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Username</label>
                          <Input type="text" id="full-name" name="username" className="w-full bg-white rounded border-2 border-indigo-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
                        </div>
                        <div className="relative mb-4">
                          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                          <Input type="email" id="email" name="email" className="w-full bg-white rounded border-2 border-indigo-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                          <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                          <Input type="password" id="password" name="password" className="w-full bg-white rounded border-2 border-indigo-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button type="submit" disabled={!formik.isValid || !formik.dirty} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full ">Login</button>
                        <div className="text-xs text-gray-500 mt-3">Dont Have An Account <Link className='text-indigo-500' href="/auth/Signup"><a>Signup</a></Link></div>
                      </div>
                    </div>
                  </section>
                </Form>

            }
          </Formik>
        </div>
      </div>
    </>
  )
}


