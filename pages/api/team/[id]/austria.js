import db from "@/utils/db";
import Team from '@/modules/Team'


const handler = async (req, res) => {
  


  const id = req.body.id
  const p = req.body.paramID
 
 console.log(p)
  

  const aus = '6456ec5beb2ee1dbf5698af9'
  const ger =  '6456ec7ceb2ee1dbf5698afb'
  const den =  '6456ec94eb2ee1dbf5698afd'
  const hu = '6456ecabeb2ee1dbf5698aff'
  const fin = '6456ecc1eb2ee1dbf5698b01'
  const swe = '6456ecd3eb2ee1dbf5698b03'
  const fra = '6456eceaeb2ee1dbf5698b05'
  const usa = '6456ecfceb2ee1dbf5698b07'

  await db.connect();


  const team = await Team.findById(id);


 p === 'aus_ger' && id === aus ? team.game1 += 1 :
 p === 'aus_ger' && id === ger ? team.game1 += 1 :

 p === 'aus_den' && id === aus ? team.game2 +=1 :
 p === 'aus_den' && id === den ? team.game1 +=1 :

 p === 'aus_hu' && id === aus ? team.game3 += 1 :
 p === 'aus_hu' && id === hu ? team.game1 += 1 :

 p === 'aus_fin' && id === aus ? team.game4 += 1 :
 p === 'aus_fin' && id === fin ? team.game1 += 1 :

 p === 'aus_swe' && id === aus ? team.game5 += 1 :
 p === 'aus_swe' && id === swe ? team.game1 += 1 :

 p === 'aus_fra' && id === aus ? team.game6 += 1 :
 p === 'aus_fra' && id === fra ? team.game1 += 1 :
 
 p === 'aus_usa' && id === aus ? team.game7 += 1 :
 p === 'aus_usa' && id === usa ? team.game1 += 1 : ''

 
 
 


  await team.save()
  console.log('game updateeeed !!!')

  await db.disconnect(); 
  res.status(200).json({ message: 'success '})
};

export default handler