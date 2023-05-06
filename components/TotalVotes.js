import React, { useState, useEffect } from 'react'

const TotalVotes = () => {

  const [total, setTotal] = useState(0)


async function getData () {

 const x = []

  try {
   setLoading(true)

    const res = await fetch ('/api/getTeam/data', { cache: "no-cache" } ) // great
    const data = await res.json()
    
    x.push(data)
    
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
    <div>TotalVotes</div>
  )
}

export default TotalVotes