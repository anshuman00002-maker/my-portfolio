// AnshumanPortfolio.jsx
// Single-file React component (default export) for a modern portfolio
// Quick demo: to see Tailwind styling without full setup, add the Tailwind CDN
//   into public/index.html <head>:
//   <script src="https://cdn.tailwindcss.com"></script>
// Usage:
// 1) Create a React app (Vite or CRA). 2) Replace src/App.jsx with this file or import it.
// 3) npm install react-icons
// 4) npm start

import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';

const projects = [
  {
    title: 'MIT Run (2D Runner)',
    tech: 'HTML5, CSS3, JavaScript, Canvas API',
    desc: 'A side-scrolling runner/chaser 2D game with animated sprites, collision logic and score system.',
    link: '#'
  },
  {
    title: 'Inventory Management System',
    tech: 'Spring Boot, React, MySQL',
    desc: 'Web app to manage products, suppliers and stock levels. Role-based auth and REST APIs.',
    link: '#'
  },
  {
    title: 'E-commerce Web App (Ongoing)',
    tech: 'React, Node.js, Express, MongoDB',
    desc: 'Full-stack online store with user auth, cart, order processing and admin dashboard.',
    link: '#'
  }
];

export default function AnshumanPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-tight">Anshuman Singh</h1>
        <nav className="space-x-4 text-sm">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-16">
        {/* Hero */}
        <section className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <p className="text-sm text-indigo-600 font-semibold">Computer Science • Data Science</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Hi — I’m Anshuman. I build web apps and data solutions.</h2>
            <p className="mt-4 text-gray-600">Final-year B.Tech (CSE - Data Science) student with hands-on experience in full-stack development, big data tooling, and machine learning basics. I enjoy turning ideas into polished, reliable software.</p>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-95">
                <FiMail /> Contact Me
              </a>
              <a href="#" className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50">
                <FiDownload /> Resume
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-gray-500">
              <a aria-label="GitHub" href="#"><FiGithub size={20} /></a>
              <a aria-label="LinkedIn" href="#"><FiLinkedin size={20} /></a>
            </div>
          </div>

          <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center font-bold text-indigo-600">AS</div>
              <img src='images/Pp.png' alt='Anshuman Singh' className='w-48 h-48 rounded-xl object-cover shadow-lg' />
              <p className="mt-2 text-xs text-gray-500">Front-end • Back-end • Data</p>
            </div>
          </div>
        </section>

        {/* Skills + Summary */}
        <section className="mt-8 grid md:grid-cols-3 gap-6">
          <article className="md:col-span-2 bg-white rounded-2xl shadow p-6">
            <h3 className="font-semibold text-lg">About Me</h3>
            <p className="mt-3 text-gray-600">I focus on building practical applications — from responsive front-ends and RESTful backends to data pipelines and simple ML prototypes. Comfortable working with Java, Python, JavaScript and SQL. Currently exploring advanced Big Data tools and deployment pipelines.</p>

            <h4 className="mt-4 font-medium">Education</h4>
            <p className="text-sm text-gray-600">B.Tech in Computer Science & Engineering (Data Science) — AKTU — 2022 – 2026</p>
          </article>

          <aside id="skills" className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-semibold text-lg">Technical Skills</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><strong>Languages:</strong> Python, Java, JavaScript, C/C++, SQL</li>
              <li><strong>Web:</strong> HTML5, CSS3, React, Node.js, Express</li>
              <li><strong>Data & Big Data:</strong> Pandas, NumPy, Scikit-Learn, Hadoop, Hive, MapReduce</li>
              <li><strong>DBs & Tools:</strong> MySQL, MongoDB, Git, Postman, VS Code</li>
            </ul>
          </aside>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-8">
          <h3 className="text-xl font-semibold">Selected Projects</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-4 flex flex-col">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{p.tech}</p>
                <p className="mt-2 text-gray-600 text-sm flex-1">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a href={p.link} className="text-sm text-indigo-600 hover:underline">View</a>
                  <span className="text-xs text-gray-400">2024</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-10 bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold">Get in touch</h3>
          <p className="text-sm text-gray-600 mt-2">Open to internships and project collaborations. Email me or connect on GitHub / LinkedIn.</p>

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <FiMail className="mt-1" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <a href="mailto:anshuman.singh@example.com" className="text-sm text-indigo-600">anshuman00002@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiGithub className="mt-1" />
              <div>
                <p className="text-sm font-medium">GitHub</p>
                <a href="#" className="text-sm text-indigo-600">github.com/anshuman00002-maker</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Anshuman Singh. Built with React.</footer>
      </main>
    </div>
  );
}
