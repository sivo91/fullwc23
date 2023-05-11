/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react'
import { FaHockeyPuck } from "react-icons/fa";
import Link from 'next/link';
import sideBarLinks from '@/utils/sideBar';


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
        Hockey Championship 2023
      </h2>

      <h6 className='text-center text-light pt-2 phone'>
       Hockey Championship &apos;23
      </h6>
      

      <div className='puck'
            >
        <FaHockeyPuck onClick={openSideMenu}/>
      </div>

     </nav>


      {
        sideBar &&   //  SIDE BAR
        (
          <>
            
            <div className="sideBar">

              {
                 sideBarLinks.map( (item, i) => (

                  <Link key={i} href={item.url} style={{ textDecoration: 'none' }}
                        onClick={closeSideMenu}    >

                          <div className='link-box mt-1'>

                            <div className="sideImgBox">
                              <img src={item.src} alt="img" className='sideImg'/>
                            </div>

                            <span className='side-link ' >
                              {item.name}
                            </span>
                         </div>
                  </Link>
                 ))
              }

            
           
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
      z-index: 5566999999999!important;
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
      z-index: 9999999999999!important;
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