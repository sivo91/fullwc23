import db from "@/utils/db";
import Team from '@/modules/Team'


const Handler = async (req, res) => {

  

  try {
    await db.connect();
    const team = await Team.find({})
    res.status(200).send(team);
  await db.disconnect();
  } catch (error) {
    console.log(error)
    res.status(400).sent({ error, msg: "something went wrong!"})
  }
  
  
};

export default Handler