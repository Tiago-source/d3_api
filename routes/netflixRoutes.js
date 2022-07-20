const express = require('express');
const router = express.Router();
const netflix = require('../services/netflixService');


router.get('/', async function(req, res, next) {
  try {
    res.json(await netflix.getMultiple(req.query));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});


router.get('/byyear', async function(req, res, next) {
    try {
      res.json(await netflix.getByYear(req.query));
    } catch (err) {
      console.error(`Error while getting data `, err.message);
      next(err);
    }
  });

  router.get('/bytype', async function(req, res, next) {
    try {
      res.json(await netflix.getByType(req.query));
    } catch (err) {
      console.error(`Error while getting data `, err.message);
      next(err);
    }
  });

  router.get('/bycountry', async function(req, res, next) {
    try {
      res.json(await netflix.getByCountry(req.query));
    } catch (err) {
      console.error(`Error while getting data `, err.message);
      next(err);
    }
  });

  router.get('/byrelease', async function(req, res, next) {
    try {
      res.json(await netflix.getByRelease(req.query));
    } catch (err) {
      console.error(`Error while getting data `, err.message);
      next(err);
    }
  });

  router.get('/bycat', async function(req, res, next) {
    try {
      res.json(await netflix.getByCat(req.query));
    } catch (err) {
      console.error(`Error while getting data `, err.message);
      next(err);
    }
  });


module.exports = router;