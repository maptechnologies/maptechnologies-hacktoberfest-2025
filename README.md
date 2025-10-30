This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file & add more components folder and add component.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/umarhasnain/maptechnologies-hacktoberfest-2025.git

Move into the project directory:
    ```bash
    cd maptechnologies-hacktoberfest-2025

Install dependencies:
    ```bash
    npm install

Run the development server:
    ```bash
    npm run dev

Open your browser and go to:
    ```bash
    http://localhost:3000

✅ Now the project should be running successfully!

## 📖 Sample Usage

This Next.js application includes:

### 🎨 Components
```jsx
// Using the Navbar component
import Navbar from './components/Navbar';

function MyPage() {
  return (
    <div>
      <Navbar />
      {/* Your page content */}
    </div>
  );
}
```

### 🎨 Styling with Tailwind CSS
```jsx
// Example of custom styling
<div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
  <h1 className="text-white text-2xl font-bold">MapTechnologies</h1>
</div>
```

### 🚀 Project Structure
```
app/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── (pages)/            # Route pages
│   ├── about/
│   └── home/
├── api/                # API routes
└── globals.css         # Global styles
```

## 🧑‍💻 Contributor Instructions

We welcome contributions! Follow these simple steps to contribute:

- Fork this repository and clone it locally.  
- Create a new branch for your changes (`git checkout -b your-branch-name`).  
- Make your updates and commit them with clear messages.  
- Push your branch and open a Pull Request. 🚀
git checkout -b fix/responsive-navbar


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


