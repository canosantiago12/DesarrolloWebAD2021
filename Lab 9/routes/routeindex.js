const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const Entry = require('../model/Entry');
//const Task = require('../model/task');

router.get('/', async function(req,res){
  const entries = await Entry.find();
  res.render('index', {entries});
});

router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

router.post('/newPost', async (req, res) => {
  const newEntry = new Entry(req.body);
  await newEntry.save();
  res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
  const entry = await Entry.findById(req.params.id);
  res.render('delete', {entry});
});

router.post('/delete/:id', async (req, res) => {
  await Entry.remove({ _id: req.params.id });
  res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
  const entry = await Entry.findById(req.params.id);
  res.render('edit', {entry});
});

router.post('/edit/:id', async (req, res) => {
  await Entry.updateOne({_id: req.params.id}, req.body);
  res.redirect('/');
});

module.exports = router;