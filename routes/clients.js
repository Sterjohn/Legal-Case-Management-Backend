const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth');
const Client = require('../models/client');

router.use(authenticateToken);

router.get('/', async (req, res) => {
  const clients = await Client.findAll({ where: { userId: req.user.id } });
  res.json(clients);
});

router.post('/', async (req, res) => {
  const { name, email, phone, notes } = req.body;
  const client = await Client.create({ name, email, phone, notes, userId: req.user.id });
  res.status(201).json(client);
});

router.put('/:id', async (req, res) => {
  const client = await Client.findByPk(req.params.id);
  if (!client || client.userId !== req.user.id) return res.sendStatus(404);

  await client.update(req.body);
  res.json(client);
});

router.delete('/:id', async (req, res) => {
  const client = await Client.findByPk(req.params.id);
  if (!client || client.userId !== req.user.id) return res.sendStatus(404);

  await client.destroy();
  res.json({ message: 'Client deleted' });
});

module.exports = router;
