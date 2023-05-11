import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema(
  {
    game1: { 
      type: Number,  
    },
    game2: { 
      type: Number,  
    },
    game3: { 
      type: Number,  
    },
    game4: { 
      type: Number,  
    },
    game5: { 
      type: Number,  
    },
    game6: { 
      type: Number,  
    },
    game7: { 
      type: Number,  
    },
    champ: {
      type: Number,
    },
    name: {
      type: String
    }, 
    img: {
      type: String
    },
    color: {
      type: String
    },
    url1: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.models.Team || mongoose.model('Team', TeamSchema);
export default Team