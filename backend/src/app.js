/**
 * This file exports the express app with all the routes and middlewares.
 * @file src/app.js
 */

import express from 'express';
import cors from 'cors';
import { dbConnect } from './db.js';
import userRoutes from './routes/userRoutes.js';
import fieldRoutes from './routes/fieldRoutes.js';
import amenityRoutes from './routes/amenityRoutes.js';
import fieldAmenityRoutes from './routes/fieldAmenityRoutes.js';
import lfgRoutes from './routes/lfgRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';

export const app = express();
app.use(cors());
app.use(express.json());

dbConnect();

app.use('/api/users', userRoutes);
app.use('/api/fields', fieldRoutes);
app.use('/api/amenities', amenityRoutes);
app.use('/api/field_amenities', fieldAmenityRoutes);
app.use('/api/lfgs', lfgRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/reviews', reviewRoutes);

export default app;
