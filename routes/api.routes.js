const { Router } = require('express');
const {
	apisGet,
	apisPost,
	apisPut,
	apisPatch,
	apisDelete,
} = require('../controllers/api.controllers');

const router = Router();

router.get('/', apisGet);
router.post('/', apisPost);
router.put('/', apisPut);
router.patch('/', apisPatch);
router.delete('/', apisDelete);

module.exports = router;
