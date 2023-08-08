import db from "@/utils/db";
import Team from '@/modules/Team'


const handler = async (req, res) => {
  
  const id = req.body.id
  const p = req.body.paramID
 

   const svk = '64d199039527b890e7025c0a'
  const cz =  '64d19a8cec61ecbd9a5996f2'
  const ca =  '64d19acdec61ecbd9a5996fa'
  const lat = '64d19af4ec61ecbd9a5996fc'
  const kaz = '64d19b31ec61ecbd9a599702'
  const nor = '64d19b9cec61ecbd9a599704'
  const slo = '64d19bbeec61ecbd9a599706'
  const swi = '64d19beeec61ecbd9a599708'

  await db.connect();


  const team = await Team.findById(id);


 p === 'lat_ca' && id === lat ? team.game3 += 1 :
 p === 'lat_ca' && id === ca ? team.game3 += 1 :

 p === 'lat_svk' && id === lat ? team.game1 += 1 :
 p === 'lat_svk' && id === svk ? team.game3 += 1 :

 p === 'lat_cz' && id === lat ? team.game2 += 1 :
 p === 'lat_cz' && id === cz ? team.game3 += 1 :

 p === 'lat_nor' && id === lat ? team.game5 += 1 :
 p === 'lat_nor' && id === nor ? team.game4 += 1 :

 p === 'lat_slo' && id === lat ? team.game6 += 1 :
 p === 'lat_slo' && id === slo ? team.game4 += 1 :

 p === 'lat_kaz' && id === lat ? team.game4 += 1 :
 p === 'lat_kaz' && id === kaz ? team.game4 += 1 :

 p === 'lat_swi' && id === swi ? team.game7 +=1 :  
 p === 'lat_swi' && id === swi ? team.game4 +=1 :  ''




  await team.save()
  console.log('game updateeeed !!!')

  await db.disconnect(); 
  res.status(200).json({ message: 'success '})
};

export default handler