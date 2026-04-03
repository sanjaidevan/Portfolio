 Sanjai Devan K R — Interactive Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-fcdc04?style=for-the-badge&logo=github)](https://sanjaidevan.github.io/portfolio)
[![GitHub license](https://img.shields.io/badge/license-MIT-fcdc04?style=for-the-badge)](LICENSE)

> A modern, interactive portfolio website with glassmorphism design, AI chatbot, project showcase, and smooth animations. Built with pure HTML, CSS, and JavaScript.


 ✨ Features

- Liquid Glass UI – Frosted glass effect with animated liquid background
- AI Chatbot Assistant – Ask about skills, projects, education, or experience
- Typing Animations – Animated name and role typing effects
- Project Showcase – Cards with hover preview images and direct GitHub links
- Dark Theme Only – Custom yellow/gold color scheme (`fcdc04`) on dark background
- Fully Responsive – Works on all devices (mobile, tablet, desktop)
- Interactive Elements – Tilt card effect, custom cursor glow, ripple buttons, scroll progress bar
- Contact Form – Simulated form with validation (ready for backend integration)


 🛠️ Technologies Used

- HTML5 – Semantic structure
- CSS3 – Custom properties, flexbox, grid, keyframe animations
- JavaScript (ES6) – DOM manipulation, chatbot logic, tilt effect, particles
- Font Awesome 6 – Icons
- Google Fonts – Century Gothic (fallback)

 📁 Project Structure

portfolio/
    ├── index.html           Main HTML file (self-contained)
    ├── README.md            This file
    └── (no external assets – all inline)

 🚀 Getting Started

 Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- (Optional) Local server for better performance

 Installation

1. Clone the repository
   bash
   git clone https://github.com/sanjaidevan/portfolio.git
   cd portfolio
   

2. Open the file
    Double-click `index.html` – or –
    Use Live Server in VS Code

3. Customize
    Update the contact email, phone, social links in the HTML
    Add your own project images (replace `picsum.photos` URLs)

 🎨 Customization

 Colors
The primary color is `fcdc04` (yellow/gold). You can change it in the `:root` CSS variables:

css
:root {
    --primary: fcdc04;
    --primary-light: fde047;
    --bg-gradient-start: 0a0f1c;
    --bg-gradient-end: 1a1f2e;
}


 Chatbot Responses
Edit the `getBotReply()` function in the `<script>` section to add more intents.

 Adding Projects
Copy an existing project card in the `projects` section and update:
- Image URL
- Title
- Description
- GitHub link (`.repo-link`)

 📱 Responsive Design

- Desktop: 3‑column grid for projects
- Tablet: 2‑column layout
- Mobile: Single column with hamburger menu

 🤖 AI Chatbot

The chatbot is rule‑based. It can answer questions about:
- Skills (`"skills"`, `"languages"`, `"tech"`)
- Projects (`"projects"`, `"built"`, `"create"`)
- Education (`"education"`, `"study"`, `"college"`)
- Experience (`"experience"`, `"intern"`, `"work"`)
- Contact (`"contact"`, `"email"`, `"reach"`)
- US Timing (`"timing"`, `"us"`, `"timezone"`)

 📄 License

This project is open source and available under the [MIT License](LICENSE).

 🙋‍♂️ Author

Sanjai Devan K R  
- Email: [sanjaidevan06@gmail.com](mailto:sanjaidevan06@gmail.com)
- LinkedIn: [linkedin.com/in/sanjai-devan-90546b274](https://linkedin.com/in/sanjai-devan-90546b274)
- GitHub: [github.com/sanjaidevan](https://github.com/sanjaidevan)

 🌟 Acknowledgments

- Font Awesome for icons
- Picsum for placeholder images
- Inspiration from modern glassmorphism trends

⭐ If you like this portfolio, give it a star on GitHub! ⭐
