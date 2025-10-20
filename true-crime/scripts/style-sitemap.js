/*
  Post-build step: add xml-stylesheet processing instruction to generated sitemap XMLs
  This is cosmetic for browsers; search engines ignore the stylesheet.
*/
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve(process.cwd(), 'dist');

function addStylesheetToFile(filePath) {
  try {
    let xml = fs.readFileSync(filePath, 'utf8');
    const pi = "<?xml-stylesheet type=\"text/xsl\" href=\"/sitemap.xsl\"?>\n";

    if (xml.includes('xml-stylesheet')) return; // already styled

    if (xml.startsWith('<?xml')) {
      const idx = xml.indexOf('\n');
      if (idx !== -1) {
        xml = xml.slice(0, idx + 1) + pi + xml.slice(idx + 1);
      } else {
        xml = xml + '\n' + pi;
      }
    } else {
      xml = `<?xml version="1.0" encoding="UTF-8"?>\n` + pi + xml;
    }
    fs.writeFileSync(filePath, xml, 'utf8');
    console.log(`Styled sitemap: ${path.basename(filePath)}`);
  } catch (err) {
    console.error(`Failed to style ${filePath}:`, err.message);
  }
}

function run() {
  if (!fs.existsSync(distDir)) {
    console.error('dist/ not found. Run the build first.');
    process.exit(0);
  }
  const entries = fs.readdirSync(distDir);
  for (const name of entries) {
    if (name.startsWith('sitemap') && name.endsWith('.xml')) {
      addStylesheetToFile(path.join(distDir, name));
    }
  }
}

run();


