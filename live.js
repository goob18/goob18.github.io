(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const debugJS = urlParams.has('debugjs');
    const localPlayer = urlParams.has('localPlayer');
    const mediaDiagnostics = urlParams.has('mediaDiagnostics');

    // Paths
    const appCSS = '/app-prod.css';
    const appJS = '/app-prod.js';
    const debugPlayer = '/video/youtube/src/web/javascript/debug-tv-player-en_US.js';
    const prodPlayer = '/video/youtube/src/web/javascript/tv-player-en_US.js';

    // Load CSS
    function loadCSS(href) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = href;
        document.head.appendChild(link);
    }

    // Load JS
    function loadJS(src) {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    }

    // Inline JS
    function inlineJS(code) {
        const script = document.createElement('script');
        script.textContent = code;
        document.body.appendChild(script);
    }

    // Load main app files
    if (debugJS) {
        window.CLOSURE_NO_DEPS = true;
        loadCSS(appCSS);
        loadJS('/app-concat-bundle.js');
    } else {
        loadCSS(appCSS);
        loadJS(appJS);
    }

    // Optional: load player override
    if (localPlayer) {
        window.environment = window.environment || {};
        window.environment.player_url = debugJS ? debugPlayer : prodPlayer;
    }

    // Optional: load media diagnostics
    if (mediaDiagnostics) {
        const diagScript = debugJS
            ? '/modules/media-diagnostics-debug.js'
            : '/modules/media-diagnostics.js';
        loadJS(diagScript);
    }

    // Optional: initialization logic stub
    inlineJS(`
        if (typeof initializeApp === 'function') {
            initializeApp();
        } else {
            console.warn('initializeApp function not defined.');
        }
    `);
})();
