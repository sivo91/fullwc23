/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';

import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });









export default function Index () {

  const [loading, setLoading] = React.useState(false)
  const [teams, setTeams] = React.useState([])


 /*  TOTAL VOTES */
  let totalVotes = 0
  let donutsVotes = []

  for(let i = 0; i < teams.length; i++) {
    const x = Object.entries(teams[i]).reduce((total, [key, value]) => key.startsWith("game") ? total += value : total, 0);

    donutsVotes.push(x)
    totalVotes += x
  }
 //console.log(donutsVotes[0]) // ok


 const svk = donutsVotes[0]
 const cz = donutsVotes[1]
 const ca = donutsVotes[2]
 const lat = donutsVotes[3]
 const kaz = donutsVotes[4]
 const nor = donutsVotes[5]
 const slo = donutsVotes[6]
 const swi = donutsVotes[7]
 const aus = donutsVotes[8]
 const ger = donutsVotes[9]
 const den = donutsVotes[10]
 const hu = donutsVotes[11]
 const fin = donutsVotes[12]
 const swe = donutsVotes[13]
 const fra = donutsVotes[14]
 const usa = donutsVotes[15]
 



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

            <button className='btn btn-outline-primary rounded-0 vstack mx-auto totalVotes fs-3'>
              Total Votes: {totalVotes}
            </button>

         
          <div className="donuts">
           
              <div className="donutChart">
              <Chart 
                 type='donut'
                 width={370}
                 height={370}
                 series={[ aus, ger, den, hu, fin, swe, fra, usa]}

                 options={{
                  labels: ['Austria', 'Germany', 'Denmark', 'Hungary', 'Finland', 'Sweden', 'France', 'USA'],
                  title: {
                    text: 'Group A, Finland | Tampere'
                  },
                  plotOptions: {
                    pie: {
                      donut: {
                        labels: {
                          show: true,
                          total: {
                            show: true,
                            fontSize: 20
                
                          }
                        }
                      }
                    }
                  }
                 }}
                 >


              </Chart>
            </div>

            <div className="donutChart">
              <Chart 
                 type='donut'
                 width={370}
                 height={370}
                 series={[ svk, cz, ca, lat, kaz, nor, slo, swi]}

                 options={{
                  labels: ['Slovakia', 'Czech Rep.', 'Canada', 'Latvia', 'Kazakhstan', 'Norway','Slovenia', 'Switzerland'],
                  title: {
                    text: 'Group B, Latvia | Riga'
                  },
                  plotOptions: {
                    pie: {
                      donut: {
                        labels: {
                          show: true,
                          total: {
                            show: true,
                            fontSize: 20
                
                          }
                        }
                      }
                    }
                  }
                 }}
                 >


              </Chart>
            </div>

          </div>

          <div className="bgIMG">
            <img src="/bgImg.jpg" className='bgIm' alt="img" />
          </div>
           
            
            </>
          ) 
        }

 
       

 
      <style>{`

      .bgIMG {
        position: fixed;
        left:0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index:0;
      }

      .bgIm {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: .06;
      }

      .donuts {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 90px;

      }

      .donutChart {
        position: relative;
        width: 370px;
        margin: 0 auto;
      }
  
      .totalVotes {
        position: relateve;
        margin: 0 0 50px 0;
        border: 1px solid black;
        color: black;
        z-index:2;
      }

      .teamsContainer {
        position: relative;
        width: 100%;
        padding-top: 100px;
        z-index: 4;
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
        justify-content: center;
        flex-wrap: wrap;
        border: 1px solid black;
        border-radius: 8px;
        background: #f5f5f5;
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

