// mobile-redirect.js
(function () {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobileOS = /android|iphone|ipad|ipod/i.test(userAgent);
  
    const path = window.location.pathname;
    
    // Extract filename or fallback to "index.html"
    let filename = path.split('/').pop() || "index.html";
    const isMobilePage = filename.includes("-mobile");
  
    // Get base filename without -mobile
    const baseName = filename.replace("-mobile", "");
    
    // Get path prefix (i.e., the folder path)
    const prefix = path.endsWith('/') ? path : path.slice(0, path.lastIndexOf('/') + 1);
  
    // Redirect logic
    if (isMobileOS && !isMobilePage) {
      window.location.href = prefix + baseName.replace(/(\.html)?$/, "-mobile.html");
    } else if (!isMobileOS && isMobilePage) {
      window.location.href = prefix + baseName;
    }
  })();
  