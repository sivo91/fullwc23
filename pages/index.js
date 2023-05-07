/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios';
import getAllTeams from '@/utils/getAllTeams';
import { revalidatePath } from 'next/cache';





export default function Index () {

  const [loading, setLoading] = React.useState(false)
  const [teams, setTeams] = React.useState([])
 


  //console.log(teams)

async function getData () {

  try {
   setLoading(true)

   /* axios('/api/getTeam/data') // ok
   .then(res => {
    setTeams(res.data) 
    console.log(res.data)
   }) */

/* const res = await axios('/api/getTeam/data') // ok
   const mongo = await res.data
   setTeams(mongo)   */  

  
   /*  const res = await fetch ('/api/getTeam/data', { next: { revalidate: 1} })
    const data = await res.json()
    setTeams(data) */


    const res = await fetch ('/api/getTeam/data', { cache: "no-cache" } ) // great
    const data = await res.json()

    setTeams(data)
   
    
    setLoading(false)

  } catch (error) {
    console.log(error)
    setLoading(false)
  }
} 

  
useEffect(() => {
  getData()
},[])


  return (
    <>

     
    <div className="teamsContainer">

     <div className="groupsAB">
         

  
     {
      loading ? <p>loading</p> : 
      (
        <>
          <div className="teamsContainer">

            <div className="groupsAB">
                
               <div className="div">
                <h3 className='text-center'>Group A</h3>
                <h4 className='text-center'>Tampere | Finland</h4>

                <div className="skupinaA">
                  {
                  teams.slice(8,16).map( (item, i) => (
                      
                      <Link href={`${item.url1}`} key={i} >
                      <div className="skupinaImgBox" >
                        <img src={item.img} alt={item.img} />
                      </div>
                    </Link>
                    ))
                  }
                </div>
              </div>


              

              <div className="div">
                <h3 className='text-center'>Group B</h3>
                <h4 className='text-center'>Riga | Latvia</h4>

                <div className="skupinaB">
                  {
                  teams.slice(0,8).map( (item, i) => (
                      
                      <Link href={`${item.url1}`} key={i} >
                      <div className="skupinaImgBox" >
                        <img src={item.img} alt={item.img} />
                      </div>
                    </Link>
                    ))
                  }
                </div>
              </div>

            </div>
         </div>
        
        </>
      ) 
     }
       

     </div>

    </div>
     



      <style>{`
      .teamsContainer {
        position: relative;
        width: 100%;
        padding-top: 120px;
      }
      .groupsAB {
        position: relative;
        max-width: 1000px;
        min-width: 375px;
        margin: 15px auto 60px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }
    
      .skupinaA, .skupinaB {
        position: relative;
        width: 375px;
        margin: 15px;
        display: flex;
        flex-wrap: wrap;
        border: 1px solid black;
        border-radius: 8px;
        background: #d1d1d1;
      }
      .skupinaImgBox {
       position: relative;
        width: 150px;
        height: 92px;
        margin: 15px;
        overflow: hidden;
        background: black;
        border-radius: 6px;
        border: 1px solid gray;
      }
      .skupinaImgBox img {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
     
      
     `}</style>
    </>
  )
}

