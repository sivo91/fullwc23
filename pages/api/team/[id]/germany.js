import db from "@/utils/db";
import Team from '@/modules/Team'


const handler = async (req, res) => {
  

  const id = req.body.id
  const p = req.body.paramID
 
 console.log(p)
  

   const aus = '64d19c11ec61ecbd9a59970a'
  const ger = '64d19c35ec61ecbd9a59970c'
  const den = '64d19c53ec61ecbd9a59970e'
  const hu = '64d19c91ec61ecbd9a599712'
  const fin = '64d19cb3ec61ecbd9a599714'
  const swe = '64d19cddec61ecbd9a599716'
  const fra = '64d19d14ec61ecbd9a599718'
  const usa = '64d19d2dec61ecbd9a59971a' 

  await db.connect();


  const team = await Team.findById(id);


 p === 'ger_aus' && id === ger ? team.game1 += 1 :
 p === 'ger_aus' && id === aus ? team.game1 += 1 :

 p === 'ger_den' && id === ger ? team.game1 +=1 :
 p === 'ger_den' && id === den ? team.game2 +=1 :

 p === 'ger_hu' && id === ger ? team.game2 += 1 :
 p === 'ger_hu' && id === hu ? team.game2 += 1 :

 p === 'ger_fin' && id === ger ? team.game3 += 1 :
 p === 'ger_fin' && id === fin ? team.game2 += 1 :

 p === 'ger_swe' && id === ger ? team.game5 += 1 :
 p === 'ger_swe' && id === swe ? team.game2 += 1 :

 p === 'ger_fra' && id === ger ? team.game6 += 1 :
 p === 'ger_fra' && id === fra ? team.game2 += 1 :
 
 p === 'ger_usa' && id === ger ? team.game7 += 1 :
 p === 'ger_usa' && id === usa ? team.game2 += 1 : ''

 

  await team.save()
  console.log('game updateeeed !!!')

  await db.disconnect(); 
  res.status(200).json({ message: 'success '})
};

export default handler