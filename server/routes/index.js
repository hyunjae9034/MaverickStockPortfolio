const router = require('express').Router();
const controller = require('../controllers');

//Route different requests to different endpoints
// router.get('/search', movieController.getSearch)
// router.get('/genres', movieController.getGenres)
// router.post('/save', movieController.saveMovie)
// router.delete('/delete', movieController.deleteMovie)
// router.get('/favorites', movieController.getMovies)

router.post('/stocks', controller.post);

router.get('/stocks', function(req, res) {
  controller.get((stockData) => {
    res.send(stockData);
    res.end();
  });
})
module.exports = router;