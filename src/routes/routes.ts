import { Router } from 'express';

import { registerMethod, loginMethod, homePage, registerPage, loginPage, viewMethod, createMethod, viewMethodLogin, methodProfile, updateProfileMethod, deleteProfileMethod, createGuideMethod, guideViewMethod } from '../models/routesDatabase';

import { uploads } from '../controllers/uploadFiles';

const router = Router();

router.get('/', homePage);

router.get('/register', registerPage);

router.get('/login', loginPage);

router.get('/viewGuides', viewMethod);

//router.get('/viewGuides/login', viewMethodLogin);

router.get('/viewGuides/login', uploads.single('image'), guideViewMethod);

router.get('/createGuide', createMethod);

router.get('/profile', methodProfile);

router.post('/registeruser', registerMethod);

router.post('/loginuser', loginMethod);

router.post('/updateProfile', updateProfileMethod);

router.post('/deleteProfile', deleteProfileMethod);

router.post('/insertGuide', uploads.single('image'), createGuideMethod);

export { router };