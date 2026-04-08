Official website of Dr. Anre Anvari:
https://anreanvari.elixflare.com/

# Medical Resume SPA (React + Tailwind)

A single-page, fully responsive medical-themed dashboard with dynamic operating room (OR) effects: sterile motes, vitals HUD (HR, SpO₂, NIBP, RR), overhead lamp glow, and subtle parallax effects.

## 🚀 Run locally

# 1) Create project folder and copy files

# Make sure your files match the provided structure.

# 2) Install dependencies

npm install

# 3) Start dev server

npm run dev

# 4) Build and preview production version

npm run build && npm run preview

```

🧰 Tech Stack
React + Vite
TailwindCSS for styling
Framer Motion for subtle animations
Lucide icons for symbolic overlays
Canvas for particle and HUD effects

🧪 Features
Sterile Motes – floating dust particles under OR lamp with soft parallax.
Vitals HUD – displays real-time heart rate, SpO₂, NIBP, and respiratory rate with parallax and subtle flicker.
Overhead Lamp Effects – radial glow and gentle diagonal sweep for realistic OR lighting.
DPR-aware & Motion Preferences – respects device pixel ratio and prefers-reduced-motion.
Fully responsive – works on any screen size.

⚙️ Customization
Edit src/data/resume.js for personal info.
Adjust HUD density, colors, or vitals ranges inside MedicalBackground component.
Tweak lamp glow or particle counts for different visual styles.
```
