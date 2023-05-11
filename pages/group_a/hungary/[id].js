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
import { GiHockey } from "react-icons/gi";
//import { useTeamsCountext } from '../context/teams_context'


import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false }); 



const Index = () => {

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
   // console.log(mongo)

                    if(id === 'hu_den') {    // Hungary    
            x.push(mongo[11])
            x.push(mongo[10])
            vx = mongo[11].game3
            vy = mongo[10].game3 
          } else if (id === 'hu_usa') {
            x.push(mongo[11])
            x.push(mongo[15])
            vx = mongo[11].game7
            vy = mongo[15].game4
          }  else if (id === 'hu_fra') {
            x.push(mongo[11])
            x.push(mongo[14])
            vx = mongo[11].game6
            vy = mongo[14].game4
          } else if (id === 'hu_swe') {
            x.push(mongo[11])
            x.push(mongo[13])
            vx = mongo[11].game5
            vy = mongo[13].game4
          } else if (id === 'hu_fin') {
            x.push(mongo[11])
            x.push(mongo[12])
            vx = mongo[11].game4
            vy = mongo[12].game4
          } else if (id === 'hu_ger') {
            x.push(mongo[11])
            x.push(mongo[9])
            vx = mongo[11].game2
            vy = mongo[9].game3
          } else if (id === 'hu_aus') {
            x.push(mongo[11])
            x.push(mongo[8])
            vx = mongo[11].game1
            vy = mongo[8].game3
          }  
     

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

 
useEffect(() => {
  getData()
},[])
 


// UPDATES
 const handleUpdate = async (id) => { 
 
try {
    await axios.put(`/api/team/${id}/hungary`, {id, paramID} )

    getData()
    
    setDisable(true)
    if(teamX._id === id) toast.success(`${teamX.name} received extra vote !`)
    if(teamY._id === id) toast.success(`${teamY.name} received extra vote !`)

    
    

  } catch (error) {
    console.log(error)
  }  
}   
  


 return (
      <>

        {
          loading ? <p className='loadingIcon text-center'><GiHockey /></p> :
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
      
   
       <Link href={'/group_a/hungary/hungary'}>
         <button className='btn btn-primary vstack mx-auto rounded-0 mb-5 px-5'>
          Back
         </button>
       </Link>

        
       <ToastContainer position='bottom-center' limit={1} />


       <style>{`
           .loadingIcon {
        position: relative;
        margin-top: 200px;
        margin-bottom: 300px;
        font-size: 200px;
      }
        
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
