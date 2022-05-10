import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image'
import home2 from '/public/images/home5.jpg'




function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function About() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
    <h1 className='text-center my-8'>About Us</h1>
    <div className=' lg:grid grid-cols-2'>
    <div className=' flex flex-wrap w-full py-10 relative mb-4 '>
      <div className='lg:hidden'>
      <Image className=" w-full object-cover h-full object-center block  absolute inset-0" blurDataURL src={home2} layout="fill" />
      </div>
    <div className='justify-center flex  relative container '>
    <Box className="container lg:bg-white">
    <div className='bg-rose-500'>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          
          <Tab label="Know More About Us" {...a11yProps(0)} />
          
          <Tab label="How The Website Is Made" {...a11yProps(1)} />
          <Tab label="How Do You Use Our Website" {...a11yProps(2)} />
          
        </Tabs>
        
      </AppBar>
      </div>
      <SwipeableViews
      className=''
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <div className=' border-4 bg-white bg-opacity-50 text-xs md:text-lg container py-3'>
        
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis earum veniam quod sapiente voluptate eligendi obcaecati, quis in odio rerum maxime ipsum! Autem nam totam provident itaque deserunt repudiandae odit. Tempore necessitatibus praesentium corporis, commodi recusandae vero, officia sed debitis nulla deserunt ipsa dignissimos officiis veritatis sit maiores quam vitae?
        
        </div>
        <div className=' border-4 bg-white bg-opacity-50 text-xs md:text-lg container py-3'>
        
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis earum veniam quod sapiente voluptate eligendi obcaecati, quis in odio rerum maxime ipsum! Autem nam totam provident itaque deserunt repudiandae odit. Tempore necessitatibus praesentium corporis, commodi recusandae vero, officia sed debitis nulla deserunt ipsa dignissimos officiis veritatis sit maiores quam vitae?
        
        </div>
        <div className=' border-4 bg-white bg-opacity-50 text-xs md:text-lg container py-3'>
        
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis earum veniam quod sapiente voluptate eligendi obcaecati, quis in odio rerum maxime ipsum! Autem nam totam provident itaque deserunt repudiandae odit. Tempore necessitatibus praesentium corporis, commodi recusandae vero, officia sed debitis nulla deserunt ipsa dignissimos officiis veritatis sit maiores quam vitae?
        
        </div>
        
      </SwipeableViews>
    </Box>
    </div>
    </div>
    <div className='container relative hidden lg:block my-auto'>
      <div className='p-2  m-1 bg-black bg-opacity-50 skew-x-6 rounded-md '>
        <div className='p-3  m-1 bg-black bg-opacity-50 rounded-md '>
      <Image blurDataURL src={home2} layout="responsive" />
      </div>
      </div>
    </div>
    
    </div>
    </>
  );
}
