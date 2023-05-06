import axios from "axios"

export default async function getAllTeams () {
  const res = await axios.get('/api/getTeam/data')
  if(!res.ok) throw new Error('failed')

  return res.data
}