// /src/app.js (or /src/server.js)
import express from "express";
import cors from "cors";
import { dbConnect } from "./db.js";
import userRoutes from './routes/userRoutes.js';
import lfgRoutes from './routes/lfgRoutes.js';
import fieldRoutes from './routes/fieldRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import amenityRoutes from './routes/amenityRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';  // Import review routes
// import paymentRoutes from './routes/paymentRoutes.js';  // If you need payment related routes

export const app = express();
app.use(cors());
app.use(express.json());

dbConnect();  // Connect to the database

// Define your routes here
app.use('/api/users', userRoutes);      // Routes for users
app.use('/api/lfgs', lfgRoutes);      // Routes for LFGs
app.use('/api/fields', fieldRoutes);     // Routes for fields
app.use('/api/bookings', bookingRoutes);   // Routes for bookings
app.use('/api/amenities', amenityRoutes);   // Routes for amenities
app.use('/api/reviews', reviewRoutes);   // Routes for reviews
// app.use('/api/payments', paymentRoutes);   // Routes for payments (if applicable)

export default app;
