const mongoose=require('mongoose')

const mernSchema=new mongoose.Schema(
    {
      ts:String,
      machine_status:Number,
        vibration:Number
    }
)

const mernModel = mongoose.model('mern',mernSchema );
module.exports=mernModel

