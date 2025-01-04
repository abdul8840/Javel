import React, { useState } from 'react'
import './Style.css'
import Button from '@mui/material/Button'
import { CgMenuLeftAlt } from "react-icons/cg";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { MdOutlineRocketLaunch } from "react-icons/md";
import CategoryDrawer from './CategoryDrawer';
import './Style.css'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openCategoryPanel = () => {
        setIsOpen(true);
    }
    return (
        <>
            <nav className='py-2'>
                <div className="container">
                    <div className="flex items-center justify-end gap-8">
                        <div className="col1 w-[20%]">
                            <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}>
                                <CgMenuLeftAlt className='text-[20px]' />
                                Shop by Categories
                                <LiaAngleDownSolid className='text-[14px] ml-auto font-bold' />
                            </Button>
                        </div>

                        <div className="col2 w-[60%]">
                            <ul className="flex items-center gap-3 nav">
                                <li className="list-none">
                                    <Link to='/' className='link transition text-[14px] font-[500]'>
                                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>
                                            Home
                                        </Button>
                                    </Link>
                                </li>

                                <li className="list-none relative">
                                    <Link to='/' className='link transition text-[14px] font-[500]'>
                                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>
                                            Fashion
                                        </Button>
                                    </Link>

                                    <div className="submenu absolute top-[120&] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all ">
                                        <ul className="">
                                            <li className="list-none w-full relative">
                                                <Link to='/'>
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men</Button>

                                                    <div className="submenu absolute top-[0&] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all ">
                                        <ul className="">
                                            <li className="list-none w-full">
                                                <Link to='/'>
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Shirt</Button>
                                                </Link>
                                            </li>
                                            <li className="list-none w-full">
                                                <Link to='/'>
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>T-Shirt</Button>
                                                </Link>
                                            </li>
                                            <li className="list-none w-full">
                                                <Link to='/'>
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Pants</Button>
                                                </Link>
                                            </li>
                                            <li className="list-none w-full">
                                                <Link to='/'>
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Jeans</Button>
                                                </Link>
                                            </li>
                                            <li className="list-none w-full">
                                                <Link to='/'>
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Watches</Button>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                                </Link>
                                            </li>
                                            <li className="list-none w-full">
                                                <Link to='/'>
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Women</Button>
                                                </Link>
                                            </li>
                                            <li className="list-none w-full">
                                                <Link to='/'>
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Kids</Button>
                                                </Link>
                                            </li>
                                            <li className="list-none w-full">
                                                <Link to='/'>
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Girls</Button>
                                                </Link>
                                            </li>
                                            <li className="list-none w-full">
                                                <Link to='/'>
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Boys</Button>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="list-none">
                                    <Link to='/' className='link transition text-[14px] font-[500]'>
                                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>
                                            Electronic
                                        </Button>
                                    </Link>
                                </li>

                                <li className="list-none">
                                    <Link to='/' className='link transition text-[14px] font-[500]'>
                                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>
                                            Bags
                                        </Button>
                                    </Link>
                                </li>

                                <li className="list-none">
                                    <Link to='/' className='link transition text-[14px] font-[500]'>
                                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>
                                            Footwear
                                        </Button>
                                    </Link>
                                </li>

                                <li className="list-none">
                                    <Link to='/' className='link transition text-[14px] font-[500]'>
                                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>
                                            Groceries
                                        </Button>
                                    </Link>
                                </li>

                                <li className="list-none">
                                    <Link to='/' className='link transition text-[14px] font-[500]'>
                                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>
                                            Beauty
                                        </Button>
                                    </Link>
                                </li>

                                <li className="list-none">
                                    <Link to='/' className='link transition text-[14px] font-[500]'>
                                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>
                                            Wellness
                                        </Button>
                                    </Link>
                                </li>

                                <li className="list-none">
                                    <Link to='/' className='link transition text-[14px] font-[500]'>
                                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>
                                            Jewellery
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col3 w-[20%]">
                            <p className='text-[14px] w-full font-[500] flex items-center gap-3 mb-0 mt-0 justify-end'>
                                <MdOutlineRocketLaunch className='text-[18px]' />Free Delivery Above $100
                            </p>
                        </div>
                    </div>
                </div>
            </nav>

            <CategoryDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default Navigation
