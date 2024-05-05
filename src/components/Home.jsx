import React from "react";
//import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import {fadeIn} from './variants';
import Footer from "./Footer";
import apod from '../components/images/gip4.gif';
import gip from '../components/images/mars.gif';
import {FaYoutube, FaFacebook} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import Image from '../components/images/nasa-5.png';

export default function Home(){
    return(
        <>
        <div  className='container flex items-center justify-center ml-44'>
        <div className="admin"> 
         <br/><br/>
         <section  className='min-h-[85vh] lg:min-h-[78vh] text-cyan-50' flex items-center id='home'>
        <div className='container mx-auto'>
            <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                <div className='flex-1 text-center lg:text-left'>
                    <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='text-5xl lg:text-7xl font-bold leading-tight'>
                        NASA <span className='text-accent'>API</span>
                    </motion.h1>
                    <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='my-8 text-3xl lg:text-4xl font-bold leading-tight'>
                        BEYOND THE EARTH {' '}
                        <TypeAnimation sequence={['Photos', 2000, 'Videos', 2000, 'Info', 2000]} speed={50} className='text-accent' wrapper='span' repeat={Infinity} />
                    </motion.div>
                    <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='my-8 max-w-lg mx-auto lg:mx-0'>
                    NASA API, provided by NASA (National Aeronautics and Space Administration), offers access to a wealth of space-related data, including images, videos, mission details, and more.
                    </motion.p>
                    <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex gap-6 items-center my-12'>
                    <a href={`/Footer`}><button className='btn btn-lg text-cyan-50 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500'>Contact Us</button></a>
                    <a href={`/contactUs`}><button className='btn btn-lg text-cyan-50 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500'> NASA APIs</button></a>
                    </motion.div>
                    <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex text-2xl gap-6 max-w-max mx-auto lg:mx-0'>
                        <a href="https://www.youtube.com/user/SLIITtube" className='text-white hover:text-red-800'>
                        <FaYoutube />
                        </a>
                        <a href="https://www.facebook.com/sliit.lk/" className='text-white hover:text-blue-800'>
                        <FaFacebook />
                        </a>
                    </motion.div>
                </div>

                <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
                    <img src={Image} alt="mainPic" />
                </motion.div>
            </div>
        </div>
    </section>
    </div>
    </div>
        <div>
        <section className='sectionDASH mt-10' id='work'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.3}} className='flex-1 flex flex-col gap-y-14 lg:mb-0'>
                        
                        <a href={`/nasaphoto`}>
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-200 h-56'>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={apod} alt="pImg1" />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className=' text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent'>APOD</span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-white text-xl'><a href='work'>Picture of the Day</a></span>
                            </div>
                        </div>
                        </a>                                                                                                                                     
                    </motion.div>
                    <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.3}} className='flex-1 flex flex-col gap-y-14'>
                        <a href={`/rover`}>
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-200 h-56'>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={gip} alt="pImg1" />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-3xl font-bold bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent'>Mars Rover Photos</span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-white text-xl'><a href='work'>Mars Photos</a></span>
                            </div>
                        </div>
                        </a>                                        
                    </motion.div>
                </div>
            </div>
        </section>
        <Footer/>
        </div>
        </>
    );
}