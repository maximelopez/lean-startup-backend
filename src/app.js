import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import familyRoutes from './routes/family.routes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/families', familyRoutes);

app.get('/', (req, res) => res.send('Express app!'));

// Connexion MongoDB
connectDB().catch(error => {
  console.error('❌ Erreur connexion MongoDB :', error);
});

// Pour le dev local uniquement
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
}

export default app;