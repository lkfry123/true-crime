# Verify Google Tag Manager (GT-WKGKSBBS)

1) Open Tag Assistant at https://tagassistant.google.com/ and click Preview.
2) Enter site URL: https://<YOUR_NETLIFY_DOMAIN>/gtm-test.html and Start.
   - Expect: Container GT-WKGKSBBS loads. No GA4 gtag in page source (GA4 fires via GTM).
3) In the same preview session, navigate to a normal page (e.g., /blog/ed-gein-timeline-key-events/).
   - Expect: GTM loads once; GA4 tag fires via GTM.
4) If blocked, check CSP headers. We set:
   - script-src: self, https://www.googletagmanager.com, https://www.google-analytics.com
   - connect-src: self, https://www.google-analytics.com, https://www.googletagmanager.com
   - frame-src: https://www.googletagmanager.com
5) Publish the GTM container and repeat Preview if needed.

Notes
- Do not add gtag.js or gtag('config') in code; GA4 runs from GTM.
- All pages use src/layouts/Base.astro, which injects GTM head/body once per page.
