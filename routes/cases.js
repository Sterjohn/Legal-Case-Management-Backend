const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth');
const Case = require('../models/case');
const Client = require('../models/client');

router.use(authenticateToken);

router.get('/', async (req, res) => {
  const cases = await Case.findAll({ where: { userId: req.user.id } });
  res.json(cases);
});

router.post('/', async (req, res) => {
  const { title, description, status, deadline, clientId } = req.body;
  const client = await Client.findByPk(clientId);
  if (!client || client.userId !== req.user.id) return res.sendStatus(403);

  const newCase = await Case.create({ title, description, status, deadline, clientId, userId: req.user.id });
  res.status(201).json(newCase);
});

router.put('/:id', async (req, res) => {
  const legalCase = await Case.findByPk(req.params.id);
  if (!legalCase || legalCase.userId !== req.user.id) return res.sendStatus(404);

  await legalCase.update(req.body);
  res.json(legalCase);
});

router.delete('/:id', async (req, res) => {
  const legalCase = await Case.findByPk(req.params.id);
  if (!legalCase || legalCase.userId !== req.user.id) return res.sendStatus(404);

  await legalCase.destroy();
  res.json({ message: 'Case deleted' });
});

module.exports = router;
