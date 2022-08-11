import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { useEffect, useState } from 'react'
import { BsInstagram,BsGithub } from "react-icons/bs"
import { SiFiverr,SiUpwork } from "react-icons/si"
//import ProfileImg from "../../public/images/IMG-20220529-WA0036.jpg"
const Intro = () =>{
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="intro">
      <div className='navbars'>
        
        <nav className='welcome'>
          <h1> welcome to my portofolio</h1> 
        </nav>
        <nav className='quick_link'>
        <button>
                <BsGithub fontSize={"20px"} />
              </button>
              <button>
                <BsInstagram fontSize={"20px"} />
              </button>
              <button>
                <SiUpwork fontSize={"20px"} />
              </button>
              <button>
                <SiFiverr fontSize={"40px"} />
              </button>
        </nav>
      </div>
     <div className="introduction">

      {/* <p className="intro-text"> Asc My Name is Moh'ed Abdifitah Ahmed</p>     */}
        <div className='intro_body'>
          
          <div className={"animate__animated animate__fadeIn"}>
                
                  <h1>{`Hi! I'm Moh'ed Abdifitah and im`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      <div className='contact_link'>
          <button >
            Hire Me 
          </button>
          <button>
            Download resume
          </button>
        </div>
     </div>
    {/* <img src="images/IMG-20220502-WA0048.jpg"/>
    */}
    </section>
  )
}
export default Intro