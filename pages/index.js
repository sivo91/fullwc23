/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { Tooltip } from '@nextui-org/react';
import dynamic from 'next/dynamic'
import { ToastContainer, toast } from 'react-toastify';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });





export default function Index () {

  const [loading, setLoading] = React.useState(false)
  const [teams, setTeams] = React.useState([])

  const [svk2, setSVK2] = React.useState({})
  const [cz2, setCZ2] = React.useState({})
  const [ca2, setCA2] = React.useState({})
  const [fin2, setFin2] = React.useState({})
  const [swe2, setSwe2] = React.useState({})
  const [usa2, setUsa2] = React.useState({})
  const [aus2, setAus2] = React.useState({})
  const [ger2, setGer2] = React.useState({})
  const [den2, setDen2] = React.useState({})
  const [hu2, setHu2] = React.useState({})
  const [fra2, setFra2] = React.useState({})
  const [lat2, setLat2] = React.useState({})
  const [kaz2, setKaz2] = React.useState({})
  const [nor2, setNor2] = React.useState({})
  const [slo2, setSlo2] = React.useState({})
  const [swi2, setSwi2] = React.useState({})

  const [svkData, setSvkData] = React.useState(0)
  const [czData, setCzData] = React.useState(0)
  const [caData, setCaData] = React.useState(0)
  const [finData, setFinData] = React.useState(0)
  const [sweData, setSweData] = React.useState(0)
  const [useData, setUsaData] = React.useState(0)
  const [ausData, setAusData] = React.useState(0)
  const [gerData, setGerData] = React.useState(0)
  const [denData, setDenData] = React.useState(0)
  const [huData, setHuData] = React.useState(0)
  const [fraData, setFraData] = React.useState(0)
  const [latData, setLatData] = React.useState(0)
  const [kazData, setKazData] = React.useState(0)
  const [norData, setNorData] = React.useState(0)
  const [sloData, setSloData] = React.useState(0)
  const [swiData, setSwiData] = React.useState(0)

  const [disable, setDisable] = useState(false)
  const [alert, setAlert] = useState(false)

 // WHO IS GONNA WIN?
 const winner = [svk2, cz2, ca2, fin2, swe2, usa2, aus2, ger2, den2, hu2, fra2, lat2, kaz2, nor2, slo2, swi2]
 //console.log(winner)



 /*  TOTAL VOTES */
  let totalVotes = 0
  let donutsVotes = []

  for(let i = 0; i < teams.length ; i++) {
    const x = Object.entries(teams[i]).reduce((total, [key, value]) => key.startsWith("game") ? total += value : total, 0);

    donutsVotes.push(x)
    totalVotes += x
  }
  //console.log(donutsVotes) // ok


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

 

 const graphData = [svkData, czData, caData, finData, sweData, ausData, gerData, denData, huData, fraData, latData, kazData, norData, sloData, swiData]
 
 let allData = 0
 for(let i = 0; i < graphData.length; i++) {
    allData += graphData[i]
 }

 const totalVots = totalVotes + allData
 //console.log(totalVotes)

async function getData () {

  try {
   setLoading(true)

    const res = await fetch ('/api/getTeam/data', { cache: "no-cache" } ) // great
    const data = await res.json()
   //console.log(data)

    console.log('\n\n***********************\n\nWelcome!\nYou can find more projects here:\nhttps://sivo91.github.io/First_Website/html/intro.html\n\n\n**********************\n\n')

    setTeams(data)

    setSVK2(data[0])
    setCZ2(data[1])
    setCA2(data[2])
    setFin2(data[12])
    setSwe2(data[13])
    setUsa2(data[15])
    setAus2(data[8])
    setGer2(data[9])
    setDen2(data[10])
    setHu2(data[11])
    setFra2(data[14])
    setLat2(data[3])
    setKaz2(data[4])
    setNor2(data[5])
    setSlo2(data[6])
    setSwi2(data[7])


    setSvkData(data[0].champ)
    setCzData(data[1].champ)
    setCaData(data[2].champ)
    setFinData(data[12].champ)
    setSweData(data[13].champ)
    setUsaData(data[15].champ)
    setAusData(data[8].champ)
    setGerData(data[9].champ)
    setDenData(data[10].champ)
    setHuData(data[11].champ)
    setFraData(data[14].champ)
    setLatData(data[3].champ)
    setKazData(data[4].champ)
    setNorData(data[5].champ)
    setSloData(data[6].champ)
    setSwiData(data[7].champ)

    
       
    setLoading(false)

  } catch (error) {
    console.log(error)
    setLoading(false)
  }
} 


useEffect(() => {
  getData()
},[])


const handleUpdate = async (id) => {
  //console.log(id)

  try {
    await axios.put(`/api/winner/${id}/update`, {id} )
    
    getData()
    //setDisable(true)

    setAlert(true)

    setTimeout(() => {
      setAlert(false)
    },3500)
   
  } catch (error) {
    console.log(error)
  }  

 
}


  return (
    <>

     
        {
          loading ? <div className='loadingImgBox'>
                      <img src="./hockey.png" className='loadingImg' alt="img"/>
                    </div> : 
          (
            <>

            {
              alert && <div className="alert alert-success" role="alert">
                          Thank you for voting!
                        </div>
            }


            <div className="teamsContainer">

                <div className="groupsAB">
                    
                  <div className="div">
                    <h3 className='text-center'>Group A</h3>
                    <h4 className='text-center'>Tampere | Finland</h4>

                    <div className="skupinaA">
                      {
                      teams.slice(8,16).map( (item, i) => (
                          
                         <Link href={`${item.url1}`} key={i} >
                          <Tooltip content={item.name} color='primary'>
                           <div className="skupinaImgBox" >
                             <img src={item.img} alt={item.img} />
                           </div>
                          </Tooltip> 
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
                            <Tooltip content={item.name} color='primary'>
                              <div className="skupinaImgBox" >
                                <img src={item.img} alt={item.img} />
                              </div>
                            </Tooltip>  
                        </Link>
                        ))
                      }
                    </div>
                  </div>

                </div>
            </div>


           <div className="winner">
            <h2 className='text-center mt-3 mb-4'> Who will be the Champion ? 🏆</h2>

         

              <div className="vodingBatns">

                {winner.map(btn => (
                  <button className='btn btn-outline-primary my-2 mx-3' key={btn?._id}
                    disabled={disable}
                    onClick={ () => handleUpdate(btn?._id)} >
                    {btn?.name}
                  </button>
                ))} 
             
              </div>
              

            

            <Chart
               type='bar'
               width={'100%'}
               height={350}
          
               series={[ 
                {data: [svkData, czData, caData, finData, sweData, useData, ausData, gerData, denData, huData, fraData, latData, kazData, norData, sloData, swiData ]} 
                      ]}
               
               options={{
                 colors: ['#3700ff'],
                 labels: ['SVK', 'CZ', 'CA', 'FiN', 'SWE', 'USA', 'AUS', 'GER', 'DEN', 'HU', 'FRA','LAT', 'KAZ', 'NOR', 'SLO', 'SWI'],
                 
               }}
               >

            </Chart>
           </div>

            <button className='btn btn-outline-primary rounded-0 vstack mx-auto totalVotes fs-3'>
              Total Votes: {totalVots}
            </button>



        {/*   CAN BE IN EXTRA COMPONENT */}
          <div className="donuts">
           
              <div className="donutChart">
              <Chart 
                 type='donut'
                 width={370}
                 height={370}
                 series={[ aus, ger, den, hu, fin, swe, fra, usa, aus, ger, den, hu, fra, lat, kaz, nor, slo, swi]}

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

      .alert {
        position: fixed;
        z-index: 999999999999999999999;
        top: 120px;
        width: 370px;
        margin: 0 20px;
        border: 1px solid #0c6b2c;
      }

      .vodingBatns {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 10px 0;
      }

      .winner {
        position: relative;
        width: 840px;
        margin: 0 auto 50px;
        background: white;
        border: 1px solid gray;
        border-radius: 7px;
        z-index: 999999;
      }

      .loadingImgBox {
        position: relative;
        width: 200px;
        height: 600px;
        margin: 100px auto 100px;
        top: 100px;
      }

     .loadingImg {
      position: relative;
      width: 100%;
     }

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
        z-index: 2222;
      }

      .donutChart {
        position: relative;
        width: 370px;
        margin: 0 auto;
      }
  
      .totalVotes {
        position: relative;
        margin: 0 0 50px 0;
        border: 1px solid black;
        color: black;
        z-index:22222;
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

      @media (max-width: 850px) { 
         .winner {
          position: relative;
          width: 90%;
          
         }

      .vodingBatns {
        position: relative;
        display: flex;
        justify-content: space-around;
        margin: 10px 0;
      }

      .winner {
        position: relative;
        
        background: white;
        border: 1px solid gray;
        border-radius: 7px;
        z-index: 999999;
      }
       }
     
      
     `}</style>
    </>
  )
}

