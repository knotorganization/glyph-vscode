<h3 align="center">
  <img src="icon.png" width="120" alt="Glyph Logo"/><br/>
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
  Glyph Language Support for <a href="https://code.visualstudio.com">VS Code</a>
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
  <b>Modern HTML-first language with components, scoped styles, and a clean build pipeline.</b>
</p>

<p align="center">
  <a href="https://github.com/knotorganization"><img src="https://img.shields.io/badge/org-Knot-6f5cff?style=for-the-badge"></a>
  <img src="https://img.shields.io/badge/version-0.1.0-blueviolet?style=for-the-badge">
  <img src="https://img.shields.io/badge/status-active-success?style=for-the-badge">
</p>

---

## ✨ What is Glyph?

**Glyph** is a modern, HTML-first language designed for building clean UI files with:

- ✅ Components
- 🎨 Scoped styles
- 🧩 Slots
- ⚡ Simple compilation to HTML
- 🧠 Minimal syntax, no framework lock-in

This extension provides **language support and a build command** for `.glyph` files inside VS Code.

---

## 📦 Features

- 📝 Syntax highlighting for `.glyph`
- 🧠 Language configuration (comments, brackets, auto-close)
- 🔨 `Glyph: Build Project` command
- ⚡ Compiles Glyph → HTML
- 🧩 Custom components (`<Card>`, `<Button>`, etc.)
- 🎨 Scoped styles preserved in output

---

## 🚀 Installation

### Manual (Recommended for now)

1. Download the `.vsix` file
2. Open VS Code
3. Press `Ctrl + Shift + P`
4. Select **Extensions: Install from VSIX…**
5. Choose the Glyph `.vsix` file

> Marketplace release will come later when the project grows.

---

## 🧪 Usage

### Create a Glyph file

```glyph
component Button(props) {
  <button class="btn {props.variant}">
    {props.label}
  </button>

  <style scoped>
    .btn {
      padding: 10px 16px;
      border-radius: 8px;
      border: none;
      font-weight: bold;
    }

    .primary {
      background: #6f5cff;
      color: white;
    }

    .secondary {
      background: #eee;
      color: #333;
    }
  </style>
}
