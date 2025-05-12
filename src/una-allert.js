/**
 * Una-Alert: Modern Alert & Confirmation System
 * A lightweight, customizable alert and toast notification library
 * 
 * @version 1.0.0
 * @author Aqil Ramadhan
 * @license MIT
 */

const unaAlert = (function() {
    // Icons for different alert types
    const icons = {
        success: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>`,
        
        info: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>`,
        
        warning: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>`,
        
        error: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>`,
        
        question: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>`,
        
        close: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>`
    };
    
    // DOM Elements
    let overlay, alertEl, alertIcon, alertTitle, alertMessage, alertActions, closeBtn, toastContainer;
    
    // Current callback reference
    let currentCallback = null;
    
    // Initialize function - must be called after DOM is loaded
    const init = () => {
        // Create overlay if it doesn't exist
        if (!document.getElementById('unaAlertOverlay')) {
            // Create alert overlay
            overlay = document.createElement('div');
            overlay.id = 'unaAlertOverlay';
            overlay.className = 'una-alert-overlay';
            
            // Create alert element
            alertEl = document.createElement('div');
            alertEl.className = 'una-alert';
            
            // Create close button
            closeBtn = document.createElement('button');
            closeBtn.className = 'una-alert-btn-close';
            closeBtn.innerHTML = icons.close;
            
            // Create alert header
            const alertHeader = document.createElement('div');
            alertHeader.className = 'una-alert-header';
            
            // Create alert icon
            alertIcon = document.createElement('div');
            alertIcon.className = 'una-alert-icon';
            
            // Create alert title
            alertTitle = document.createElement('div');
            alertTitle.className = 'una-alert-title';
            
            // Create alert message
            alertMessage = document.createElement('div');
            alertMessage.className = 'una-alert-message';
            
            // Create alert actions
            alertActions = document.createElement('div');
            alertActions.className = 'una-alert-actions';
            
            // Assemble alert
            alertHeader.appendChild(alertIcon);
            alertHeader.appendChild(alertTitle);
            
            alertEl.appendChild(closeBtn);
            alertEl.appendChild(alertHeader);
            alertEl.appendChild(alertMessage);
            alertEl.appendChild(alertActions);
            
            overlay.appendChild(alertEl);
            
            // Add to document
            document.body.appendChild(overlay);
            
            // Bind close event
            closeBtn.addEventListener('click', close);
            
            // Close when clicking overlay (outside the alert)
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    close();
                }
            });
        } else {
            overlay = document.getElementById('unaAlertOverlay');
            alertEl = overlay.querySelector('.una-alert');
            alertIcon = alertEl.querySelector('.una-alert-icon');
            alertTitle = alertEl.querySelector('.una-alert-title');
            alertMessage = alertEl.querySelector('.una-alert-message');
            alertActions = alertEl.querySelector('.una-alert-actions');
            closeBtn = alertEl.querySelector('.una-alert-btn-close');
        }
        
        // Create toast container if it doesn't exist
        if (!document.getElementById('unaToastContainer')) {
            toastContainer = document.createElement('div');
            toastContainer.id = 'unaToastContainer';
            toastContainer.className = 'una-toast-container';
            document.body.appendChild(toastContainer);
        } else {
            toastContainer = document.getElementById('unaToastContainer');
        }
    };
    
    // Close alert function
    const close = () => {
        overlay.classList.remove('show');
        // Reset callback
        currentCallback = null;
    };
    
    // Show una-alert function
    const show = (type, title, message, options = {}) => {
        // Initialize if not already
        if (!overlay) init();
        
        // Set icon and title
        alertIcon.innerHTML = icons[type];
        alertTitle.textContent = title;
        alertMessage.textContent = message;
        
        // Set alert type
        alertEl.className = `una-alert una-alert-${type}`;
        
        // Set actions
        alertActions.innerHTML = `
            <button class="una-alert-btn una-alert-btn-confirm">OK</button>
        `;
        
        // Add confirm button action
        const confirmBtn = alertActions.querySelector('.una-alert-btn-confirm');
        confirmBtn.addEventListener('click', close);
        
        // Show alert
        overlay.classList.add('show');
    };
    
    // Confirm una-alert function
    const confirm = (title, message, callback, options = {}) => {
        // Initialize if not already
        if (!overlay) init();
        
        // Save callback reference
        currentCallback = callback;
        
        // Set icon and title
        alertIcon.innerHTML = icons.question;
        alertTitle.textContent = title;
        alertMessage.textContent = message;
        
        // Set alert type
        alertEl.className = `una-alert una-alert-question`;
        
        // Set actions
        const verticalButtons = options.verticalButtons ? 'vertical' : '';
        alertActions.className = `una-alert-actions ${verticalButtons}`;
        alertActions.innerHTML = `
            <button class="una-alert-btn una-alert-btn-cancel">Cancel</button>
            <button class="una-alert-btn una-alert-btn-confirm">Confirm</button>
        `;
        
        // Add button actions
        const cancelBtn = alertActions.querySelector('.una-alert-btn-cancel');
        const confirmBtn = alertActions.querySelector('.una-alert-btn-confirm');
        
        cancelBtn.addEventListener('click', close);
        confirmBtn.addEventListener('click', () => {
            close();
            if (currentCallback) {
                currentCallback();
            }
        });
        
        // Set custom button text if provided
        if (options.confirmText) {
            confirmBtn.textContent = options.confirmText;
        }
        if (options.cancelText) {
            cancelBtn.textContent = options.cancelText;
        }
        
        // Show alert
        overlay.classList.add('show');
    };
    
    // Toast notification function
    const toast = (type, title, message, duration = 4000) => {
        // Initialize if not already
        if (!toastContainer) init();
        
        // Create toast element
        const toastEl = document.createElement('div');
        toastEl.className = `una-toast una-toast-${type}`;
        
        // Set content
        toastEl.innerHTML = `
            <div class="una-toast-icon">${icons[type]}</div>
            <div class="una-toast-content">
                <div class="una-toast-title">${title}</div>
                <div class="una-toast-message">${message}</div>
            </div>
            <button class="una-toast-close">${icons.close}</button>
        `;
        
        // Add to container
        toastContainer.appendChild(toastEl);
        
        // Close toast function
        const closeToast = () => {
            toastEl.classList.add('hide');
            setTimeout(() => {
                if (toastEl.parentNode) {
                    toastEl.parentNode.removeChild(toastEl);
                }
            }, 300);
        };
        
        // Add close button event
        const closeBtn = toastEl.querySelector('.una-toast-close');
        closeBtn.addEventListener('click', closeToast);
        
        // Auto close after duration
        setTimeout(closeToast, duration);
        
        return {
            close: closeToast
        };
    };
    
    // Public API
    return {
        init,
        show,
        confirm,
        toast,
        close
    };
})();