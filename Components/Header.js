import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import logo from '/public/images/logo.webp'
export default function Header() {
    const [navstate, setnavstate] = useState('')
    return (
        <>
        <style jsx>
                    {`
                #Navbar a{
                    margin:auto 10px;
                    display:flex;
                    padding:8px;
                    border-radius:10px;
                    transition:all;
                    transition-duration:0.3s;
                }
                #Navbar a:hover{
                    transform:scale(0.9);
                    
                }
                `}
                </style>
            <div className='grid-cols-[100px_auto_200px] py-2 hidden lg:grid border-b-4'>
                
                <div id="" className=''>
                    <Link className="" href="#" passHref>
                        <div className='decoration-transparent block mx-2 my-auto'>
                            <Image className=' rounded-full' src={logo} alt="" width="50" height="50"
                            layout='responsive' quality={100} blurDataURL srcSet  />
                        </div>
                    </Link>
                </div>
                <nav id="Navbar" className=''>

                    <ul className='flex h-full my-auto'>
                        <Link className='' href="/"><a className='text-gray-900 hover:text-gray-700 decoration-transparent '>Home</a></Link>
                        <Link className='' href="/auth/Login"><a className='text-gray-900 hover:text-gray-700 decoration-transparent '>Login</a></Link>
                        <Link className='' href="/auth/Signup"><a className='text-gray-900 hover:text-gray-700 decoration-transparent '>Signup</a></Link>
                        <Link className='' href="/Notes"><a className='text-gray-900 hover:text-gray-700 decoration-transparent '>Your Notes</a></Link>
                        <Link className='' href="/Settings"><a className='text-gray-900 hover:text-gray-700 decoration-transparent '>Settings</a></Link>
                    </ul>
                </nav>
                <div id="userdetails" className='text-center my-auto'>
                    Guest
                </div>
            </div>


            <nav className="navbar navbar-light   lg:hidden">
                <div className="container-fluid">
                    <div id="" className=''>
                        <Link className="" href="#" passHref>
                            <div className='decoration-transparent flex mx-2 my-auto'>
                                <Image className=' rounded-full' src={logo} alt="" width="50" height="50" />
                            </div>
                        </Link>
                    </div>
                    <button className="navbar-toggler p-1 rounded-lg focus:ring-[5px] focus:ring-black focus:ring-opacity-50 m-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon h-5 w-5"></span>
                    </button>
                    <div className="offcanvas offcanvas-end h-fit bg-gradient-to-br rounded-bl-md  from-emerald-500 to-indigo-500" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">My NoteBook</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <nav id="Navbar" className=''>

                                <ul className='h-full my-auto'>
                                    <Link className='' href="/"><a className='text-gray-50 hover:text-gray-300 decoration-transparent '>Home</a></Link>
                                    <Link className='' href="/auth/Login"><a className='text-gray-50 hover:text-gray-300 decoration-transparent '>Login</a></Link>
                                    <Link className='' href="/auth/Signup"><a className='text-gray-50 hover:text-gray-300 decoration-transparent '>Signup</a></Link>
                                    <Link className='' href="/Notes"><a className='text-gray-50 hover:text-gray-300 decoration-transparent '>Your Notes</a></Link>
                                    <Link className='' href="/Settings"><a className='text-gray-50 hover:text-gray-300 decoration-transparent '>Settings</a></Link>
                                </ul>
                            </nav>
                            
                        </div>
                    </div>
                </div>
            </nav>
            <hr className='m-0 p-0' />
        </>
    )
}
