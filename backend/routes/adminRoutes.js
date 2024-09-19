// const express = require('express');
// const { getReports } = require('../controllers/adminController');
// const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');
// const router = express.Router();

// router.use(authMiddleware);
// router.get('/reports', roleMiddleware(['admin']), getReports);

// module.exports = router;


const express = require('express');
const { getReports } = require('../controllers/adminController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);
router.get('/reports', roleMiddleware(['admin']), getReports);

module.exports = router;
