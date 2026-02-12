## 📦 RCDOK Missions Operations Management System
The Mission Operations Management System is a web-based Next.js + Supabase web-application that centralizes the Diocese’s social mission programs, including Nutrition, Civil Registry, Justice, Mental Health, Drug Rehabilitation, and Community Ministries. It features a searchable Resource Directory of parishes and services, an Assistance Request Form for community members, and an Inventory and Donor Management system to track donations and prevent duplication of aid.

## 🧱 Tech Stack
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Supabase (Database & Auth – partially wired)
- Node.js

## ✅ Prerequisites
Required
- Node.js >= 18.x
```bash
node -v
```
- npm

## 🚀 Getting Started (Local Development)
### 1. Clone the repository
```bash
git clone https://github.com/adrien4221/rcdok-missions-project.git
cd rcdok-missions-project
```
### 2. Install the dependencies
```bash
npm install
```
### 3. Environment variables
Create an ```.env.local``` file in the project root.
```bash
touch .env.local
```
Add the following (values will be provided separately):
```env
NEXT_PUBLIC_SUPABASE_URL=supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=supabase_anon_key
```
## 4. Run the development server
```bash
npm run dev
```
The app will be available at:
```
http://localhost:3000
```
## 🧭 Available Routes (Current)
As of now, the available routes are as follows:
| Route | Description |
| --- | --- | 
| ```/public/request``` | Multi-step Assistance Request Form | 

## 🧩 Project Structure
```
app/
 ├─ page.tsx            # Landing page
 ├─ request/
 │   └─ page.tsx        # Multi-step request form
 ├─ admin/
 │   └─ page.tsx        # Admin dashboard (future)
components/
 ├─ form/               # Multi-step form components
 ├─ layout/             # Header, progress bar, etc.
lib/
 └─ supabase.ts         # Supabase client setup
```
