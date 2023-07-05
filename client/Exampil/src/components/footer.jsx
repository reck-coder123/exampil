import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  return (
    <div style={{width:"100%", background:'#700d61', color:"white", height:"28rem", marginTop:'2rem'}}>
      <img style={{mixBlendMode:"color-burn"}}  src="https://media.licdn.com/dms/image/C4E0BAQHS-EPKyxe6Vw/company-logo_200_200/0/1638947352490?e=2147483647&v=beta&t=1iiCc6GQFKuv3DyRfv2FQjTlyiF1TtQrOsNbYTfbuFI" alt="" />
      <p>Gold standard platform for all entrance exam <br /> By The Toppers, For The Toppers, Of The Toppers</p>
      <LocalPhoneIcon style={{color:"white"}} /> <p style={{color:"white"}}>9930552280</p>
      <CopyrightIcon style={{color:"white"}}/> 2023 Exampil
      <br />
      <br />
      
      <div className="social" style={{display:'flex',justifyContent:"space-between", width: "20%"}}><FacebookSharpIcon /> <YouTubeIcon />
      <InstagramIcon ></InstagramIcon> <TelegramIcon /></div>
    </div>
  )
}

export default Footer
