import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Footer from "./footer.js"
import Intro from "../home/home.js"
import Project from "../projects/project.js"
import About from "./about.js"

import React , {useEffect,useRef,useLayoutEffect} from "react"
export default function Home() {
  const audioEle = useRef(null)
  {/*useLayoutEffect(() =>{
    async function playAudio(){
      
    }
    playAudio()
  },[audioEle.current])
  */}
  return (
    <div className="portofolio">
      <Head>
        <title>Homepage of my portofolio to see what is my experience and my knowledge</title>
        <meta name="description" content="mohamed portofolio where i show my personal projects and knowledge of the technology and my skills" />
        <link rel="icon" href="/images/44-folder-outline.gif" />
      </Head>

      <main className="main">
       {/*<audio className="bg-audio"   loop ref={audioEle} controls>
        <source src="/audio/bg-audio.mp3" type="audio/mpeg"/>
       </audio>
       */}
       <iframe src="audio/bg-audio.mp3" allow="autoplay" id="audio"></iframe>
       <Intro />
       <About />
       <div className="project-ctn">
         <Project />
        </div>
      </main>
      <Footer />
    </div>
  )
}
