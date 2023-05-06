/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */


import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router'
//import  Chart  from "react-apexcharts";
import { Loading } from "@nextui-org/react";
//import { useTeamsCountext } from '../context/teams_context'


import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false }); 


//export default dynamic (() => Promise.resolve(Home), {ssr: false})



/*   export async function getServerSideProps(context) {
  const { params } = context
  const { id } = params
   await db.connect();
   const groupB = await Team.find({})
   await db.disconnect();
 
  let x = {}
  let y = {}
         if(id === 'svk_cz') {
    x = groupB[0]
    y = groupB[1]
  } else if(id === 'svk_lat') {
    x = groupB[0]
    y = groupB[3]
  } else if(id === 'svk_ca') {
    x = groupB[0]
    y = groupB[2]
  } else if(id === 'svk_swi') {
    x = groupB[0]
    y = groupB[7]
  } else if(id === 'svk_kaz') {
    x = groupB[0]
    y = groupB[4]
  } else if (id === 'svk_slo') {
    x = groupB[0]
    y = groupB[6]
  } else if (id === 'svk_nor') {
    x = groupB[0]
    y = groupB[5]
 // czech
  } else if(id === 'cz_svk') {
     x = groupB[1]
    y = groupB[0]
  }  else if(id === 'ca_svk') {  
     x = groupB[2]
    y = groupB[0]
  } else if(id === 'kaz_svk') { 
     x = groupB[4]
    y = groupB[0]
  }  else if(id === 'lat_svk') {  
     x = groupB[3]
    y = groupB[0]
  }  else if(id === 'swi_svk') {  
     x = groupB[7]
    y = groupB[0]
  }  else if(id === 'slo_svk') {  
     x = groupB[6]
    y = groupB[0]
  } else if(id === 'nor_svk') {  
     x = groupB[5]
    y = groupB[0]
  } 
   return {
    props: {
      dataX: JSON.parse(JSON.stringify(x)),
      dataY: JSON.parse(JSON.stringify(y))
    }
  }
} */ 



//*********************************************************


