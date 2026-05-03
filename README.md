# Coding Interview Assessment Solution

This repository contains solutions for the four tasks in the coding interview assessment.

## Structure

```
├── A/              # Task A: Mystic Waves
│   └── solution.py
├── B/              # Task B: CargoCraft Fleet
│   └── solution.py
├── C/              # Task C: API Questions
│   └── answers.md
├── frontend/       # Task D: PDP Page
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
└── README.md       # Project overview
```

## Task A: Mystic Waves (Python)

A sequence problem: x, -x, x, -x, ... for n terms.

**Logic:**

- If n is even: sum = 0
- If n is odd: sum = x

**Run:**

```bash
python A/solution.py
```

## Task B: CargoCraft Fleet (Python)

Given n propulsion units (Type A = 4 units, Type B = 6 units).

**Logic:**

- Find minimum ships (use more Type B)
- Find maximum ships (use more Type A)
- Output -1 if impossible

**Run:**

```bash
python B/solution.py
```

## Task C: API Questions (Markdown)

Xero API questions and answers covering:

- Connection verification
- Error handling
- Rate limiting (429 status)

## Task D: Frontend PDP Page (React + TypeScript)

Product Detail Page with:

- Product gallery with thumbnails
- Color and size variant selection
- Quantity control
- Add to cart with feedback
- Loading and error states

**Setup:**

```bash
cd frontend
npm install
npm run dev
