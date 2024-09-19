// 


const express = require('express');
const { getAllMechanics, approveMechanic } = require('../controllers/mechanicController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);
router.get('/', roleMiddleware(['admin']), getAllMechanics);
router.put('/:mechanicId/approve', roleMiddleware(['admin']), approveMechanic);

module.exports = router;
