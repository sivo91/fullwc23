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
            onClick={openSideMenu}>
        <FaHockeyPuck />
      </div>

     </nav>


      {
        sideBar && 
        (
          <>
            <div className="sideBar">
            <Link href='/' style={{ textDecoration: 'none' }}>
              <h2 className='side-link ms-4 py-1' >
                Slovakia
              </h2>
            </Link>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <h2 className='side-link ms-4 py-1' >
                Czech Republic
              </h2>
            </Link>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <h2 className='side-link ms-4 py-1' >
                Canada
              </h2>
            </Link>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <h2 className='side-link ms-4 py-1' >
                Latvia
              </h2>
            </Link>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <h2 className='side-link ms-4 py-1' >
                Kazakhstan
              </h2>
            </Link>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <h2 className='side-link ms-4 py-1' >
                Norway
              </h2>
            </Link>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <h2 className='side-link ms-4 py-1' >
                Slovenia
              </h2>
            </Link>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <h2 className='side-link ms-4 py-1' >
                Switzerland
              </h2>
            </Link>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <h2 className='side-link ms-4 py-1' >
                Austria
              </h2>
            </Link>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <h2 className='side-link ms-4 py-1' >
                Germany
              </h2>
            </Link>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <h2 className='side-link ms-4 py-1' >
                Denmark
              </h2>
            </Link>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <h2 className='side-link ms-4 py-1' >
                Hungary
              </h2>
            </Link>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <h2 className='side-link ms-4 py-1' >
                Finland
              </h2>
            </Link>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <h2 className='side-link ms-4 py-1' >
                Sweden
              </h2>
            </Link>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <h2 className='side-link ms-4 py-1' >
                France
              </h2>
            </Link>
            <Link href='/' style={{ textDecoration: 'none' }}>
              <h2 className='side-link ms-4 py-1' >
                USA
              </h2>
            </Link>
            </div>
          </>
        )
      }


     <style>{`

     .side-link {
      color: black;
      border-bottom: 1px solid gray;
       x-index: 5566;
     }

     .side-link:nth-child(2){
       color: red;
     }

     .sideBar {
      position: fixed;
      width: 250px;
      height: 70%;
      background: white;
      top: 65px;
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