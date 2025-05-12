# Una-Alert

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A lightweight, modern, and customizable alert and toast notification system for web applications. Una-Alert provides beautiful, animated alerts and toast notifications that can be easily integrated into any project.

![Una-Alert Preview](https://via.placeholder.com/800x400?text=Una-Alert+Preview)

## 🌐 Language Documentation

| Language | Documentation |
|----------|---------------|
| [English](docs/english/README.md) | [Customization](docs/english/CUSTOMIZATION.md) |
| [Indonesia](docs/indonesia/README.md) | [Kustomisasi](docs/indonesia/CUSTOMIZATION.md) |

## ✨ Features

- 🎨 **Beautiful Design** - Modern, clean design with smooth animations
- 🚀 **Lightweight** - No dependencies, under 10KB minified
- 🔌 **Easy to Use** - Simple API for showing alerts and toast notifications
- 🔄 **Confirmations** - Built-in support for confirmation dialogs
- 📱 **Responsive** - Works on all devices and screen sizes
- 🌈 **Customizable** - Easy to customize with CSS variables
- 🖼️ **SVG Icons** - Built-in SVG icons for various alert types

## 🚀 Quick Start

### Installation

1. Download the `una-alert.js` and `una-alert.css` files from the `src` directory.
2. Include them in your HTML:

```html
<link rel="stylesheet" href="path/to/una-alert.css">
<script src="path/to/una-alert.js"></script>
```

3. Initialize Una-Alert when your DOM is ready:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  unaAlert.init();
});
```

### Basic Usage

```javascript
// Show a simple alert
unaAlert.show('success', 'Success!', 'Your file has been uploaded successfully.');

// Show a toast notification
unaAlert.toast('success', 'Success!', 'Your action was completed successfully');

// Show a confirmation dialog
unaAlert.confirm(
  'Are you sure?', 
  'This action cannot be undone. Do you want to proceed?', 
  function() {
    // This function will be called if the user clicks "Confirm"
    unaAlert.toast('success', 'Confirmed!', 'Your action has been processed');
  }
);
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 🙏 Acknowledgements

- SVG icons based on [Heroicons](https://heroicons.com/)