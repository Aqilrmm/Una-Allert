# Una-Alert Customization Guide

Una-Alert is designed to be easily customizable to match your project's design system. This guide explains how to customize the appearance and behavior of Una-Alert.

## Basic Styling

The easiest way to customize Una-Alert is to override the default styles in your CSS. Here are some examples:

### Changing Colors

```css
/* Change the primary color (used for confirm buttons and question icons) */
.una-alert-btn-confirm {
  background-color: #3b82f6; /* Change to your primary color */
}
.una-alert-btn-confirm:hover {
  background-color: #2563eb; /* Darker shade for hover */
}
.una-alert-question .una-alert-icon {
  background-color: rgba(59, 130, 246, 0.1); /* Light background */
  color: #3b82f6; /* Icon color */
}

/* Change the success color */
.una-alert-success .una-alert-icon {
  background-color: rgba(34, 197, 94, 0.1); /* Light background */
  color: #22c55e; /* Icon color */
}
.una-toast-success {
  border-left: 3px solid #22c55e;
}
.una-toast-success .una-toast-icon {
  color: #22c55e;
}

/* Similar changes can be made for info, warning, and error types */
```

### Changing the Font

```css
.una-alert, .una-toast {
  font-family: 'Your-Font', sans-serif;
}
```

### Changing Border Radius

```css
.una-alert {
  border-radius: 8px; /* Less rounded corners */
}

.una-alert-btn {
  border-radius: 4px;
}

.una-toast {
  border-radius: 8px;
}
```

### Changing Animations

```css
/* Change alert animation */
.una-alert {
  transform: translateY(50px);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.una-alert-overlay.show .una-alert {
  transform: translateY(0);
}

/* Change toast animation */
@keyframes custom-toast-in {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes custom-toast-out {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(50px);
  }
}

.una-toast {
  animation: custom-toast-in 0.3s ease forwards;
}

.una-toast.hide {
  animation: custom-toast-out 0.3s ease forwards;
}
```

## Advanced Customization

### Custom Icons

You can replace the default SVG icons by modifying the `icons` object in `una-alert.js`:

```javascript
// Create a new instance with custom icons
const myAlert = (function() {
  // Copy the unaAlert implementation
  const implementation = { ...unaAlert };
  
  // Override the icons
  const icons = {
    success: `<svg>...</svg>`,
    info: `<svg>...</svg>`,
    warning: `<svg>...</svg>`,
    error: `<svg>...</svg>`,
    question: `<svg>...</svg>`,
    close: `<svg>...</svg>`
  };
  
  // Override the init function to use custom icons
  const originalInit = implementation.init;
  implementation.init = function() {
    originalInit();
    // Apply custom icons
    // ...
  };
  
  return implementation;
})();
```

### Custom Toast Positioning

You can change the position of toast notifications by modifying the CSS:

```css
/* Position toasts in the top-right corner */
.una-toast-container {
  bottom: auto;
  top: 24px;
  left: auto;
  right: 24px;
  transform: none;
}

/* Adjust the animation to match the new position */
@keyframes toast-in {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes toast-out {
  to {
    opacity: 0;
    transform: translateX(20px);
  }
}

.una-toast {
  transform: translateX(20px);
}
```

### Creating a Dark Mode

```css
/* Dark mode styles */
.dark-mode .una-alert {
  background-color: #1f2937;
  color: #f3f4f6;
}

.dark-mode .una-alert-message {
  color: #d1d5db;
}

.dark-mode .una-alert-actions {
  border-top-color: #374151;
}

.dark-mode .una-alert-btn-cancel {
  background-color: #374151;
  color: #f3f4f6;
}

.dark-mode .una-alert-btn-cancel:hover {
  background-color: #4b5563;
}

.dark-mode .una-toast {
  background-color: #1f2937;
  color: #f3f4f6;
}

.dark-mode .una-toast-message {
  color: #d1d5db;
}
```

To activate dark mode, add the `dark-mode` class to the body or a parent element:

```javascript
// Example: Toggle dark mode
document.body.classList.toggle('dark-mode');
```

## Theme Examples

### Material Design Theme

```css
/* Material Design inspired theme */
.una-alert {
  border-radius: 4px;
  box-shadow: 0 11px 15px -7px rgba(0,0,0,0.2), 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12);
}

.una-alert-btn {
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 4px;
}

.una-toast {
  border-radius: 4px;
  border-left: none;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12);
}
```

### Soft UI Theme

