import db from "@/utils/db";
import Team from '@/modules/Team'


const handler = async (req, res) => {
  

  const id = req.body.id
  const p = req.body.paramID
 
  console.log(id, p)

  

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

 p === 'cz_ca' && id === cz ? team.game2 += 1 :
 p === 'cz_ca' && id === ca ? team.game2 += 1 : ''

 


  await team.save()
  console.log('game updateeeed !!!')

  await db.disconnect(); 
  res.status(200).json({ message: 'success '})
};

export default handler