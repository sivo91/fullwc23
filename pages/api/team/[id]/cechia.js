import db from "@/utils/db";
import Team from '@/modules/Team'


const handler = async (req, res) => {
  
  //console.log('req body i', req.body)

  const id = req.body.id
  const game = req.body.game
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

// ak id = svk_cz tak len dva teams for update 
 p === 'svk_cz' && id === svk ? team.game1 += 1 :
 p === 'svk_cz' && id === cz ? team.game1 += 1 :
 
 

 p === 'cz_svk' && id === cz ? team.game1 += 1 :
 p === 'cz_svk' && id === svk ? team.game1 += 1 :

 p === 'cz_kaz' && id === cz ? team.game4 += 1 :
 p === 'cz_kaz' && id === kaz ? team.game2 += 1 :

 p === 'cz_lat' && id === cz ? team.game3 += 1 :
 p === 'cz_lat' && id === lat ? team.game2 += 1 :

 p === 'cz_slo' && id === cz ? team.game6 += 1 :
 p === 'cz_slo' && id === slo ? team.game2 += 1 :

 p === 'cz_nor' && id === cz ? team.game5 += 1 :
 p === 'cz_nor' && id === nor ? team.game2 += 1 :

 p === 'cz_swi' && id === cz ? team.game7 += 1 :
 p === 'cz_swi' && id === swi ? team.game2 += 1 :

 p === 'cz_ca' && id === cz ? item.game2 += 1 :
 p === 'cz_ca' && id === ca ? item.game2 += 1 :

 

 p === 'ca_nor' && id === ca ? team.game5 += 1 :
 p === 'ca_cz' && id === ca ? team.game2 +=1 :

 p === 'kaz_cz' && id === lat ? team.game2 += 1 :
 p === 'kaz_cz' && id === cz ? team.game4 += 1 :

 

 p === 'lat_cz' && id === lat ? team.game2 += 1 :
 p === 'lat_cz' && id === cz ? team.game3 += 1 :

 p === 'lat_nor' && id === lat ? team.game5 += 1 :
 p === 'lat_nor' && id === nor ? team.game4 += 1 :

 

 p === 'swi_cz' && id === swi ? team.game2 += 1 :
 p === 'swi_cz' && id === cz ? team.game7 += 1 :

 

 p === 'slo_cz' && id === slo ? team.game2 += 1 :
 p === 'slo_cz' && id === cz ? team.game6 += 1 :

 

 p === 'nor_cz' && id === nor ? team.game2 += 1 :
 p === 'nor_cz' && id === cz ? team.game5 += 1 : ''

 
 
 
 


  await team.save()
  console.log('game updateeeed !!!')

  await db.disconnect(); 
  res.status(200).json({ message: 'success '})
};

export default handler