const { Receitas } = require('../models');

class ReceitasController {
  async index(req, res) {
    try {
      const users = await Receitas.findAll();

      return res.json(users);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

//   async show(req, res) {
//     try {
//       const user = await User.findByPk(req.params.id);

//       return res.json(user);
//     } catch (err) {
//       return res.status(400).json({ error: err.message });
//     }
//   }

  async store(req, res) {
    try {
      const user = await Receitas.create(req.body);

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const user = await Receitas.findByPk(req.params.id);

      await user.update(req.body);

      return res.json({ user });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const user = await Receitas.findByPk(req.params.id);

      await user.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new ReceitasController();