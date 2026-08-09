# CareerLyze — AI-Powered Career Coach 🚀

<div align="center">

### Smart Career Guidance Platform powered by AI, Analytics & Automation

[![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen.svg)]()
[![GSSoC'26](https://img.shields.io/badge/GSSoC'26-Welcoming%20Contributors-orange)]()
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)]()
[![Gemini AI](https://img.shields.io/badge/AI-Gemini-blueviolet)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-success)]()

</div>

---

# 📌 Overview

**CareerLyze** is a full-stack AI-powered career guidance platform designed to help students, freshers, and job seekers make smarter career decisions.

The platform combines:

* AI-powered resume & cover letter generation
* Career trend analytics
* Industry insights
* Interview preparation
* Personalized career guidance

into one unified ecosystem.

---

# 🌐 Live Demo

🚀 **Try it here:**
[CareerLyze Live Demo](https://career-lyze.vercel.app/)

---

# ❓ Problem Statement

Many students and job seekers struggle with:

* Choosing the right career path
* Understanding industry trends
* Building ATS-friendly resumes
* Preparing effectively for interviews
* Tracking in-demand skills and technologies

Most existing platforms solve only one part of the problem.

**CareerLyze** aims to provide an all-in-one AI-driven solution for career development.

---

# ✨ Features

## 🔍 Industry Insights

* AI-curated industry analysis
* Trending technologies tracking
* Hiring pattern observations
* Data-driven career recommendations

---

## 📈 Trend Analytics

Interactive analytics dashboards showing:

* Market demand trends
* Skill growth patterns
* Emerging technologies
* Industry evolution insights

---

## 📄 AI Resume Builder

* ATS-optimized resume generation
* Smart content suggestions
* Professional formatting
* Career-targeted resume tailoring

---

## 📨 AI Cover Letter Generator

* Personalized cover letters
* Role-specific writing style
* AI-generated professional content
* Customizable structure

---

## 🎤 Mock Interview Engine

* AI-generated interview questions
* Technical & HR interview simulation
* Instant feedback analysis
* Performance improvement suggestions

---

# 🧠 System Architecture

```text
                    ┌────────────────────┐
                    │       User         │
                    └─────────┬──────────┘
                              │
                              ▼
                  ┌──────────────────────┐
                  │   Next.js Frontend   │
                  └─────────┬────────────┘
                            │
                            ▼
                  ┌──────────────────────┐
                  │      API Routes      │
                  └─────────┬────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
 ┌──────────────┐   ┌──────────────┐   ┌────────────────┐
 │ Gemini AI    │   │ Resume Engine│   │ Interview AI   │
 └──────────────┘   └──────────────┘   └────────────────┘
                            │
                            ▼
                  ┌──────────────────────┐
                  │ NeonDB PostgreSQL DB │
                  └──────────────────────┘
```

---

# 🛠️ Tech Stack

| Technology   | Usage                        |
| ------------ | ---------------------------- |
| Next.js      | Frontend framework & routing |
| Tailwind CSS | Styling                      |
| ShadCN UI    | UI Components                |
| Prisma ORM   | Database abstraction         |
| NeonDB       | Serverless PostgreSQL        |
| Gemini AI    | AI-powered generation        |
| Inngest      | Background jobs & workflows  |
| TypeScript   | Type safety                  |
| Vercel       | Deployment                   |

---

# 📂 Project Structure

```bash
CareerLyze/
│
├── app/
├── components/
├── data/
├── hooks/
├── prisma/
├── public/
├── lib/
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/ahana4banerjee/CareerLyze.git
```

---

## 2️⃣ Navigate into the Project

```bash
cd CareerLyze
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Setup Environment Variables

Create a .env file in the root directory.

```bash
DATABASE_URL=<your-prisma-url>
GEMINI_API_KEY=<your-gemini-api-key>
INNGEST_EVENT_KEY=<your-inngest-event-key>
INNGEST_SIGNING_KEY=<your-inngest-signing-key>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
```

---

## 5️⃣ Run the Development Server

```bash
npm run dev
```

---

# 🤝 Open Source Contribution — GSSoC'26

We proudly welcome contributors for **GirlScript Summer of Code 2026 (GSSoC'26)** 🎉

Whether you're a beginner or experienced developer, contributions are highly appreciated.

## 🏷️ Contribution Labels

Issues are categorized using labels like:

* `good first issue`
* `beginner friendly`
* `documentation`
* `bug`
* `enhancement`
* `frontend`
* `backend`
* `AI`
* `GSSoC`
* `help wanted`

---

# 📜 Contribution Guidelines

Before contributing, please read:

📄 [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution rules and workflow.

## Quick Rules

* Star the repository ⭐
* Fork the repository before contributing
* Create a separate branch for each issue
* Follow proper commit message conventions
* Write clean and readable code
* Avoid creating duplicate pull requests
* Test your changes before submitting
* Respect project structure and coding standards

---

# 🧩 How to Contribute

1. Fork the repository
2. Clone your fork
3. Create a new branch

```bash
git checkout -b feature-name
```

4. Make your changes
5. Commit your changes

```bash
git commit -m "Added: feature description"
```

6. Push to your branch

```bash
git push origin feature-name
```

7. Open a Pull Request 🚀

---

# 💡 Good First Contributions

New contributors can start with:

* UI improvements
* Documentation enhancements
* Bug fixes
* Responsive design improvements
* Code refactoring
* Accessibility enhancements
* Performance optimization

---

# 🔮 Future Enhancements

* Voice-based mock interviews
* AI career roadmap generator
* Job portal API integrations
* Multi-language support
* AI portfolio analyzer
* Real-time recruiter insights
* AI skill gap analysis

---

# 🛡️ License

This project is licensed under the **MIT License**.

📄 See the [LICENSE](LICENSE) file for more details.

---

# 👩‍💻 Author

## Ahana Banerjee

* Electronics & Communication Engineering
* JNTUH Hyderabad

---

# 🌟 Support the Project

If you found this project helpful:

⭐ Star the repository
🍴 Fork the project
📢 Share it with others

---

<div align="center">

### Built with ❤️ for students, developers, and contributors worldwide.

</div>





## GSSOC '26 Contributions
- UI Overhaul with Premium Navy/Slate aesthetic.
- Responsive Dashboard with Framer Motion animations.
- Integrated ShadCN components for enhanced UX.