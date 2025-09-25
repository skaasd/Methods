# Copilot Instructions for metodos Codebase

## Overview
This project is a collection of small, self-contained HTML/JS apps for learning and demonstrating JavaScript array methods and basic DOM manipulation. Each HTML file is a standalone demo with its own script logic, focusing on interactive list management, filtering, and rendering.

## Major Components
- `superheroes.js`: Demonstrates array methods (`push`, `pop`, `unshift`, `splice`, `findIndex`, `filter`, `map`, `sort`) with various data sets (heroes, users, actors, students, workers).
- `buscqueda.html`, `productos.html`: Interactive tables for searching/filtering product/task lists. Filtering is done via `.filter()` and results are rendered to the DOM.
- `index.html`: Simple guest list manager using array and DOM methods. Adds guests to a list and renders them in real time.
- `lista-tareas.html`: Task list manager with add/delete functionality. Uses array manipulation and dynamic rendering. Includes two render patterns (for-loop and `.map()`), both shown in code comments.

## Patterns & Conventions
- **Rendering**: Always clear the target container (`innerHTML = ""`) before rendering new rows/items.
- **Filtering/Search**: Use `.filter()` for search, typically by string match or numeric comparison. Results are rendered immediately.
- **Event Handling**: Button clicks and input events trigger array updates and re-rendering.
- **ID Generation**: For tasks, use `Date.now()` for unique IDs.
- **No Frameworks**: Pure JS/HTML only. No build tools, no external dependencies.
- **Code Comments**: Alternative implementations and explanations are often left in comments for learning purposes.

## Developer Workflow
- **No build/test steps required.**
- **Debugging**: Use browser console for logging and inspection.
- **Edit HTML/JS directly**; changes are reflected on page reload.
- **No module system**; all scripts are inline or in a single JS file.

## Examples
- Filtering tasks/products:
  ```js
  const filtrar = lista.filter(item => item.prop.includes(busqueda));
  render(filtrar);
  ```
- Rendering lists:
  ```js
  container.innerHTML = "";
  lista.forEach(item => {
    container.innerHTML += `<li>${item.nombre}</li>`;
  });
  ```
- Adding items:
  ```js
  lista.push({ id: Date.now(), nombre: input.value });
  render();
  ```

## Key Files
- `superheroes.js`: All array method demos
- `buscqueda.html`, `productos.html`: Table filtering/search
- `lista-tareas.html`: Task list with add/delete
- `index.html`: Guest list manager

## Tips for AI Agents
- Focus on array and DOM manipulation patterns.
- When adding new demos, follow the single-file HTML+JS structure.
- Use clear variable names and keep logic simple for learning purposes.
- Prefer direct DOM updates over complex state management.

---
For questions or improvements, ask for clarification on specific file patterns or workflows.
