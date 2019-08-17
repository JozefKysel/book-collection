import express from 'express';
import * as bookControllers from './controllers/bookController';

const router = express.Router();

router.get('/books', bookControllers.getAll);
router.post('/save', bookControllers.save);
router.delete('/delete/:id', bookControllers.deleteOne);
router.delete('/delete/all', bookControllers.deleteAll);
router.put('/update', bookControllers.update);

export default router;