import db from "@/utils/db";
import Team from '@/modules/Team'


const handler = async (req, res) => {
  

  const id = req.body.id
  const p = req.body.paramID
 

  const svk = '6452b3a7074a854ed44fd8bf'
  const cz =  '6452c8a2074a854ed44fd9f9'
  const ca =  '6452cac5074a854ed44fda03'
  const lat = '6452d97e2afc22ab614e05d2'
  const kaz = '6452d9922afc22ab614e05d4'
  const nor = '6452d9a52afc22ab614e05d6'
  const slo = '6452d9b22afc22ab614e05d8'
  const swi = '6452d9c82afc22ab614e05da'

  await db.connect();


  const team = await Team.findById(id);

 
 p === 'swi_slo' && id === swi ? team.game1 += 1 :
 p === 'swi_slo' && id === slo ? team.game7 += 1 :

 p === 'swi_nor' && id === swi ? team.game6 += 1 :
 p === 'swi_nor' && id === nor ? team.game7 += 1 :

 p === 'swi_kaz' && id === swi ? team.game5 += 1 :
 p === 'swi_kaz' && id === kaz ? team.game7 += 1 :

 p === 'swi_svk' && id === swi ? team.game1 += 1 :
 p === 'swi_svk' && id === svk ? team.game7 += 1 :

 p === 'swi_ca' && id === swi ? team.game3 += 1 :
 p === 'swi_ca' && id === ca ? team.game7 += 1 :

 p === 'swi_cz' && id === swi ? team.game2 += 1 :
 p === 'swi_cz' && id === cz ? team.game7 += 1 :

 p === 'swi_lat' && id === swi ? team.game4 +=1 :  
 p === 'swi_lat' && id === lat ? team.game7 +=1 :  ''



  await team.save()
  console.log('game updateeeed !!!')

  await db.disconnect(); 
  res.status(200).json({ message: 'success '})
};

export default handler