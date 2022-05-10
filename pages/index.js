import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import Context from '../Context/Context'
import home1 from '/public/images/2.jpg'
import '../styles/Home.module.css'
import homephone from '/public/images/home-phone.jpg'
import About from '../Components/About'
export default function Home() {

  let { hello } = useContext(Context)
  return (
    <>
      <style jsx>
        {`
      .home{
        background-image:url(${home1});
        width:100%;
        heght:100%;
      }
      `}
      </style>
      <div className="">
        <div className="mx-auto hidden lg:block">
        <div className="flex flex-wrap w-full bg-gray-100 py-40 px-10 relative mb-4">
          <Image blurDataURL alt="gallery" className="w-screen object-cover h-screen object-center block  absolute inset-0" layout="fill" src={home1}/>
          <div className=" relative z-10 w-full grid lg:grid-cols-4  gap-4">
            <div className='text-start my-auto'>
            <h1 className='text-gray-50 text-3xl'>Welcome To My NoteBook</h1>
            <h4 className='text-gray-100 '>Your Notes Safe Under Our Cloud</h4>
            </div>
            <div></div>
            <div></div>
            
            <div className='lg:first-letter:text-end  mb-48 text-gray-200'>
            <h4 className="leading-relaxed text-end lg:text-gray-200  ">Save Your Notes With Us Look At It Your Daily Workouts And Have a Keen Life</h4>
            </div>
          </div>
        </div>
        </div>



        <div className="mx-auto lg:hidden">
        <div className="flex flex-wrap w-full bg-gray-100 py-10 px-4 lg:px-10 relative mb-4 ">
          <Image alt="gallery" className="w-full object-cover h-full object-center block  absolute inset-0" layout="fill" src={homephone}/>
          <div className="  z-10 w-full grid lg:grid-cols-4  gap-4  sm:w-[400px] mx-auto">

            
            <div className=''>
            <div className='text-start my-auto pb-32 mx-auto'>
            <h1 className='text-gray-50 text-3xl'>Welcome To My NoteBook</h1>
            <h4 className='text-gray-100 '>Your Notes Safe Under Our Cloud</h4>
            </div>


            </div>
            <div className='lg:first-letter:text-end sm:translate-x-10 container'>
            <h4 className="leading-relaxed text-end lg:text-gray-200  ">Save Your Notes With Us Look At It Your Daily Workouts And Have a Keen Life</h4>
            </div>
          </div>
        </div>
        </div>
      </div>
      <About/>
    </>
  )
}
