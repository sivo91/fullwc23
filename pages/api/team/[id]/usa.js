import db from "@/utils/db";
import Team from '@/modules/Team'


const handler = async (req, res) => {
  

  const id = req.body.id
  const p = req.body.paramID
 

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


 p === 'usa_aus' && id === usa ? team.game1 += 1 :
 p === 'usa_aus' && id === aus ? team.game7 += 1 :

 p === 'usa_ger' && id === usa ? team.game2 +=1 :
 p === 'usa_ger' && id === ger ? team.game7 +=1 :

 p === 'usa_den' && id === usa ? team.game3 += 1 :
 p === 'usa_den' && id === den ? team.game7 += 1 :

 p === 'usa_hu' && id === usa ? team.game4 += 1 :
 p === 'usa_hu' && id === hu ? team.game7 += 1 :

 p === 'usa_fin' && id === usa ? team.game5 += 1 :
 p === 'usa_fin' && id === fin ? team.game7 += 1 :

 p === 'usa_swe' && id === usa ? team.game6 += 1 :
 p === 'usa_swe' && id === swe ? team.game7 += 1 :
 
 p === 'usa_fra' && id === usa ? team.game7 += 1 :
 p === 'usa_fra' && id === fra ? team.game7 += 1 : ''

 
 

  await team.save()

  await db.disconnect(); 
  res.status(200).json({ message: 'success '})
};

export default handler