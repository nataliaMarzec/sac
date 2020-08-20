var {Op} = require('sequelize');
const {Chofer} = require('../models/sequelizeConnection.js')


 
module.exports = {

async create(req, res) {
    const chofer = req.body;

    const { id,nombre,dni } = await Chofer.create(chofer);

    return res.json({
      id,
      nombre,
      dni,
    //   viajando,
    });
  },

  async update(req, res) {
    const chofer = await Chofer.findByPk(req.params.id);

    const { id,nombre,dni } = await Chofer.update(req.body);

    return res.json({
      id,
      nombre,
      dni,
    //   viajando
    });
  },

  async delete(req, res) {
    const ch = await Chofer.findByPk(req.params.id);

    await ch.destroy();

    return res.json({ delete: 'Deleted sucessfull chofer' });
  },

  getChoferes :async(req, res,next) => {
    const choferes =await Chofer.findAll()
    if(![req.body.values]){
    res.status(400).json({ err:'no obtiene lista de choferes' })
    }else{
      return res.status(200).json( choferes)
    }
  }


}

