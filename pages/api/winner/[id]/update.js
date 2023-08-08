

import db from "@/utils/db";
import Team from '@/modules/Team'


const handler = async (req, res) => {

 const id = req.body.id
 console.log(id)


  await db.connect();
  const team = await Team.findById(id);
  console.log(team)

  team.name === 'Slovakia' ? team.champ += 1 :
  team.name === 'Czech Rep' ? team.champ += 1 : 
  team.name === 'Canada' ? team.champ += 1 :
  team.name === 'Finland' ? team.champ += 1 :
  team.name === 'Sweden' ? team.champ += 1 :
  team.name === 'USA' ? team.champ += 1 :
  team.name === 'Austria' ? team.champ += 1 : 
  team.name === 'Germany' ? team.champ += 1 :
  team.name === 'Denmark' ? team.champ += 1 :
  team.name === 'Hungary' ? team.champ += 1 : 
  team.name === 'France' ? team.champ += 1 :
  team.name === 'Latvia' ? team.champ += 1 :
  team.name === 'Kazakhstan' ? team.champ += 1 :
  team.name === 'Norway' ? team.champ += 1 :
  team.name === 'Slovenia' ? team.champ += 1 :
  team.name === 'Switzerland' ? team.champ += 1 : ' '

  await team.save()
  console.log('game updateeeed !!!')

  await db.disconnect(); 
  res.status(200).json({ message: 'success '})
};

export default handler