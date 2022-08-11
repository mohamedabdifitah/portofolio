import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonIcon from '@mui/icons-material/Person';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import InfoIcon from '@mui/icons-material/Info';
import TimelineIcon from '@mui/icons-material/Timeline';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import {MdWork} from "react-icons/md"
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import Link from "next/link"
import HomeOutlined from "@mui/icons-material/HomeOutlined";

const Tabs = [
  
  {
    name:"Home",
    on:HomeIcon,
    off:HomeOutlined

  },
  {
    name:"services",
    on:WorkIcon,
    off:WorkOutlineOutlinedIcon
  },
  {
    name:'about',
    on:TimelineIcon,
    off:InfoIcon
  },
  {
    name:"contact",
    on:PersonIcon,
    off:PermContactCalendarOutlinedIcon
  }

]
const Footer = () =>{
  const [selected,setSelected] = useState(0)

  return (
    <footer className="footer"> 
      { 
        Tabs.map((Tab,index) => {
          return(
            <Link href="#intro">
              <button className="icons 1"  onClick={() =>{

                setSelected(index)
              }
                 
              
            }>
                {index==selected?<Tab.on sx={{
                color:"white"
                
                }}/>:<Tab.off sx={{
                  color:"white"
                  
                  }}/>
                }
                </button>
            </Link>
          )
        })
      }
     {/*<Link href="#intro">
      <button className="icons 1">
      <HomeOutlined sx={{
        color:"white"
      }} />
      </button>
     </Link>
     <Link href="#services">
     <button className="icons 2">
      <WorkOutlinedIcon sx={{
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
    */}
    </footer>
  )
}
export default Footer