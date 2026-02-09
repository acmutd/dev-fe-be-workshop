# ACM FE + BE Workshop (React + FastAPI)

A 1-hour code-along that teaches how a React frontend fetches JSON from a Python FastAPI backend and renders it as a simple, customizable dashboard.

## What you’ll learn
- Frontend vs backend: request → JSON → UI.
- How to run two dev servers locally (one for React, one for FastAPI). 
- How to change the backend “contract” and update the UI to match.

---

## Repo structure
Vite React app lives at the repo root, FastAPI lives in `/api`. 

```
├── api/                 # FastAPI backend
│   ├── main.py
│   └── requirements.txt
├── src/                 # React source
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## Prerequisites (local)
Install:
- Git: https://git-scm.com/install/
- Node.js + npm (LTS): https://nodejs.org/en/download
- Python: https://www.python.org/downloads/ 
- VS Code: https://code.visualstudio.com/download

Verify in a terminal:
```bash
git --version
node -v
npm -v
python --version   # or python3 --version on macOS/Linux
```

Optional (recommended) VS Code extension:
- Python by Microsoft (`ms-python.python`)

---

## Quick start

### 1) Clone
```bash
git clone <YOUR_REPO_URL>
cd acm-fe-be-workshop
```

### 2) Frontend install (repo root)
```bash
npm install
```

### 3) Backend install (in /api)
We recommend a virtual environment so installs don’t mess with global Python.

```bash
cd api
python -m venv .venv

# macOS/Linux:
source .venv/bin/activate
# Windows PowerShell:
# .\.venv\Scripts\Activate.ps1

python -m pip install -r requirements.txt
cd ..
```

---

## Run (two terminal tabs)

### Terminal tab 1: backend (FastAPI)
```bash
cd api
uvicorn main:app --reload --port 8000
```
`--reload` auto-restarts the server when you save code changes. 

Open:
- API JSON: http://localhost:8000/api/status
- API docs (optional): http://localhost:8000/docs 

### Terminal tab 2: frontend (React + Vite)
From repo root:
```bash
npm run dev
```

Open:
- Frontend: http://localhost:5173 

---

## Workshop tasks (code-along)

### Task 0: See the “contract”
Open the backend endpoint in your browser:
- http://localhost:8000/api/status

That JSON is what your frontend displays.

### Task 1: Backend edit (add a widget)
Edit: `api/main.py`
- Add a new item to the `widgets` list in the JSON response.
- Save → refresh the frontend → the new card should appear.

### Task 2: Frontend edit (render it)
Edit: `src/App.jsx`
- Add `loading` state
- Add `error` state
- Add a “Refresh” button that re-fetches `/api/status`

### Task 3: Customization (make it yours)
Edit: `src/config.js` (or whatever config file we provide)
- Change the dashboard title
- Change theme/accent color
- Reorder/hide widgets

Goal: everyone leaves with a dashboard that looks different.

---

## Troubleshooting

### “python not found”
Try:
- `python3 --version` (macOS/Linux)
- `py --version` (Windows)

### “Port already in use”
Change the backend port:
```bash
uvicorn main:app --reload --port 8001
```

If you change backend port, update `vite.config.js` proxy target to match

### Frontend can’t fetch `/api/status`
- Confirm backend is running on the expected port.
- Confirm Vite proxy is set (`server.proxy`). 
- If you skipped proxy, enable FastAPI CORS middleware. 