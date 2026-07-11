# Stylta Flow Light

A meticulously crafted light Visual Studio Code theme built for developers who value clarity, consistency, and focus.

Stylta Flow Light combines a clean modern workspace with carefully selected semantic colors to create an elegant coding experience that remains comfortable during extended development sessions.

---

## Features

### Modern Light Interface

Built around a refined off-white foundation for a clean and professional appearance.

- Carefully balanced contrast
- Reduced visual noise
- Comfortable for long coding sessions
- Consistent UI hierarchy

### Semantic Highlighting

Stylta Flow Light includes semantic token support for:

- TypeScript
- JavaScript
- React / TSX
- Vue
- Python
- Rust
- SQL
- HTML
- CSS
- JSON
- YAML
- TOML

### Carefully Crafted Color System

| Purpose | Color |
|----------|----------|
| Keywords | Purple |
| Functions & Methods | Blue |
| Properties | Cyan |
| Strings | Green |
| Types & Classes | Amber |
| Numbers & Literals | Orange |
| Errors | Red |

### Optimized Workbench

Custom styling includes:

- Activity Bar
- Side Bar
- Command Center
- Peek Views
- Notifications
- Sticky Scroll
- Terminal
- Suggest Widget
- Quick Pick
- Command Palette
- Status Bar
- Problems Panel
- Merge Editor
- Diff Editor

### Enhanced Git Experience

Custom colors for:

- Added changes
- Modified changes
- Deleted changes
- Merge conflicts
- Source control decorations
- Overview ruler indicators

---

## Philosophy

Stylta Flow Light follows a simple principle:

> Every color should convey meaning.

Instead of using color for decoration, each accent color serves a purpose throughout the editor experience.

---

## Installation

1. Open Visual Studio Code.
2. Open the Extensions view.
3. Search for **Stylta Flow Light**.
4. Click **Install**.
5. Open **Preferences → Color Theme**.
6. Select **Stylta Flow Light**.

---

## Recommended Settings

```json
{
  "editor.semanticHighlighting.enabled": true,
  "editor.stickyScroll.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.guides.indentation": true,
  "editor.fontFamily": "Victor Mono",
  "editor.fontLigatures": "'ss01','ss04','ss08','ss06','calt'"
}
```

---

## Development Setup

Clone the repository:

```bash
git clone <repository-url>
cd stylta-flow-light
```

Install dependencies:

```bash
npm install
```

Start the build process:

```bash
npm run dev
```

This starts the TypeScript watcher that continuously generates the theme JSON file.

To preview changes:

1. Keep the watcher running.
2. Press **F5** inside VS Code.
3. An Extension Development Host window will open.
4. Select **Stylta Flow Light** as the active theme.
5. Make changes and see them reflected in the development window.

---

## Contributing

Contributions are greatly appreciated.

If you find:

- Missing token colors
- Unsupported scopes
- Language-specific issues
- UI inconsistencies
- Accessibility improvements

please open an issue or submit a pull request.

### Pull Requests Welcome

Whether it's a small color adjustment or a larger enhancement, all contributions are welcome.

The goal is to make Stylta Flow Light as polished and complete as possible for everyone.

---

## Changelog

See the CHANGELOG.md file for release notes and version history.

---

## License

MIT