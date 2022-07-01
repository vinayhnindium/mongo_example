/* eslint-disable new-cap */
const express = require('express');
const schemaIndiumites = require('./models/Indiumites');

const router = express.Router();
/// ///////////////////////////////////////
router.get('/', async (req, res) => {
  try {
    const indiumites = await schemaIndiumites.find();
    res.json(indiumites); // res.json({ users: Indiumites });
  } catch (err) {
    res.send('Error', err);
  }
});
/// //////////////////////////////////////////
router.post('/addIndiumite', async (req, res) => {
  const indiumite = new schemaIndiumites({
    name: req.body.name,
    contact_number: req.body.contact_number,
    desig: req.body.desig,
  });
  try {
    const data = await indiumite.save();
    res.json(data);
  } catch (err) { res.send('Error', err); }
});
/// //////////////////////////////////////////////
router.get('/:id', async (req, res) => {
  try {
    const indiumite = await schemaIndiumites.findById(req.params.id);
    if (indiumite !== null) {
      res.json(indiumite);
    } else { res.status(404).send('indiumite not found'); }
  } catch (err) {
    res.send('Error', err);
  }
});
/// ////////////////////////////////////////////
router.patch('/:id', async (req, res) => {
  try {
    const indiumite = await schemaIndiumites.findById(req.params.id);
    indiumite.desig = req.body.desig;
    const data = await indiumite.save();
    res.json(data);
  } catch (err) { res.send('Error', err); }
});
/// ////////////////////////////////////////
router.delete('/:id', async (req, res) => {
  try {
    const indiumite = await schemaIndiumites.findById(req.params.id);
    const data = await indiumite.remove();
    res.json(data);
  } catch (err) { res.send('Error', err); }
});

module.exports = router;
