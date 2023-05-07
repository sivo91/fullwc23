import db from "@/utils/db";
import Team from '@/modules/Team'


const handler = async (req, res) => {
  
  //console.log('req body i', req.body)

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

// ak id = svk_cz tak len dva teams for update 
 p === 'hu_aus' && id === hu ? team.game1 += 1 :
 p === 'hu_aus' && id === aus ? team.game3 += 1 :

 p === 'hu_ger' && id === hu ? team.game2 +=1 :
 p === 'hu_ger' && id === ger ? team.game3 +=1 :

 p === 'hu_den' && id === hu ? team.game3 += 1 :
 p === 'hu_den' && id === den ? team.game3 += 1 :

 p === 'hu_fin' && id === hu ? team.game4 += 1 :
 p === 'hu_fin' && id === fin ? team.game4 += 1 :

 p === 'hu_swe' && id === hu ? team.game5 += 1 :
 p === 'hu_swe' && id === swe ? team.game4 += 1 :

 p === 'hu_fra' && id === hu ? team.game6 += 1 :
 p === 'hu_fra' && id === fra ? team.game4 += 1 :
 
 p === 'hu_usa' && id === hu ? team.game7 += 1 :
 p === 'hu_usa' && id === usa ? team.game5 += 1 : ''

 
 
 


  await team.save()
  console.log('game updateeeed !!!')

  await db.disconnect(); 
  res.status(200).json({ message: 'success '})
};

export default handler