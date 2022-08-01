import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonIcon from '@mui/icons-material/Person';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import InfoIcon from '@mui/icons-material/Info';
import TimelineIcon from '@mui/icons-material/Timeline';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Link from "next/link"
const Footer = () =>{
  return (
    <footer className="footer">
     <Link href="#intro">
      <button className="icons 1">
      <HomeIcon sx={{
        color:"white"
      }} />
      </button>
     </Link>
     <Link href="#services">
     <button className="icons 2">
      <WorkOutlineIcon sx={{
        color:"white"
      }} />
      </button>
     </Link>
     <Link href="#projects">
      <button className="icons 3">
      <TimelineIcon sx={{
        color:"white"
      }} />
      </button>
     </Link>
     <Link href="#contact">
     <button className="icons 4">
      <ContactPageIcon sx={{
        color:"white"
      }} />
      </button>
     </Link>
    </footer>
  )
}
export default Footer