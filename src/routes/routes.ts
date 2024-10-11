import { Router } from 'express';

import { registerMethod, loginMethod, homePage, registerPage, loginPage, viewMethod, createMethod, viewMethodLogin, methodProfile, updateProfileMethod, deleteProfileMethod, createGuideMethod, guideViewMethod, guideUpdateGet, guideUpdatePost, deleteShittyGuide, createCommentaryGet, createCommentaryPost } from '../models/routesDatabase';

import { uploads } from '../controllers/uploadFiles';

const router = Router();

router.get('/', homePage);

router.get('/register', registerPage);

router.get('/login', loginPage);

router.get('/viewGuides', viewMethod);

router.get('/viewGuides/login', uploads.single('image'), guideViewMethod);

router.get('/createGuide', createMethod);

router.get('/profile', methodProfile);

router.get('/createComment/:id', createCommentaryGet)

router.get('/editGuide/:id', guideUpdateGet);

router.post('/registeruser', registerMethod);

router.post('/loginuser', loginMethod);

router.post('/updateProfile', updateProfileMethod);

router.post('/deleteProfile', deleteProfileMethod);

router.post('/insertGuide', uploads.single('image'), createGuideMethod);

router.post('/deleteGuide', deleteShittyGuide);

router.post('/editGuide/:id', uploads.single('image'), guideUpdatePost);

router.post('', createCommentaryPost);

export { router };