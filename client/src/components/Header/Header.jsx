import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const Header = () => {
    return (
        <header className='bg-white'>
            <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray-300">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col1 w-[50%]">
                            <p className="text-[12px] font-[500]">
                                Get up to 50% off new season styles, limited time only
                            </p>
                        </div>
                        <div className="col2 flex items-center justify-end">
                            <ul className="flex items-center gap-3">
                                <li className="list-none border-r-[1px] pr-3">
                                    <Link to="/" className="text-[13px] link font-[500] transition">
                                        Help Center
                                    </Link>
                                </li>
                                <li className="list-none">
                                    <Link to="/" className="text-[13px] link font-[500] transition">
                                        Order Tracking
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header py-4 border-b-[1px] border-gray-300">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col1 w-[25%]">
                            <Link to="/">
                                <h2 className="text-4xl font-bold">
                                    <span className="text-primary">Javel</span>Store
                                    <span className="text-primary">.</span>
                                </h2>
                            </Link>
                        </div>
                        <div className="col2 w-[45%]">
                            <Search />
                        </div>
                        <div className="col3 w-[30%] flex items-center pl-5">
                            <ul className="flex items-center w-full justify-end gap-3">
                                <li className="list-none border-r-[1px] pr-3">
                                    <Link to="/login" className="link transition text-[15px] font[500]">
                                        Login
                                    </Link>{' '}
                                    /{' '}
                                    <Link to="/register" className="link transition text-[15px] font[500]">
                                        Register
                                    </Link>
                                </li>
                                <li>
                                <Tooltip title="Compare">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <IoGitCompareOutline />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                                </li>
                                <li>
                                <Tooltip title="Wishlist">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <FaRegHeart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                                </li>
                                <li>
                                <Tooltip title="Cart">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <MdOutlineShoppingCart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Navigation />
        </header>
    );
};

export default Header;