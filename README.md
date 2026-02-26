# 🎲 Numbers Randomizer

![Project Preview](./assets/preview.svg) 

A modern, interactive, and free online number randomizer. This web application allows users to draw a specific amount of random numbers within a custom range, featuring an intuitive user interface and smooth CSS animations. 

**Made with Rocketseat course.**

---

## ✨ Features

- **Custom Range:** Define the exact minimum and maximum values for the draw.
- **Quantity Selection:** Choose how many numbers you want to generate at once.
- **Unique Draws (No Repeats):** A built-in toggle switch to ensure drawn numbers are not repeated.
- **Input Validation:** Prevents invalid entries (e.g., letters instead of numbers, or minimum values greater than maximum values).
- **Smooth Animations:** Beautiful UI feedback with delayed entrance animations for the generated numbers and interactive button states.
- **Restart functionality:** Easily reset the board to perform a new draw.

---

## 🚀 Technologies

This project was developed with the following technologies:

- **HTML5:** Semantic structure.
- **CSS3:** Custom properties (variables), Flexbox, Grid, advanced animations (`@keyframes`), and gradients.
- **JavaScript (Vanilla):** DOM manipulation, event handling, math logic for random generation, and validation arrays.

---

## 📁 Project Structure

```text
├── assets/          # Images, SVGs, and background shapes
├── styles/          # Modular CSS files
│   ├── global.css   # Variables and global reset
│   ├── index.css    # CSS entry point
│   ├── section-left.css  # Styles for the left side (Text/FAQ)
│   └── section-right.css # Styles for the right side (Form/Results)
├── index.html       # Main HTML file
└── scripts.js       # Core logic for the randomizer
```

---

## 💻 Getting Started

To run this project locally, follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AndrePassoni/numbers-randomizer.git
   ```

2. **Open the folder:**
   ```bash
   cd numbers-randomizer
   ```

3. **Run the project:**
   Simply open the `index.html` file in your favorite web browser. No local server or build tools are required!

---

## 💡 How it Works

1. Enter the **amount of numbers** you want to draw.
2. Define the **range** by filling in the "from" and "to" fields.
3. Toggle the **"Não repetir número"** (Do not repeat number) switch if you want unique results.
4. Click the **"Sortear"** (Draw) button.
5. Watch the results appear with a cool animation! Click "Sortear Novamente" to try again.

---

<p align="center">
  Made with 💜 by <a href="https://github.com/AndrePassoni">André Passoni</a>
</p>