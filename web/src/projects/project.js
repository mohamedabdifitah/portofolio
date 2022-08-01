import React,{useId}from "react"
import { FcPrevious,FcNext} from "react-icons/fc"
import Image from 'next/image'
const Project = () =>{
  const id = useId()
  const myLoader = ({ src, width, quality }) => { 
    return `https://res.cloudinary.com/practicaldev/image/fetch/s--c70-cv3S--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9uh4vfrwqw3tnu29ykl4.jpg` 
    
  }
  return (
    <div className="project" id={id}>
     <div className="display">
      <button className="button project-icon previous">
        <FcPrevious fontSize="30px"/>
      </button>
      <Image 
      layout='fill'
      className="project-img"
      loader={myLoader}
      src="9uh4vfrwqw3tnu29ykl4.jpg"
      alt="project screenshot"/>
      
      <button className="button project-icon next">
        <FcNext fontSize="30px" color="#e69722"
        />
       </button>
     </div>
     <div className="precontent">
      <p> project Title </p>
      <p> project description </p>
      <h5> tags</h5>
      </div>
    </div>
  )
}
export default Project