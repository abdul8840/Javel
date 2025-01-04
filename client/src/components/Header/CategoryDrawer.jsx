import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoMdClose } from "react-icons/io";
import { FiPlusSquare } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { LuSquareMinus } from "react-icons/lu";



const CategoryDrawer = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [InnerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpen(newOpen)
  };

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null)
    } else {
      setSubmenuIndex(index)
    }

  }

  const openInnerSubmenu = (index) => {
    if (InnerSubmenuIndex === index) {
      setInnerSubmenuIndex(null)
    } else {
      setInnerSubmenuIndex(index)
    }

  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <h3 className="p-3 text-[16px] font[500] flex items-center justify-between ">Shop by category
        <IoMdClose className='text-[20px] cursor-pointer' onClick={toggleDrawer(false)} /></h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Fashion</Button>
            </Link>

            {
              submenuIndex===0 ? 
              <LuSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer text-[20px]' onClick={() => openSubmenu(0)} />
              : <FiPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer text-[20px]' onClick={() => openSubmenu(0)} />
            }

            {
              submenuIndex === 0 &&
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className='w-full'>
                    <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                  </Link>
                  {
                    InnerSubmenuIndex === 0 ?
                    <LuSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer text-[20px]' onClick={() => openInnerSubmenu(0)} />
                    : <FiPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer text-[20px]' onClick={() => openInnerSubmenu(0)} />
                  }
                  
                  {
                    InnerSubmenuIndex === 0 &&
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1 font-[500]">
                        <Link to='/' className='link w-full !text-left !justify-start !px-3 transition text-[14px] '>Smart Tablet</Link>
                      </li>

                      <li className="list-none relative mb-1 font-[500]">
                        <Link to='/' className='link w-full !text-left !justify-start !px-3 transition text-[14px] '>Crepe T-Shirt</Link>
                      </li>

                      <li className="list-none relative mb-1 font-[500]">
                        <Link to='/' className='link w-full !text-left !justify-start !px-3 transition text-[14px] '>Leather Watch</Link>
                      </li>

                      <li className="list-none relative mb-1 font-[500]">
                        <Link to='/' className='link w-full !text-left !justify-start !px-3 transition text-[14px] '>Rolling Diamond</Link>
                      </li>
                    </ul>
                  }


                </li>

              </ul>
            }


          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Fashion</Button>
            </Link>

            {
              submenuIndex===1 ? 
              <LuSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer text-[20px]' onClick={() => openSubmenu(1)} />
              : <FiPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer text-[20px]' onClick={() => openSubmenu(1)} />
            }

            {
              submenuIndex === 1 &&
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className='w-full'>
                    <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                  </Link>
                  {
                    InnerSubmenuIndex === 1 ?
                    <LuSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer text-[20px]' onClick={() => openInnerSubmenu(1)} />
                    : <FiPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer text-[20px]' onClick={() => openInnerSubmenu(1)} />
                  }
                  
                  {
                    InnerSubmenuIndex === 1 &&
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1 font-[500]">
                        <Link to='/' className='link w-full !text-left !justify-start !px-3 transition text-[14px] '>Smart Tablet</Link>
                      </li>

                      <li className="list-none relative mb-1 font-[500]">
                        <Link to='/' className='link w-full !text-left !justify-start !px-3 transition text-[14px] '>Crepe T-Shirt</Link>
                      </li>

                      <li className="list-none relative mb-1 font-[500]">
                        <Link to='/' className='link w-full !text-left !justify-start !px-3 transition text-[14px] '>Leather Watch</Link>
                      </li>

                      <li className="list-none relative mb-1 font-[500]">
                        <Link to='/' className='link w-full !text-left !justify-start !px-3 transition text-[14px] '>Rolling Diamond</Link>
                      </li>
                    </ul>
                  }


                </li>

              </ul>
            }


          </li>
        </ul>
      </div>
    </Box>
  );
  return (
    <div>
      <Drawer open={props.isOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}

export default CategoryDrawer;
