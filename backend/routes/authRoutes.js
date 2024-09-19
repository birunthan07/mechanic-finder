// // // const express = require('express');
// // // const { signup, login } = require('../controllers/authController');
// // // const router = express.Router();

// // // router.post('/signup', signup);
// // // router.post('/login', login);

// // // module.exports = router;


// // // Example for your backend route file (authRoutes.js or similar)
// // const express = require('express');
// // const router = express.Router();
// // const { registerController, loginController, getUserController } = require('../controllers/authController');
// // const authController = require('../controllers/authController');
// // const authMiddleware = require('../middleware/authMiddleware');
// // // Registration route
// // router.post('/signup', registerController);

// // // Login route
// // router.post('/login', loginController);

// // // Get user data route (for fetching user role)
// // // router.get('/user', authenticateToken, getUserController);
// // router.get('/user', authMiddleware, authController.getUserData);
// // module.exports = router;


// const express = require('express');
// const { signup, login, getUserData } = require('../controllers/authController');
// const { authMiddleware } = require('../middleware/authMiddleware');
// const router = express.Router();

// router.post('/auth/signup', signup);
// router.post('/auth/login', login);
// router.get('/user', authMiddleware, getUserData);

// module.exports = router;


const express = require('express');
const { signup, login, getUserData } = require('../controllers/authController'); // Ensure the path is correct
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/auth/signup', signup);
router.post('/auth/login', login);
router.get('/user', authMiddleware, getUserData);

module.exports = router;