const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;

const app = express();
app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'data.json');

async function ensureDataFile() {
	try {
		await fs.mkdir(DATA_DIR, { recursive: true });
		await fs.access(DATA_FILE);
	} catch (e) {
		// create default file if missing
		const initial = { leads: [], tasks: [] };
		await fs.writeFile(DATA_FILE, JSON.stringify(initial, null, 2), 'utf8');
	}
}

async function readData() {
	await ensureDataFile();
	const raw = await fs.readFile(DATA_FILE, 'utf8');
	return JSON.parse(raw);
}

async function writeData(data) {
	await ensureDataFile();
	await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// Simple API stubs (safe, file-backed storage for leads and tasks)
app.get('/api/auth/me', (req, res) => res.json({ user: null }));
app.get('/api/apps', (req, res) => res.json([{ id: 1, name: 'NexusCRM Demo App' }]));
app.post('/api/billing/checkout', (req, res) => res.json({ ok: true }));
app.post('/api/billing/webhook', (req, res) => res.status(200).send('ok'));

// Leads
app.get('/api/leads', async (req, res) => {
	const data = await readData();
	res.json(data.leads || []);
});

app.post('/api/leads', async (req, res) => {
	const data = await readData();
	const leads = data.leads || [];
	const id = leads.reduce((m, l) => Math.max(m, l.id || 0), 0) + 1;
	const lead = Object.assign({ id }, req.body);
	leads.push(lead);
	data.leads = leads;
	await writeData(data);
	res.status(201).json(lead);
});

app.put('/api/leads/:id', async (req, res) => {
	const id = Number(req.params.id);
	const data = await readData();
	const leads = data.leads || [];
	const idx = leads.findIndex(l => Number(l.id) === id);
	if (idx === -1) return res.status(404).json({ error: 'Not found' });
	leads[idx] = Object.assign({}, leads[idx], req.body);
	data.leads = leads;
	await writeData(data);
	res.json(leads[idx]);
});

app.delete('/api/leads/:id', async (req, res) => {
	const id = Number(req.params.id);
	const data = await readData();
	data.leads = (data.leads || []).filter(l => Number(l.id) !== id);
	await writeData(data);
	res.status(204).send();
});

// Tasks
app.get('/api/tasks', async (req, res) => {
	const data = await readData();
	res.json(data.tasks || []);
});

app.post('/api/tasks', async (req, res) => {
	const data = await readData();
	const tasks = data.tasks || [];
	const id = tasks.reduce((m, t) => Math.max(m, t.id || 0), 0) + 1;
	const task = Object.assign({ id }, req.body);
	tasks.push(task);
	data.tasks = tasks;
	await writeData(data);
	res.status(201).json(task);
});

app.put('/api/tasks/:id', async (req, res) => {
	const id = Number(req.params.id);
	const data = await readData();
	const tasks = data.tasks || [];
	const idx = tasks.findIndex(t => Number(t.id) === id);
	if (idx === -1) return res.status(404).json({ error: 'Not found' });
	tasks[idx] = Object.assign({}, tasks[idx], req.body);
	data.tasks = tasks;
	await writeData(data);
	res.json(tasks[idx]);
});

app.delete('/api/tasks/:id', async (req, res) => {
	const id = Number(req.params.id);
	const data = await readData();
	data.tasks = (data.tasks || []).filter(t => Number(t.id) !== id);
	await writeData(data);
	res.status(204).send();
});

// Serve static files from repo root so the prototype HTML is accessible
app.use(express.static(path.join(__dirname)));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

module.exports = app;
