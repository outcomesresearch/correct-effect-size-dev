import { useEffect } from "react";
import { useLocation } from "react-router";

export default function HeadMeta() {
  const location = useLocation();

  useEffect(() => {
    // Use the current full URL from the browser
    const fullUrl = window.location.href;
    
    // Update og:url meta tag
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", fullUrl);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);
  }, [location.pathname]);

  return null;
}

