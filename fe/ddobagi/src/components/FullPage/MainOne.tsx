import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/joy';
import './Mouse.css';

export default function MainOne() {
  return (
    <div>
      <Box 
      sx={{
        height:"150px"
      }}>

      </Box>
      <div
        style={{
          width: '100%',
          height: '92vh',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#92B4EC',
        }}
      >
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '80px',
          }}
        >
          <Box sx={{ marginTop: "300px" }}>
            <Typography
              sx={{
                fontSize: '80px',
                fontFamily: "CookieRun-Regular",
                color: "#ffffff",
                marginBottom: '5px',
                whiteSpace:"pre-line"
              }}
            >
              또박또박 
              말하면서 익혀요
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box className="mouse" sx={{ marginBottom: '10px' }}>
            <div className="scroll-icon ex-1">
              <span className="wheel"></span>
            </div>
          </Box>
          <Typography 
          sx={{
            fontSize: '35px',
            fontFamily: "CookieRun-Regular",
            color: "#ffffff",
          }}>
            아래로 내려보세요
          </Typography>
        </Box>
      </div>
    </div>
  );
}