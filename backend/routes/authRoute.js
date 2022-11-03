const router = require("express").Router();
const {registerClient,VerifyUser,loginClient,dashboard}= require('../controllers/authController')
const {protect} = require('../Middlewares/authMiddleware')

router.post('/register', registerClient)
router.get("/confirm/:confirmationCode",VerifyUser)
router.post('/login', loginClient)
router.get('/dashboard',protect,dashboard)
router.post('/forgetpassword')
router.post('/resetpassword/:token')










module.exports = router