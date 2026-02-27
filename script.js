const input = document.getElementById("command-input");
const output = document.getElementById("output");
const terminalBody = document.getElementById("terminal-body");

// Keep focus on input when clicking anywhere in the terminal
terminalBody.addEventListener("click", () => {
  input.focus();
});

const commands = {
  help: `
Available commands:
  <span class="text-yellow-400">about</span>    - Learn more about me
  <span class="text-yellow-400">skills</span>   - View my technical skills
  <span class="text-yellow-400">projects</span> - See what I've built
  <span class="text-yellow-400">contact</span>  - Get in touch
  <span class="text-yellow-400">clear</span>    - Clear the terminal
`,
  about: `
Hi, I'm a passionate Developer.
I love building simple, clean, and interactive web applications.
My journey started with curiosity and turned into a full-time passion for coding.
`,
  skills: `
Frontend: HTML, CSS, JavaScript, React, Tailwind CSS
Backend: Node.js, Express, Python
Tools: Git, GitHub, VS Code, Terminal
`,
  projects: `
1. <span class="text-blue-400">Terminal Portfolio</span> - You are looking at it!
2. <span class="text-blue-400">E-commerce Store</span> - A full-stack web app built with React and Node.js.
3. <span class="text-blue-400">Weather App</span> - A simple app fetching data from a public API.
`,
  contact: `
Email:   <a href="mailto:dev@example.com" class="text-blue-400 hover:underline">dev@example.com</a>
GitHub:  <a href="https://github.com" target="_blank" class="text-blue-400 hover:underline">github.com/dev</a>
LinkedIn:<a href="https://linkedin.com" target="_blank" class="text-blue-400 hover:underline">linkedin.com/in/dev</a>
`,
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim().toLowerCase();

    // Echo the command
    const commandEcho = document.createElement("div");
    commandEcho.innerHTML = `<span class="text-blue-400">guest@dev:~$</span> ${command}`;
    output.appendChild(commandEcho);

    // Process the command
    if (command === "clear") {
      output.innerHTML = "";
    } else if (commands[command]) {
      const response = document.createElement("div");
      response.className = "mb-4 whitespace-pre-wrap";
      response.innerHTML = commands[command].trim();
      output.appendChild(response);
    } else if (command !== "") {
      const error = document.createElement("div");
      error.className = "mb-4 text-red-400";
      error.textContent = `Command not found: ${command}. Type 'help' for available commands.`;
      output.appendChild(error);
    }

    // Clear input and scroll to bottom
    input.value = "";
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
});
