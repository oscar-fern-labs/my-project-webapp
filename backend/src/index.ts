import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Example CRUD for a 'Item' model
app.get('/api/items', async (_req, res) => {
  const items = await prisma.item.findMany();
  res.json(items);
});

app.post('/api/items', async (req, res) => {
  const { name, description } = req.body;
  const item = await prisma.item.create({ data: { name, description } });
  res.json(item);
});

app.put('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const item = await prisma.item.update({
    where: { id: Number(id) },
    data: { name, description },
  });
  res.json(item);
});

app.delete('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.item.delete({ where: { id: Number(id) } });
  res.json({});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
