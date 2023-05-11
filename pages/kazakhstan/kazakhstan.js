/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */



import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect} from 'react';
import data from '@/utils/teams';
//import groups from '@/utils/groups'




const Team = () => {

const router = useRouter()
//const  {id} = router.query

const path = router.pathname;


useEffect(() => {
},[path]) 


  const showTeam = (data) => {
    return (
      data.map((item, i) => {
              
          return (
            <>
         
            <Link href={`/kazakhstan/${item.even}`} key={item._id} 
                  style={{ textDecoration: 'none', color: 'black' }}>
              <div className="card" key={item.even}>
              <h6 className='text-center text-light mt-2'>{item.date}</h6>
              <h6 className='text-center text-light mb-2'>{item.day}</h6>

              <div className='section'>

                  <div className='imgBox'>
                    <img src={item.team1Img} alt="svkImg" />
                  </div>

                  <p className='vCharacter'>vs</p>

                  <div className='imgBox'>
                    <img src={item.teamImg} alt={item.teamImg} />
                  </div>

              </div>
              
              <div className="taems">
                <p className='text-light'>{item.team1}</p>
                <p className='text-light'>{item.team}</p>
              </div>

              <h5 className='text-center text-light'>{item.place}</h5>

            </div>
            </Link>

            
            </>
          )
        })
               
    )
  }

 const findPath = () => {

    const TeamName = ['Slovakia', 'Czech Rep.', 'Canada', 'Kazakhstan', 'Latvia', 'Switzerland',
                    'Slovenia', 'Norway'
                    ]
 
    let output = ''

    if(path === '/slovakia/slovakia') {
        output = ''
        output = TeamName[0]
    } else if (path === '/cechia/cechia') {
       output = ''
       output = TeamName[1]
    } else if (path === '/canada/canda') {
       output = ''
       output = TeamName[2]
    } else if (path === '/kazakhstan/kazakhstan') {
       output = ''
       output = TeamName[3]
    } else if (path === '/latvia/latvia' ) {
       output = ''
       output = TeamName[4]
    } else if (path === '/switzerland/switzerland') {
       output = ''
       output = TeamName[5]
    } else if (path === '/slovenia/slovenia') {
       output = ''
       output = TeamName[6]
    } else if (path === '/norway/norway') {
       output = ''
       output = TeamName.length - 1
    }

    return <h2 className='text-center mb-2'>Team {output}</h2>
  } 

     
  

  return (
    <>
    
    <div className="arena">
      <h2 className='text-center'>Hockey Championship 2023</h2>
      <h3 className='text-center mb-1'>Group B</h3>
      
          

      { findPath() }


      <div className="mantinel">
        { path === '/kazakhstan/kazakhstan' && showTeam(data.kaz) } 
      </div>

      <Link href={'/'}>
       <button className='btn btn-primary rounded-1 
                         vstack mx-auto my-5'>
        Back
      </button>
      </Link>
 
    </div>


     <style>{`
      .vCharacter {
        position: relative;
        top: 22px;
        color: white;
      }
      .taems {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-around;
      }
      .section {
        position: relative;
        display: flex;
        justify-content: space-evenly;
      }
      .imgBox {
        position: relative;
        width: 100px;
        height: 67px;
        overflow: hidden;
        background: black;
        border-radius: 6px;
      }
      .imgBox img {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .card {
        position: relative;
        width: 300px;
        height: 200px;
        background-image: linear-gradient(to bottom right, #2a346e, #3f5d8c);
      }
      .card:hover {
        box-shadow: inset .0em .0em .7em 5px #0a1a36;
      }
        .arena {
          position: relative;
          width: 100%;
           margin-top: 100px;
           margin-bottom: 60px;
        }
      
        .mantinel {
          position: relative;
          max-width: 1000px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 22px;
          margin: 0 auto;
        } 
       
      `}</style>

    </>
  )
}

export default Team