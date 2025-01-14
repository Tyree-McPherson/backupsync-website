// "use client";

// import Image from "next/image";
// import styles from "./page.module.css";
import fs from 'fs';
import path from 'path';
// import HomePage from './components/home-page';

export default function Home() {
  const filePath = path.join(process.cwd(), 'public', 'index.html');
  const htmlContent = fs.readFileSync(filePath, 'utf8');

  return (
    // <HomePage />
    // <div></div>
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}