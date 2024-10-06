// backend/src/app.ts
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Project Management API' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;