```css
/* Soft UI / Neumorphism theme */
.una-alert {
  border-radius: 24px;
  background: #f0f0f3;
  box-shadow: 20px 20px 60px #ccccce, -20px -20px 60px #ffffff;
  border: none;
}

.una-alert-btn {
  border-radius: 12px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
  border: none;
}

.una-alert-btn-confirm {
  background: linear-gradient(145deg, #6e76ff, #5c64d9);
  color: white;
}

.una-toast {
  border-radius: 16px;
  background: #f0f0f3;
  box-shadow: 8px 8px 16px #ccccce, -8px -8px 16px #ffffff;
  border-left: none;
}
```

### Glassmorphism Theme

```css
/* Glassmorphism theme */
.una-alert-overlay {
  backdrop-filter: blur(10px);
}

.una-alert {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.una-alert-actions {
  border-top: 1px solid rgba(255, 255, 255, 0.4);
}

.una-alert-btn {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.una-alert-btn-confirm {
  background: rgba(99, 102, 241, 0.8);
  color: white;
}

.una-toast {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 3px solid;
  border-radius: 16px;
}
```

## Responsive Design

Una-Alert is designed to be responsive by default, but you can customize the responsive behavior:

```css
/* Adjust alert size on mobile */
@media (max-width: 640px) {
  .una-alert {
    max-width: 100%;
    border-radius: 0;
    margin: 0;
  }
  
  .una-alert-overlay {
    padding: 0;
  }
  
  .una-alert-title {
    font-size: 20px;
  }
  
  .una-alert-message {
    font-size: 14px;
  }
  
  .una-toast-container {
    max-width: 100%;
    padding: 0 8px;
    bottom: 16px;
  }
}
```

## Custom Alert Types

You can create custom alert types by adding new CSS classes:

```css
/* Custom alert type: "purple" */
.una-alert-purple .una-alert-icon {
  background-color: rgba(147, 51, 234, 0.1);
  color: #9333ea;
}

.una-toast-purple {
  border-left: 3px solid #9333ea;
}

.una-toast-purple .una-toast-icon {
  color: #9333ea;
}
```

Then in your JavaScript:

```javascript
// Add the custom icon to the icons object
const customIcons = {
  // ... existing icons
  purple: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`
};

// Use the custom alert type
unaAlert.show('purple', 'Custom Alert', 'This is a custom purple alert!');
unaAlert.toast('purple', 'Custom Toast', 'This is a custom purple toast!');
```

## Animation Customization

You can add more advanced animations to your alerts and toasts:

```css
/* Zoom-in animation for alerts */
.una-alert {
  transform: scale(0.8);
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
}

.una-alert-overlay.show .una-alert {
  transform: scale(1);
  opacity: 1;
}

/* Bounce animation for toasts */
@keyframes toast-bounce-in {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  70% {
    transform: translateY(-8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes toast-bounce-out {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  30% {
    transform: translateY(-8px);
  }
  100% {
    opacity: 0;
    transform: translateY(40px);
  }
}

.una-toast {
  animation: toast-bounce-in 0.5s ease forwards;
}

.una-toast.hide {
  animation: toast-bounce-out 0.5s ease forwards;
}
```

## Accessibility Enhancements

To improve accessibility, add these styles:

```css
/* Focus styles for buttons */
.una-alert-btn:focus, .una-alert-btn-close:focus, .una-toast-close:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Increase contrast for text */
.una-alert-message {
  color: #1f2937; /* Darker text for better contrast */
}

.una-toast-message {
  color: #374151;
}
```

And add these JavaScript modifications for keyboard navigation:

```javascript
// Add keyboard support (Escape key to close)
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && overlay.classList.contains('show')) {
    close();
  }
});

// Add proper focus management
const trapFocus = () => {
  // Focus trap implementation
  // ...
};
```

## Integration with CSS Frameworks

### Tailwind CSS

If you're using Tailwind CSS, you can leverage utility classes:

```html
<style>
  /* Minimal overrides needed */
  .una-alert {
    @apply bg-white rounded-xl shadow-xl max-w-md w-full;
  }
  .una-alert-btn {
    @apply py-3 px-4 font-medium rounded-lg transition-colors;
  }
  .una-alert-btn-confirm {
    @apply bg-indigo-600 text-white hover:bg-indigo-700;
  }
  /* ... more overrides */
</style>
```

### Bootstrap

For Bootstrap integration:

```css
/* Bootstrap-like styling */
.una-alert {
  border-radius: 0.375rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.una-alert-btn {
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
}

.una-alert-btn-confirm {
  background-color: #0d6efd;
}

.una-toast {
  border-radius: 0.25rem;
}
```

## Conclusion

Una-Alert's flexible design allows for extensive customization to match any project's visual style. By overriding CSS styles and extending the JavaScript functionality, you can create a seamless integration with your application's design system.

For more examples and advanced usage, refer to the documentation and demo pages.