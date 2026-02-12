// Frontend API Configuration
// This file centralizes API endpoint configuration for different environments

const getApiBaseUrl = () => {
    // Check if we're in production (Netlify)
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        // In production, API is served from the same domain via Netlify redirects
        return window.location.origin;
    }

    // Local development - use environment variable or default
    return import.meta.env.VITE_API_URL || 'http://localhost:5000';
};

const API_BASE_URL = getApiBaseUrl();

console.log('[API Config] Base URL:', API_BASE_URL);
console.log('[API Config] Environment:', import.meta.env.MODE);

export default API_BASE_URL;
