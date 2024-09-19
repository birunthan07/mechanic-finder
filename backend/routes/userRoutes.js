// const express = require('express');
// const { getAllUsers, updateUser, deactivateUser } = require('../controllers/userController');
// const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');
// const router = express.Router();

// router.use(authMiddleware);
// router.get('/', roleMiddleware(['admin']), getAllUsers);
// router.put('/:userId', roleMiddleware(['admin']), updateUser);
// router.delete('/:userId', roleMiddleware(['admin']), deactivateUser);

// module.exports = router;


const express = require('express');
const { getAllUsers, updateUser, deactivateUser } = require('../controllers/userController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);
router.get('/', roleMiddleware(['admin']), getAllUsers);
router.put('/:userId', roleMiddleware(['admin']), updateUser);
router.delete('/:userId', roleMiddleware(['admin']), deactivateUser);

module.exports = router;
