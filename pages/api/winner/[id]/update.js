

import db from "@/utils/db";
import Team from '@/modules/Team'


const handler = async (req, res) => {

 const id = req.body.id
 console.log(id)


  await db.connect();
  const team = await Team.findById(id);

  team.name === 'Slovakia' ? team.champ += 1 :
  team.name === 'Czech Rep.' ? team.champ += 1 : 
  team.name === 'Canada' ? team.champ += 1 :
  team.name === 'Finland' ? team.champ += 1 :
  team.name === 'Sweden' ? team.champ += 1 :
  team.name === 'USA' ? team.champ += 1 : null

  await team.save()
  console.log('game updateeeed !!!')

  await db.disconnect(); 
  res.status(200).json({ message: 'success '})
};

export default handler