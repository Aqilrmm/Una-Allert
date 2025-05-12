# Una-Alert

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A lightweight, modern, and customizable alert and toast notification system for web applications. Una-Alert provides beautiful, animated alerts and toast notifications that can be easily integrated into any project.

![Una-Alert Preview](https://via.placeholder.com/800x400?text=Una-Alert+Preview)

## Features

- 🎨 **Beautiful Design** - Modern, clean design with smooth animations
- 🚀 **Lightweight** - No dependencies, under 10KB minified
- 🔌 **Easy to Use** - Simple API for showing alerts and toast notifications
- 🔄 **Confirmations** - Built-in support for confirmation dialogs
- 📱 **Responsive** - Works on all devices and screen sizes
- 🌈 **Customizable** - Easy to customize with CSS variables
- 🖼️ **SVG Icons** - Built-in SVG icons for various alert types

## Installation

### Option 1: Download Files

Download the `una-alert.js` and `una-alert.css` files from this repository and include them in your project.

```html
<link rel="stylesheet" href="path/to/una-alert.css">
<script src="path/to/una-alert.js"></script>
```

### Option 2: CDN

Include directly from a CDN (replace with your preferred CDN when available):

```html
<!-- Coming soon -->
```

### Option 3: NPM

```
npm install una-alert
```

## Quick Start

Initialize Una-Alert when your DOM is ready:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  unaAlert.init();
});
```

## Basic Usage

### Show a Simple Alert

```javascript
unaAlert.show('success', 'Success!', 'Your file has been uploaded successfully.');
```

### Show a Toast Notification

```javascript
unaAlert.toast('success', 'Success!', 'Your action was completed successfully');
```

### Show a Confirmation Dialog

```javascript
unaAlert.confirm(
  'Are you sure?', 
  'This action cannot be undone. Do you want to proceed?', 
  function() {
    // This function will be called if the user clicks "Confirm"
    unaAlert.toast('success', 'Confirmed!', 'Your action has been processed');
  }
);
```

## API Reference

### Alert Types

Una-Alert supports 5 types of alerts:

- `success` - For successful operations
- `info` - For information messages
- `warning` - For warning messages
- `error` - For error messages
- `question` - For confirmation dialogs (automatically used by the `confirm()` method)

### Methods

#### `unaAlert.init()`

Initializes Una-Alert by creating the necessary DOM elements. This method is called automatically when using other methods, but it's recommended to call it explicitly when your DOM is ready.

#### `unaAlert.show(type, title, message, options)`

Shows an alert dialog.

- `type` (string): Alert type ('success', 'info', 'warning', 'error')
- `title` (string): Alert title
- `message` (string): Alert message
- `options` (object, optional): Additional options (currently not used)

#### `unaAlert.confirm(title, message, callback, options)`

Shows a confirmation dialog.

- `title` (string): Confirmation title
- `message` (string): Confirmation message
- `callback` (function): Function to be called when the user clicks the confirm button
- `options` (object, optional): Additional options
  - `confirmText` (string): Custom text for the confirm button
  - `cancelText` (string): Custom text for the cancel button
  - `verticalButtons` (boolean): Whether to stack buttons vertically

#### `unaAlert.toast(type, title, message, duration)`

Shows a toast notification.

- `type` (string): Toast type ('success', 'info', 'warning', 'error')
- `title` (string): Toast title
- `message` (string): Toast message
- `duration` (number, optional): Duration in milliseconds before the toast auto-closes (default: 4000)

#### `unaAlert.close()`

Closes the currently open alert dialog.

## Customization

Una-Alert can be easily customized by overriding the CSS variables or classes. See the [Customization Guide](CUSTOMIZATION.md) for more details.

## Browser Support

Una-Alert works in all modern browsers (Chrome, Firefox, Safari, Edge).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## Acknowledgements

- SVG icons based on [Heroicons](https://heroicons.com/)