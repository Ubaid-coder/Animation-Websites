import './App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'

function App() {
  const boxRef = useRef();
  const circleRef = useRef();
  // const [circle, setcircle] = useState(0);
  // const random = gsap.random(-500,500,100);
  const [xValue, setxValue] = useState()
  const [yValue, setyValue] = useState()
  const [rotate, setrotate] = useState()
  const randomx = gsap.utils.random(-500,500,100);
  const randomy= gsap.utils.random(-500,200,100);
  
  // useGSAP(() => {
  //   gsap.from(boxRef.current,{
  //     y:300,
  //     opacity:0,
  //     rotate:720,
  //     duration:3,
  //     delay:1,

  //   })
  //   gsap.from('.box',{
  //     opacity:0,
  //     scale:0.1,
  //     rotate:720,
  //     duration:3,
  //     delay:1,
  //     repeat:-1,
  //     yoyo:true
  //   })
  // },{scope:'.container'})

  // useGSAP(() => {
  //  gsap.to('.circle',{
  //   x:circle,
  //   duration:0.5
  //  })
  // },[circle])

  useGSAP(() => {
    gsap.to(boxRef.current,{
      x:xValue,
      y:yValue,
      duration:0.1,
      rotate:rotate
    })
  },[xValue,yValue,rotate])
  return (
    <main>
      {/* <div className="container">
        <div className="circle"></div>
        <div ref={boxRef} className="box"></div>
      </div>
      <div className="another">
        <div className="circle"></div>
        <div ref={boxRef} className="box"></div>
      </div> */}

      {/* <button onClick={() => setcircle(random)} >Animate</button> */}
      {/* <div  className="circle"></div> */}
      <button onClick={() => {
        setxValue(randomx)
        setyValue(randomy)
        setrotate(randomy)
      }}>Animate</button>
      {/* <div className="box"></div> */}
      <img onMouseOver={() => {
        setxValue(randomx)
        setyValue(randomy)
        setrotate(randomy)
      }} ref={boxRef} src="https://images.vexels.com/media/users/3/242241/isolated/preview/409d95bf597e130c6c1b1d2ac3f5dbf5-side-fly-geometric-color-stroke.png" alt="" />
    </main>
  )
}

export default App