const Index = (   ) => {

//const { dataX, dataY } = props
//console.log(  dataVX, dataVY) 
//const {teams} = useTeamsCountext ()

const router = useRouter()
const  {id} = router.query
const paramID = id


 //const [teams, setTeams] = useState([])
 const [teamX, setTeamX] = useState({})    
 const [teamY, setTeamY] = useState({})    
 const [loading, setLoading] = useState(false)
 const [disable, setDisable] = useState(false)
 const [voteX, setVoteX] = useState(0)
 const [voteY, setVoteY] = useState(0)




 

 useEffect(() => {
 },[id])

 async function getData () {
  let x = []
  let vx = 0
  let vy = 0

  try {
   setLoading(true)

    const res = await fetch ('/api/getTeam/data', { cache: "no-cache" } ) // great
    const mongo = await res.json()


                      if(id === 'svk_cz') {          
            x.push(mongo[0])
            x.push(mongo[1])
            vx = mongo[0].game1
            vy = mongo[1].game1 // undefined !?
          } /* else if (id === 'svk_latvia') {
            x.push(mongo[0])
            y.push(mongo[3])
          } else if (id === 'svk_ca') {
            x.push(mongo[0])
            y.push(mongo[2])
          } else if (id === 'svk_swi') {
            x.push(mongo[0])
            y.push(mongo[7])
          } else if (id === 'svk_kaz') {
            x.push(mongo[0])
            y.push(mongo[4])
          } else if (id === 'svk_slo') {
            x.push(mongo[0])
            y.push(mongo[6])
          } else if (id === 'svk_nor') {
            x.push(mongo[0])
            y.push(mongo[5])
          } else if(id === 'cz_svk') { // x === 0 otocene garde aby ukazalo opacne garde 
            x.push(mongo[0])
            y.push(mongo[1])
          } else if (id === 'ca_svk') {
            x.push(mongo[0])
            y.push(mongo[2])
          } else if (id === 'kaz_svk') {
            x.push(mongo[0])
            y.push(mongo[4])
          } else if (id === 'lat_svk') {
            x.push(mongo[0])
            y.push(mongo[3])
          } else if (id === 'swi_svk') {
            x.push(mongo[0])
            y.push(mongo[7])
          } else if (id === 'slo_svk') {
            x.push(mongo[0])
            y.push(mongo[6])
          } else if (id === 'nor_svk') {
            x.push(mongo[0])
            y.push(mongo[5])
          } */ 
     

    setTeamX(x[0])
    setTeamY(x[1])
    setVoteX(vx)
    setVoteY(vy)

  setLoading(false)

  } catch (error) {
    console.log(error)
    setLoading(false)
  }
} 



/* 

  if(id === 'svk_cz') {  // sk
    vx = x.game1
    vy = y.game1
  } else if(id === 'svk_lat') {
    vx = x.game3
    vy = y.game1
  } else if(id === 'svk_ca') {
    vx = x.game2
    vy = y.game1
  } else if(id === 'svk_swi') {
    vx = x.game7
    vy = y.game1
  } else if(id === 'svk_kaz') {
    vx = x.game4
    vy = y.game1
  } else if (id === 'svk_slo') {
    vx = x.game6
    vy = y.game1
  } else if (id === 'svk_nor') {
    vx = x.game5
    vy = y.game1
  } else if(id === 'cz_svk') {  // cz
    vx = x.game1
    vy = y.game1
  } else if(id === 'ca_svk') {  // ca
     vx = x.game1
     vy = y.game2
  } else if(id === 'kaz_svk') { 
     vx = x.game1
     vy = y.game4
  }  else if(id === 'lat_svk') {  
     vx = x.game1
     vy = y.game3
  } else if(id === 'swi_svk') {  
     vx = x.game1
     vy = y.game7
  }  else if(id === 'slo_svk') {  
     vx = x.game1
     vy = y.game6
  } else if(id === 'nor_svk') {  
     vx = x.game1
     vy = y.game5
  }  */


 

   



 
useEffect(() => {
  getData()
},[])
 


// UPDATES
 const handleUpdate = async (id) => { 
 
try {
    await axios.put(`/api/team/${id}/slovakia`, {id, paramID} )

    getData()
    
    setDisable(false)
    if(teamX._id === id) toast.success(`${teamX.name} received extra vote !`)
    if(teamY._id === id) toast.success(`${teamY.name} received extra vote !`)

    
    

  } catch (error) {
    console.log(error)
  }  
}   
  


 return (
      <>

        {
          loading ? <div className='text-center mt-5'><Loading type="points" /></div> :
          (
            <>
              <h1 className='text-center mt-5 pt-5'>{teamX?.name} vs {teamY?.name}</h1>
              <h3 className='text-center  my-3'>Vote for your team</h3>

               <div className="currentBox">

                    <div>
                      <div className="imgBox2">
                            <img src={teamX?.img} alt={teamY?.name} />
                      </div>

                      <button 
                            className='btn btn-primary rounded-0 w-100 mt-3 shadow' 
                            disabled={disable}
                            onClick={ () => handleUpdate(teamX?._id)}  >
                            {teamX?.name}
                      </button>
                    </div>

                    <div>
                      <div className="imgBox2">
                            <img src={teamY?.img} alt={teamY?.name} />
                      </div>

                      <button 
                            className='btn btn-primary rounded-0 w-100 mt-3 shadow' 
                            disabled={disable}
                            onClick={ () => handleUpdate(teamY?._id)}  >
                            {teamY?.name}
                      </button>
                    </div>

              </div>

              <div className='percantaPanel'>
                
                    <h5 >
                      { Number(voteX / (voteX + voteY)*100).toFixed(1) }% 
                      <span className='mx-2'>|</span>
                      { voteX } votes
                    </h5>
                    <h5 >
                      { Number(voteY / (voteX + voteY)*100).toFixed(1) }% 
                      <span className='mx-2'>|</span>
                      { voteY } votes
                    </h5>
                    
              </div> 


                <div className='box-percentage'>
                <Chart 
                    type="pie"
                    width={375}
                    height={375}

                    // ABY SA SPRAVNE ZOBRAZOVAL GRAF MUSIA BYT HOSTIA PRVY !!!
                    series={[ voteY, voteX ] }  // domaci , hostia              

                    options={{
                            title:{ text:"Data Visualization"
                            } , 
                          noData:{text:"Empty Data"},                        
                          colors:[ `${teamY?.color}` , `${teamX?.color}`],   //  "#ff0026"               
                          labels: [ `${teamY?.name}` , `${teamX?.name}` ]    // 
                          
                    }}   
                    >           
                    </Chart>
                </div>

                <h2 className='text-center my-5'>Total votes: 
                  <span className='ms-2 border border-dark px-3 py-1 rounded-1'>
                    {voteX + voteY}  
                  </span> 
              </h2> 


            </>
          )
        } 
      
   
       <Link href={'/'}>
         <button className='btn btn-primary vstack mx-auto rounded-0 mb-5 px-5'>
          Back
         </button>
       </Link>

        
       <ToastContainer position='top-center' limit={1} />


       <style>{`
           .percantaPanel {
            position: relative;
            width: 375px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            padding: 0 17px;
           }
           .currentBox {
            position: relative;
            width : 375px;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            padding: 20px 0 ;
            gap: 20px;
           }
         
           .teamBox {
            position: relative;
            width: 40%;
            background: red;
            overflow: hidden;
           }
  
           .imgBox2 {
            position: relative;
            width: 150px;
            height: 100px;
            overflow: hidden;
            border: 1px solid black;
           }
           .imgBox2 img {
            position: relative;
            width: 100%;
            height: 100%;
            object-fit: cover;
           }
         
          .box-charisma {
            position: relative;
            width: 100px;
            margin:0 auto;
          }
          .box-charisma img {
            position: relative;
            width: 100%;
            object-fit: cover;
          }
          .graf {
            position: relative;
            margin: 0 auto;
          }
          .icon {
            position: relative;
            top: -3px;
            margin-right: 5px;
          }
         
          
          .blocked:hover {
            cursor: not-allowed;
          }
         
         .box-percentage {
          position: relative;
          width: 350px;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
         }
       `}</style> 

    </> 
  )
}

export default Index
