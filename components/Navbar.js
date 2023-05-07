/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react'
import { FaHockeyPuck } from "react-icons/fa";
import Link from 'next/link';


const Navbar = () => {

  const [sideBar, setSideBar] = useState(false)
 
  const openSideMenu = () => {
    setSideBar(!sideBar)
    console.log('adf')
  }


  const closeSideMenu = () => {
    setSideBar(false)
  }
  


  return (
    <>
     <nav>

      <h2 className='text-center text-light titleNav'>
        2023 IIHF Worl Championship
      </h2>

      <h2 className='text-center text-light phone'>
        2023 IIHF
      </h2>
      

      <div className='puck'
            >
        <FaHockeyPuck onClick={openSideMenu}/>
      </div>

     </nav>


      {
        sideBar && 
        (
          <>
            <div className="sideBar">

            <Link href='/slovakia/slovakia' style={{ textDecoration: 'none' }}
             onClick={closeSideMenu}    >
              <div className='link-box mt-1'>
                <div className="sideImgBox">
                  <img src="/svk.png" alt="img" className='sideImg'/>
                </div>
                <span className='side-link ' >
                  Slovakia
               </span>
              </div>
            </Link>

            <Link href='/cecha/cechia' style={{ textDecoration: 'none' }}
                  onClick={closeSideMenu}>
              <div className='link-box'>
                <div className="sideImgBox">
                  <img src="/cz.png" alt="img" className='sideImg'/>
                </div>
                <span className='side-link ' >
                  Czech Republic
               </span>
              </div>
            </Link>

            <Link href='/finlad/finland' style={{ textDecoration: 'none' }}
                  onClick={closeSideMenu}>
              <div className='link-box'>
                <div className="sideImgBox">
                  <img src="/fin.png" alt="img" className='sideImg'/>
                </div>
                <span className='side-link ' >
                  Finland
               </span>
              </div>
            </Link>

            <Link href='/sweden/sweden' style={{ textDecoration: 'none' }}
                  onClick={closeSideMenu}>
              <div className='link-box'>
                <div className="sideImgBox">
                  <img src="/swe.png" alt="img" className='sideImg'/>
                </div>
                <span className='side-link ' >
                  Sweden
               </span>
              </div>
            </Link>

            <Link href='/canada/canada' style={{ textDecoration: 'none' }}
                  onClick={closeSideMenu}>
              <div className='link-box'>
                <div className="sideImgBox">
                  <img src="/ca.png" alt="img" className='sideImg'/>
                </div>
                <span className='side-link ' >
                  Canada
               </span>
              </div>
            </Link>
            <Link href='/latvia/latvia' style={{ textDecoration: 'none' }}
                  onClick={closeSideMenu}>
              <div className='link-box'>
                <div className="sideImgBox">
                  <img src="/lat.png" alt="img" className='sideImg'/>
                </div>
                <span className='side-link ' >
                  Latvia
               </span>
              </div>
            </Link>
            <Link href='/usa/usa' style={{ textDecoration: 'none' }}
                  onClick={closeSideMenu}>
              <div className='link-box'>
                <div className="sideImgBox">
                  <img src="/usa.png" alt="img" className='sideImg'/>
                </div>
                <span className='side-link ' >
                  USA
               </span>
              </div>
            </Link>
            <Link href='/france/france' style={{ textDecoration: 'none' }}
                  onClick={closeSideMenu}>
              <div className='link-box'>
                <div className="sideImgBox">
                  <img src="/fra.png" alt="img" className='sideImg'/>
                </div>
                <span className='side-link ' >
                  France
               </span>
              </div>
            </Link>
            <Link href='/denmark/denmark' style={{ textDecoration: 'none' }} 
                  onClick={closeSideMenu}>
              <div className='link-box'>
                <div className="sideImgBox">
                  <img src="/den.png" alt="img" className='sideImg'/>
                </div>
                <span className='side-link ' >
                  Denmark
               </span>
              </div>
            </Link>
            <Link href='/hungary/hungary' style={{ textDecoration: 'none' }}
                  onClick={closeSideMenu}>
              <div className='link-box'>
                <div className="sideImgBox">
                  <img src="/hu.png" alt="img" className='sideImg'/>
                </div>
                <span className='side-link ' >
                  Hungary
               </span>
              </div>
            </Link>
            <Link href='/germany/germany' style={{ textDecoration: 'none' }}
                  onClick={closeSideMenu}>
              <div className='link-box'>
                <div className="sideImgBox">
                  <img src="/ger.png" alt="img" className='sideImg'/>
                </div>
                <span className='side-link ' >
                  Germany
               </span>
              </div>
            </Link>
            <Link href='/austria/austria' style={{ textDecoration: 'none' }}
                  onClick={closeSideMenu}>
              <div className='link-box'>
                <div className="sideImgBox">
                  <img src="/aus.png" alt="img" className='sideImg'/>
                </div>
                <span className='side-link ' >
                  Austria
               </span>
              </div>
            </Link>
            <Link href='/slovenia/slovenia' style={{ textDecoration: 'none' }}
                  onClick={closeSideMenu}>
              <div className='link-box'>
                <div className="sideImgBox">
                  <img src="/slovenia.png" alt="img" className='sideImg'/>
                </div>
                <span className='side-link ' >
                  Slovenia
               </span>
              </div>
            </Link>
            <Link href='/kazakhstan/kazakhstan' style={{ textDecoration: 'none' }}
                  onClick={closeSideMenu}>
              <div className='link-box'>
                <div className="sideImgBox">
                  <img src="/kaz.png" alt="img" className='sideImg'/>
                </div>
                <span className='side-link ' >
                  Kazakhstan
               </span>
              </div>
            </Link>
            <Link href='/norway/norway' style={{ textDecoration: 'none' }}
                  onClick={closeSideMenu}>
              <div className='link-box'>
                <div className="sideImgBox">
                  <img src="/nor.png" alt="img" className='sideImg'/>
                </div>
                <span className='side-link ' >
                  Norway
               </span>
              </div>
            </Link>
            <Link href='/switzerland/sweitzerland' style={{ textDecoration: 'none' }}
                  onClick={closeSideMenu}>
              <div className='link-box mb-1'>
                <div className="sideImgBox">
                  <img src="/swi.png" alt="img" className='sideImg'/>
                </div>
                <span className='side-link ' >
                  Switzerland
               </span>
              </div>
            </Link>
           
            </div>
          </>
        )
      }


     <style>{`

     .link-box {
      position: relative;
      display: flex;
      padding-left: 5px;
      margin: 2px 2px 2px 4px;
      border: 1px solid black;
      border-radius: 4px;
     }

     .sideImgBox {
      position: relative;
      width: 45px;
      height: 30px;
      top: 2.6px;
      border: 1px solid black;
      overflow: hidden;
      border-radius: 4px;
     }

     .sideImg {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
     }

     .side-link {
       color: black;
       x-index: 5566;
       position: relative;
       margin-left: 4px;
       font-size : 24px;
     }

     

     .sideBar {
      position: fixed;
      width: 250px;
      height: 648px;
      background: white;
      top: 65px;
      border-radius: 4px;
      z-index: 5566!important;
      overflow-y: scroll;
      border-bottom-right-radius: 8px;
      box-shadow: 1px 1px 12px gray;
     }

     .puck {
      color :white;
      position: absolute;
      top: 0px;
      right: 0;
      margin: 3px 25px 0 0;
      font-size: 26px;
      display:none;
     }
     
     nav {
      position: relative;
     }

     .titleNav {
        position: relative;
        top: 9px;
        display: block
      }

     .phone {
        position: relative;
        top: 9px;
        display: none;
     }

     nav {
      position: fixed;
      width: 98%;
      left: 1%;
      top: 6px;
      height: 55px;
      background: #0b1142;
      border: 1px solid white;
      border-radius: 6px;
      z-index: 500;
      box-shadow: 1px 1px 11px gray;
       }


     @media (max-width : 600px) {

        .puck {
          display: block;
        }

        .titleNav {
          display: none;
        }

        .phone {
          display: block;
        }


     }
      
     `}</style>
    </>
  )
}

export default Navbar