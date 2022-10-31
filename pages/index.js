import Head from 'next/head'
import Image from 'next/image'
import React,{useState} from 'react';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';


export default function Home() {


  const [nav,setNav] =useState(false)
    const handleNav = () => {
        setNav(!nav)
    }




  return (
    <div >
      <Head>
        <title>Ishmael Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className='fixed w-full h-20 shadow-xl z-[100]'>

            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src="/../public/assets/Logo.png" alt="/" width='180' height='50' />
                <div>

                    <ul  className='hidden md:flex'>
                        <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/#contact'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div> 
            </div>

            <div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''} >
 
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>

                   <div>
                       <div className='flex w-full items-center justify-between'>

                            <Image src="/../public/assets/Logo.png" alt="/" width='130' height='35' />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose/>
                            </div>

                       </div>

                       <div className='border-b border-gray-300 my-4'>
                          <p className='w-[85%] md:w-[90%] py-4'>Build Application with Ishmael Shihlabane</p>
                       </div>
                   </div>


                   <div className='py-4 flex flex-col'>
                      <ul className='uppercase' >
                        <Link href='/'>
                          <li className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href='#about'>
                          <li className='py-4 text-sm'>About</li>
                        </Link>
                        <Link href='/#skills'>
                          <li className='py-4 text-sm'>Skills</li>
                        </Link>
                        <Link href='/#contact'>
                          <li className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>


                    <div className='pt-40'>

                        <p className='uppercase tracking-widest text-[#5651e5]'>Hire Me</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>

                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn/>
                            </div>
                             <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail/>
                            </div>
                            
                            
                        </div>

                    </div>
                </div>
                </div>
                

            </div>

        </div>



        <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Welcome To My Site</p>
                <h1 className='py-4 text-gray-700'>
                    Hi,I'm <span className='text-[#5651e5]'> Ishmael</span></h1>
                <h1 className='py-2 text-gray-700'>

                    I'm a Software Developer

                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I have always been curious about Technology my whole life
                . This is why I decided to study computer system engineering so that I can learn more about Technology.
                I then discover software engineering which I fall inlove with, ever since then I have been learning and improving my software
                development skills so that I can be able to build robustic application to solver Business Challenges and make our live easy.

                <br/>
                I want to Join SOVTECH because it is the leading software development company in africa. I belive that I will be a great fit to the company by contributing in building modern web application,
                mobile appication and desktop application.My skills set and personality makes me great candidate for this position. 
                <br/>
                <br/>
                Kindly scroll down for more information
                
                </p>

                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedin/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>

                </div>
            </div>
        </div>
      
    </div>





    <div id='about' className='w-full md:h-screen p-2 flex items-center py-6'>

        <div className='max-w-[1240] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>I am very loving and kind person</p>
                <p className='py-2 text-gray-600'>
                    I enjoy listern to Good classic music on my spare time and works out
                </p>

                <p className='py-2 text-gray-600'>
                    NB: I enjoy working with different people because this helps me to learn more from others                </p>

                <p className='py-2 text-gray-600 underline cursor-pointer'>SOVTECH here I come!!!!!</p>

            </div>

            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>

                <Image className='rounded-xl' src="/../public/assets/ish.jpg" alt="/"  width='300' height='30'/>

            </div>

        </div>



    </div>






    <div id='contact' className='w-full lg:h-screen'>

        <div className='max-w-[1240px] m-auto px-2 py-16w-full'>

            <p className='text-xl tracking-widest uppercase text-[#5651e6'>Contact</p>

            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>

                {/**Left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>

                    <div className='lg:p-4 h-full'>
                        <div className='rounded-xl hover:scale-105 ease-in duration-300'>
                        <Image    
                            src='/../public/assets/contact.png'
                            width='600'
                            height='30'
                            alt='/'       
                            />
                        </div>
                        <div>
                            <h2 className='py-2'>Ishmael Shihlbane</h2>
                            <p>Software Developer</p>
                            <p className='py-4'>I look forward to hearing from you</p>
                        </div>
                        
                    <div>
                    <p className='uppercase pt-8'>Connect With Me</p>

                      <div className='flex items-center  py-4'>



                            
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                           
                                <FaLinkedin/>
                         
                            </div>
                            


                                
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail/>
                            </div>

                            
                      </div>

                    </div>

                   </div>

                 

                </div>



                {/**right */}

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
               


                    <div className='p-4'>



                        <form >

                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>

                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>

                                <div className='flex flex-col'>

                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                   <label className='uppercase text-sm py-2'>Email</label>
                                   <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                                </div>

                                <div className='flex flex-col py-2'>
                                   <label className='uppercase text-sm py-2'>Subject</label>
                                   <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>

                                <div className='flex flex-col py-2'>
                                   <label className='uppercase text-sm py-2'>Message</label>
                                   <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="10"></textarea>
                                </div>

                                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>




                        </form>

                    </div>

                </div>
                

            </div>

            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#5651e5' size={30}/>
                    </div>
                </Link>
            </div>

        </div>
      
    </div>

      
    </div>











  )
}
