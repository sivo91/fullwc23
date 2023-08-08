
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import Link from 'next/link';


const CreateNew = () => {

 const [champ, setChamp] = useState(0)
 const [game1, setGame1] = useState(0)
 const [game2, setGame2] = useState(0)
 const [game3, setGame3] = useState(0)
 const [game4, setGame4] = useState(0)
 const [game5, setGame5] = useState(0)
 const [game6, setGame6] = useState(0)
 const [game7, setGame7] = useState(0)
 const [name, setName] = useState('')
 const [img, setImg] = useState('')
 const [color, setColor] = useState('')
 const [url1, setUrl1] = useState('')
 const [x, setX] = useState([])
 const [loading, setLoading] = useState(false)
 const [err, setErr] = useState(null)

 const data = {
  name, game1, game2,game3, game4, game5, game6, game7, img, color, url1,champ
}




useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axios.get('/api/getTeam/data');
      const data = res.data;
      setX(data);
      
    } catch (error) {
      console.log(error);
      setErr(error)
    } finally {
      setLoading(false)
      
    }
  }

   fetchData();
}, []); 





  // CREATE ITEM
const handleCreate = async (e) => {
  e.preventDefault()

    try {
     await axios.post('/api/createTeam', data)
     alert('added')
     console.log('addid')

     setName('')
     setGame1(0)
     setGame2(0)
     setGame3(0)
     setGame4(0)
     setGame5(0)
     setGame6(0)
     setGame7(0)
     setColor('')
     setUrl1('')  // /slovakia/slovakia
     setImg('')
     setChamp(0)

     fetchTeam()
  
   } catch (error) {
    toast.error('Ops, something wrong !!')
    console.log(error)
   }  

}



  return (
   <>
 
    <h1 className='text-center my-5 pt-5'>Create Team for IIHF 2023</h1>
     
     <div className="row">
      <div className="col-12 col-md-6">
         <div className="createdTeams">


           { 
             loading ? 
             <p className='text-center'>Loading</p> : 
                     !err  ? 
                     
                     <div className='fetchTeams'>
                      { 
                      x.map(item => (
                      <div className="createdTeamOne" key={item.name}>
                        <div className="createdBox">
                          <img src={item.img} alt={item.name} />
                        </div>
                        <h3 className='text-center'>{item.name}</h3>
                      </div>
                      ))
                      } 
                     </div> : null
                       
                    }   

       
      
         </div>
      </div>

      <div className="col-12 col-md-6">
         <div className='forms' > 
           <form onSubmit={handleCreate} className='px-3 mb-3'>
        
        <input type="text"
                placeholder='Team'
                value={name}
                className='mt-2'
                onChange={e => setName(e.target.value)} />

        <input type="text"
                placeholder='path  /slovakia/slovakia'
                value={url1}
                className='mt-2'
                onChange={e => setUrl1(e.target.value)} />

        <input type="text"
                placeholder='color  HEX #3ad7f0'
                value={color}
                className='mt-2'
                onChange={e => setColor(e.target.value)} />

         <input type="number"
                placeholder='champ | voting for winner'
                className='my-2'
                value={champ}
                onChange={e => setChamp(e.target.value)} />

         <input type="number"
                placeholder='game1'
                className='my-2'
                value={game1}
                onChange={e => setGame1(e.target.value)} />

         <input type="number"
                placeholder='game2'
                className='my-2'
                value={game2}
                onChange={e => setGame2(e.target.value)} />

         <input type="number"
                placeholder='game3'
                className='my-2'
                value={game3}
                onChange={e => setGame3(e.target.value)} />

         <input type="number"
                placeholder='game4'
                className='my-2'
                value={game4}
                onChange={e => setGame4(e.target.value)} />

         <input type="number"
                placeholder='game5'
                className='my-2'
                value={game5}
                onChange={e => setGame5(e.target.value)} />

         <input type="number"
                placeholder='game6'
                className='my-2'
                value={game6}
                onChange={e => setGame6(e.target.value)} />

         <input type="number"
                placeholder='game7'
                className='my-2'
                value={game7}
                onChange={e => setGame7(e.target.value)} />


         <input type="text"
                placeholder='Format = /img.png'
                value={img}
                onChange={e => setImg(e.target.value)} />
      
         <button type='submit'
                 disabled={name === ''}
                 className='btn btn-primary
                  my-3 rounded-0'>
           Add New 
         </button>       

          </form>
         </div>
      </div>

     </div>

    
     <Link href={'/'}>
       <button className='btn btn-primary rounded-1 
                         vstack mx-auto my-5'>
        Back
      </button>
      </Link>
     


      <style jsx>{`
      .fetchTeams {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .createdTeamOne {
        .position: relative;
        width: 100px;
        margin: 20px 30px;
        height: 80px;
      }
      .createdBox {
        position: relative;
        width: 100%;
        height: 80%;
        overflow: hidden;
      }
      .createdBox img {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    
        
        form {
          position: relative;
          width: 400px;
          border: 1px solid black;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          
        }
      `}</style>
   </>
  )
}

export default CreateNew