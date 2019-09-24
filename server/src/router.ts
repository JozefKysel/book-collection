import express from 'express';
import * as bookControllers from './controllers/bookController';

const router = express.Router();

router.get('/books', bookControllers.getAll);
router.get('/search', bookControllers.search);
router.post('/save', bookControllers.save);
router.delete('/delete/one', bookControllers.deleteOne);
router.delete('/delete/all', bookControllers.deleteAll);
router.put('/update', bookControllers.update);

export default router;