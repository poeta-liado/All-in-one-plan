# All-in-One-Plan Framework - Complete Project Documentation

**Repository**: poeta-liado/All-in-one-plan  
**Language Composition**: HTML (94.9%), JavaScript (4.5%), Shell (0.6%)  
**Description**: Framework  
**Generated**: June 5, 2026

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Installation & Running](#installation--running)
3. [Project Structure](#project-structure)
4. [Core Files](#core-files)
5. [Marketing Strategy](#marketing-strategy)
6. [Configuration Files](#configuration-files)

---

## Project Overview

**NexusCRM** — AI Risk Intelligence Platform

This is a comprehensive framework for a CRM system with AI-powered risk assessment capabilities. The project includes:

- Express.js backend with file-based API storage
- Interactive HTML5 frontend dashboard
- AI risk scoring engine
- Sales pipeline management (Kanban board)
- Lead tracking and management
- Invoice and ticket management
- Real-time activity feeds

---

## Installation & Running

### Quick Start

```bash
cd /workspaces/All-in-one-plan
npm install
npm start
```

### Access the Application

- Main CRM: `http://localhost:3000/nexuscrm%20(2).html`
- Alternative entry: `http://localhost:3000/nexuscrm.html` (redirects to main)

### Notes

- Uses Express.js for static file serving and API endpoints
- Simple file-based data storage (JSON) in `/data` directory
- No database or Prisma configuration included
- CORS enabled for cross-origin requests
- Default port: 3000 (configurable via `PORT` environment variable)

---

## Project Structure

```
All-in-one-plan/
├── server.js                          # Express.js backend server
├── package.json                       # Node.js dependencies
├── package-lock.json                  # Dependency lock file
├── .gitignore                         # Git ignore rules
├── .agent.md                          # Copilot agent configuration
├── AGENTS.md                          # Available agents documentation
├── README.md                          # Project readme
├── README_RUN.md                      # How to run the project
├── MARKETING_SKILL.md                 # Marketing strategy guide
├── cleanup.sh                         # Git cleanup script
├── nexuscrm.html                      # Redirect page
├── nexuscrm (2).html                  # Main CRM application (76KB)
├── data/                              # Data storage directory
├── node_modules/                      # npm dependencies
├── .vscode/                           # VS Code settings
├── .github/                           # GitHub configuration
└── FIRST USERS/                       # First users directory
```

---

## Core Files

### 1. server.js - Express Backend

**Purpose**: Provides REST API endpoints and serves static files

**Key Features**:
- File-based data storage in JSON format
- RESTful API for Leads management
  - `GET /api/leads` - Retrieve all leads
  - `POST /api/leads` - Create new lead
  - `PUT /api/leads/:id` - Update lead
  - `DELETE /api/leads/:id` - Delete lead
- Task management endpoints
  - `GET /api/tasks` - Retrieve all tasks
  - `POST /api/tasks` - Create new task
  - `PUT /api/tasks/:id` - Update task
  - `DELETE /api/tasks/:id` - Delete task
- Billing endpoints (stub)
  - `POST /api/billing/checkout`
  - `POST /api/billing/webhook`
- Authentication endpoint (stub)
  - `GET /api/auth/me`
- Apps endpoint
  - `GET /api/apps`

**Data Structure**:
```json
{
  "leads": [
    {
      "id": 1,
      "name": "...",
      "email": "...",
      "company": "...",
      "industry": "...",
      "value": 0
    }
  ],
  "tasks": [
    {
      "id": 1,
      "title": "...",
      "status": "..."
    }
  ]
}
```

### 2. nexuscrm (2).html - Main CRM Application

**Purpose**: Interactive SPA (Single Page Application) dashboard

**Key Sections**:

#### Sidebar Navigation
- **Overview**: Dashboard
- **Sales**: Leads, Pipeline, Tasks
- **Intelligence**: AI Risk Engine
- **Finance**: Invoices
- **Support**: Tickets
- **Analytics**: Reports
- **Settings**: Configuration

#### Pages/Views

**Dashboard**
- Key metrics (Total Revenue, Active Leads, Pipeline Value, Avg Risk Score)
- Revenue trend chart (8-month history)
- Conversion funnel visualization
- Recent leads table with AI risk scores
- Activity feed

**Leads Management**
- Full leads table with columns:
  - Lead name
  - Industry
  - Company
  - Deal value
  - Status (New, Contacted, Qualified, Proposal, Won, Lost)
  - AI Risk score
  - Actions (Edit, Score, Delete)
- Search functionality
- Filter by status
- Filter by industry
- Modal dialog for adding/editing leads

**Pipeline (Kanban Board)**
- Drag-and-drop columns:
  - New
  - Contacted
  - Qualified
  - Proposal
  - Won
  - Lost
- Card display for each deal
- Total pipeline value calculation

**AI Risk Engine**
- Industry sector selector
- Deal value input
- Contract duration selector
- Risk analysis button
- Gauge visualization (0-100 scale)
- Risk level indicator (Low, Medium, High, Critical)
- Risk factors breakdown
- AI narrative explanation
- Recommended actions

**Tasks**
- Task list with checkboxes
- Priority levels (High, Medium, Low)
- Due date tracking
- Status indicators

**Invoices**
- Invoice management
- Payment status tracking

**Tickets**
- Support ticket tracking
- Ticket status management

**Reports**
- Analytics and reporting dashboard
- Performance metrics
- Leaderboard visualization

#### Key Features

1. **Responsive Design**
   - Sidebar navigation (220px width)
   - Flexible main content area
   - Mobile-friendly CSS

2. **UI Components**
   - Metric cards
   - Data tables
   - Charts (Revenue trend using Chart.js)
   - Kanban columns
   - Badges for status
   - Risk chips with color coding
   - Modal dialogs
   - Activity feeds

3. **Color Scheme**
   - Primary accent: Indigo (#4F46E5)
   - Success: Green (#10B981)
   - Warning: Amber (#F59E0B)
   - Danger: Red (#EF4444)
   - Neutral palette: Grays

4. **Styling**
   - CSS custom properties (variables)
   - Box-sizing border-box
   - Flexbox and CSS Grid layouts
   - Smooth transitions and hover states

### 3. package.json - Dependencies

```json
{
  "name": "all-in-one-plan",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  }
}
```

**Key Dependencies**:
- **Express.js**: Web framework for Node.js
- **CORS**: Cross-Origin Resource Sharing middleware

### 4. .gitignore - Git Configuration

```
# Dependencies
node_modules/
package-lock.json
yarn.lock

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Environment
.env
.env.local

# Build
dist/
build/

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

---

## Marketing Strategy

### Overview

**Target**: Acquire 30 shops/businesses as customers within 12 months

**Product**: CRM AI Assistant (automated customer relationship management with AI capabilities)

### Weekly Marketing Checklist

- **Social Media** (2x per week)
  - Post product tip or use case on LinkedIn/Twitter
  - Engage with 10+ posts from target audience
  - Share customer success story or demo

- **Direct Outreach** (3-5 prospects)
  - Identify 3-5 shop owners/managers
  - Send personalized email with value proposition
  - Follow up with warm introduction if possible

- **Content** (1-2 pieces per week)
  - Create blog post, video, or case study
  - Repurpose into social media snippets
  - Track engagement metrics

- **Measurement** (Weekly review)
  - Track new leads/inquiries
  - Update conversion metrics
  - Identify what's working/what's not

- **Relationship Building** (ongoing)
  - Reply to all comments/DMs within 24 hours
  - Schedule 1-2 customer calls/demos
  - Ask existing customers for referrals

### Phase Timeline

| Month | Goals | Actions |
|-------|-------|---------|
| 1 | Positioning + content ready | Define messaging, write 5 pieces, build lists |
| 2 | Start outreach | Send first 20 emails, build social presence |
| 3 | First demos | Close 1-2 customers, adjust messaging |
| 4-6 | Growth phase | Steady 2-3 demos/week, 8-12 customers |
| 7-9 | Scaling | Build referral momentum, case studies |
| 10-12 | Target acquisition | 30 customers total, strong referral flow |

### Key Metrics to Track

| Metric | Target (Annual) |
|--------|---|
| Prospects identified | 150+ |
| Outreach sent | 150+ |
| Demos scheduled | 40+ |
| Customers acquired | 30 |
| Referrals generated | 5+ |
| Email subscribers | 500+ |
| Social engagement rate | 3%+ |

### Content Topics

1. "5 Reasons Shops Lose Customers (and how AI fixes it)"
2. "How to 10x your repeat customer rate"
3. "CRM tips for small retail businesses"
4. Case study: "How [Shop Name] increased revenue 20%"
5. "AI tools for customer retention: pros and cons"

### Ideal Customer Profile (ICP)

- **Who**: Small retail, service, or e-commerce shops
- **Pain**: Customer data tracking, follow-up, retention
- **Size**: 1-50 employees
- **Budget**: Entry to mid-range

### Key Value Propositions

1. Saves 5+ hours/week on manual CRM entry
2. Increases repeat customer rate by X%
3. Never miss a follow-up opportunity
4. AI learns customer patterns automatically

---

## Configuration Files

### .agent.md - Copilot Agent Configuration

Defines a repository-focused development assistant for the All-in-one-plan project with preferences for:
- File reading and editing tools
- Repository navigation
- Code refactoring support
- Architecture guidance

### README_RUN.md - Running Instructions

Complete guide to:
1. Installing dependencies: `npm install`
2. Starting the server: `npm start`
3. Accessing the application in browser

### cleanup.sh - Git Maintenance Script

Removes `node_modules` from git history to reduce repository size:

```bash
#!/bin/bash
git rm -r --cached node_modules/
git commit -m "Remove node_modules from version control"
git push origin main
```

---

## Environment Configuration

### Default Port
- Development: 3000
- Configurable: `PORT` environment variable

### Data Directory
- Location: `/data/data.json`
- Auto-created if missing
- Initial structure: `{ "leads": [], "tasks": [] }`

### CORS Settings
- Enabled for all origins
- Supports JSON payloads
- Standard HTTP methods (GET, POST, PUT, DELETE)

---

## Technology Stack

**Backend**
- Runtime: Node.js
- Framework: Express.js 4.18.2
- CORS Middleware: 2.8.5

**Frontend**
- HTML5
- CSS3 (with CSS custom properties)
- Vanilla JavaScript
- Chart.js 4.4.1 (for data visualization)
- No build process required

**Storage**
- File-based JSON storage
- Located in `/data` directory
- Automatically initialized on first run

---

## Key Files Summary

| File | Size | Purpose |
|------|------|---------|
| nexuscrm (2).html | 76KB | Main CRM dashboard application |
| server.js | 3.6KB | Express backend with API endpoints |
| MARKETING_SKILL.md | 10KB | Comprehensive marketing strategy |
| package.json | 351B | Node.js dependencies |
| package-lock.json | 43KB | Dependency lock file |
| .gitignore | 235B | Git configuration |
| cleanup.sh | 464B | Git maintenance script |

---

## Quick Start Summary

1. **Install**: `npm install`
2. **Run**: `npm start`
3. **Access**: Open browser to `http://localhost:3000/nexuscrm%20(2).html`
4. **Create Leads**: Click "+ New lead" button
5. **Score Risk**: Use AI Risk Engine page to analyze deals
6. **Track Pipeline**: Use Kanban board to manage sales stages
7. **View Reports**: Check Dashboard for key metrics and trends

---

## Support & Documentation

- **Running Instructions**: See `README_RUN.md`
- **Project Overview**: See `README.md`
- **Marketing Guide**: See `MARKETING_SKILL.md`
- **Agent Info**: See `.agent.md` and `AGENTS.md`

---

**End of Documentation**

Generated: June 5, 2026  
Repository: poeta-liado/All-in-one-plan  
Version: 1.0
