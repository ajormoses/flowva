🚀 FlowvaHub Dashboard

A modern Portal Dashboard built with React + TypeScript, featuring authentication with Supabase, protected routes, reusable UI components, and a clean, responsive layout using Tailwind CSS.

⸻

✨ Features
• 🔐 Authentication (Supabase)
• Email & password login
• Google OAuth login
• Persistent sessions
• Secure sign-out
• 🛡 Protected Routes
• Custom PrivateRoute implementation
• Prevents unauthenticated access
• Handles refresh and session restore correctly
• 📊 Dashboard UI
• Sidebar navigation
• Notification dropdown
• User profile dropdown
• Tab-based views (Rewards, Locked, Unlocked, Coming Soon)
• 🧩 Reusable Components
• TabSwitcher
• RewardCard
• HubSummary
• Notification Bell
• User Dropdown
• 🎨 Modern Styling
• Tailwind CSS
• Responsive grid layouts
• Conditional states (active, locked, coming soon)

⸻

🧰 Tech Stack
• Frontend Framework: React
• Language: TypeScript
• Routing: React Router DOM
• Authentication & Backend: Supabase
• Styling: Tailwind CSS
• Icons: Iconify (@iconify/react, Material Icons)
• Utilities:
• clsx (conditional class handling)
• Notifications: react-hot-toast
• Build Tool: Vite

⸻

📦 Installation

1️⃣ Clone the repository

git clone <your-repo-url>
cd flowva

2️⃣ Install dependencies

npm install

# or

yarn install

⸻

🔐 Environment Variables

Create a .env file in the root of the project:

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

⚠️ Make sure .env is included in .gitignore

⸻

▶️ Run the Project

npm run dev

# or

yarn dev

The app will run at:

http://localhost:5173

⸻

🧠 Authentication Flow
• Supabase manages session persistence
• AuthContext exposes:
• session
• loading
• signInUser
• signUpNewUser
• signUpGoogle
• signOutUser
• PrivateRoute:
• Blocks access when unauthenticated
• Waits for auth state to resolve before rendering

⸻

🗂 Project Structure

src/
├── components/
│ ├── PrivateRoute.tsx
│ ├── TabSwitcher.tsx
│ ├── RewardCard.tsx
│ ├── NotificationBell.tsx
│ └── UserDropdown.tsx
│
├── context/
│ └── AuthContext.tsx
│
├── pages/
│ ├── auth/
│ │ ├── signIn.tsx
│ │ └── signUp.tsx
│ └── dashboard/
│ └── index.tsx
│
├── assets/
│ └── tailwind.css
│
├── SupbaseClient.ts
├── App.tsx
└── main.tsx

⸻

🧪 Key UI Patterns
• Tab Switcher with Counts
• Responsive Grid Cards
• Dropdown Menus (click outside support)
• Hover & Active States
• Conditional Rendering (empty states)

⸻

🚧 Future Improvements
• Pagination for rewards
• Role-based access control
• Dark mode support
• API-driven rewards data
• Unit & integration tests

⸻

👤 Author

Moses Ajor
Frontend Engineer
• Twitter: https://x.com/ajor_moses
• LinkedIn: https://www.linkedin.com/in/moses-ajor-0b99291a7/

⸻

📄 License

This project is open-source and available under the MIT License.

⸻

Built with ❤️ using React, TypeScript, and Supabase
