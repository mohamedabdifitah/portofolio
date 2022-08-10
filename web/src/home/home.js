import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { BsInstagram,BsGithub } from "react-icons/bs"
import { SiFiverr,SiUpwork } from "react-icons/si"
//import ProfileImg from "../../public/images/IMG-20220529-WA0036.jpg"
const Intro = () =>{
  
  return (
    <section className="intro">
     <div className="introduction">
      <p className="intro-text"> Asc My Name is Moh'ed Abdifitah Ahmed</p>
      <div className='contact_link'>
        <button >
          Hire Me 
        </button>
        <button>
          Download resume
        </button>
      </div>
      
      

    
      
      
     </div>
      <div className='quick_link'>
          <button>
            <BsGithub />
          </button>
          <button>
            <BsInstagram />
          </button>
          <button>
            <SiUpwork />
          </button>
          <button>
            <SiFiverr />
          </button>
      </div>
    {/* <img src="images/IMG-20220502-WA0048.jpg"/>
    */}
    </section>
  )
}
export default Intro