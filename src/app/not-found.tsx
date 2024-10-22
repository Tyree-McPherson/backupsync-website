import fs from 'fs';
import path from 'path';

export default function NotFound() {
  const filePath = path.join(process.cwd(), 'public', '404.html');
  const htmlContent = fs.readFileSync(filePath, 'utf8');

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}