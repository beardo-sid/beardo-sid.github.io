# Siddharth Srivastava Portfolio - GitHub Pages Ready

Static portfolio website ready for the `beardo-sid.github.io` GitHub Pages repository.

## What is included

- `index.html` - homepage
- `projects.html` - selected backend projects and impact work
- `work.html` - experience timeline
- `about.html` - profile, skills, and engineering strengths
- `resume.html` - resume preview and PDF download
- `contact.html` - static contact page with mailto form
- `assets/` - CSS, JavaScript, resume PDF, resume preview images, favicon, and SVG graphics
- `.nojekyll` - tells GitHub Pages to publish the static files directly
- `404.html` - simple not-found page
- `robots.txt` and `sitemap.xml` - basic search-engine files for the GitHub Pages URL

## Deploy to GitHub Pages

1. Create or open the repository named exactly `beardo-sid.github.io`.
2. Upload all files and folders from this directory into the repository root. Do not upload this directory as a nested folder.
3. Commit the files to the default branch, usually `main`.
4. Go to repository **Settings > Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then save.
7. Wait a few minutes for GitHub Pages to publish.

## Local preview

You can open `index.html` directly, or run:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## Notes

This is a pure static website. There is no Node.js, npm, React, database, or build step required.
