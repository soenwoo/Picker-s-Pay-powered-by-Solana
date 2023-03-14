import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";

//icons
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Circle from '../assets/Circle.png';


const Receipt: NextPage = (props) => {
  return (
    <div>
        <Link href="/receipt" legacyBehavior>  
                <a></a>
        </Link>
        {/* Menu */}
        <Box
            sx={{
                backgroundColor:'#E9E9E9',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                minHeight:55,
                borderBottom:1,
                borderColor:'black'
                }}>
            <Typography
                sx={{
                    color:'black',
                    fontSize:20,
                    fontWeight: 600
                }}>
                Receipt
            </Typography>
        </Box>
        {/* Component */}
        <Box
            sx={{
                backgroundColor:'#E9E9E9',
                display:'flex',
                justifyContent:'flex-start',
                flexDirection:'column',
                alignItems:'center',
                minHeight:'84vh',
                }}>
            <Box
                sx={{
                backgroundColor:'white',
                display:'flex',
                alignItems:'center',
                minWidth:365,
                minHeight:105,
                border:1,
                borderColor:'black',
                borderRadius:3,
                marginTop:1.5,
                marginBottom:1
                }}>
                <LocalCafeOutlinedIcon
                    sx={{color:'black',
                        fontSize: 42,
                        marginLeft:4,
                        marginRight:3}}></LocalCafeOutlinedIcon>
                <Box
                    sx={{
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'center'
                    }}>
                    <Typography
                        sx={{
                            color:'black',
                            fontSize:16,
                            fontWeight:600
                        }}>
                        Sol Cafe
                    </Typography>
                    <Typography
                        sx={{
                            color:'black',
                            fontSize:11,
                            fontWeight:400,
                            marginLeft:1.5
                        }}>
                        2023.3.17
                    </Typography>
                    <Typography
                        sx={{
                            color:'#9945FF',
                            fontSize:11,
                            fontWeight:600,
                            marginLeft:4
                        }}>
                        0.82 Sol
                    </Typography>
                </Box>
                <ArrowForwardIosOutlinedIcon
                    sx={{color:'black',
                        marginLeft:2.5
                        }}></ArrowForwardIosOutlinedIcon>
            </Box>


            <Box
                sx={{
                backgroundColor:'white',
                display:'flex',
                alignItems:'center',
                minWidth:365,
                minHeight:105,
                border:1,
                borderColor:'black',
                borderRadius:3,
                marginBottom:1
                }}>
                <LocalGroceryStoreOutlinedIcon
                    sx={{color:'black',
                        fontSize: 42,
                        marginLeft:4,
                        marginRight:3}}></LocalGroceryStoreOutlinedIcon>
                 <Box
                    sx={{
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'center'
                    }}>
                    <Typography
                        sx={{
                            color:'black',
                            fontSize:16,
                            fontWeight:600
                        }}>
                        Sol Store
                    </Typography>
                    <Typography
                        sx={{
                            color:'black',
                            fontSize:11,
                            fontWeight:400,
                            marginLeft:1.5
                        }}>
                        2023.3.17
                    </Typography>
                    <Typography
                        sx={{
                            color:'#9945FF',
                            fontSize:11,
                            fontWeight:600,
                            marginLeft:3.2
                        }}>
                        0.82 Sol
                    </Typography>
                </Box>
                <ArrowForwardIosOutlinedIcon
                    sx={{color:'black',
                        marginLeft:2.5
                        }}></ArrowForwardIosOutlinedIcon>
            </Box>
        </Box>
        
        
        

        
    </div>
  );
};

export default Receipt;