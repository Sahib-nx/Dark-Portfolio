import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export const metadata = {
  title: 'Developer Portfolio',
  description: 'A modern portfolio showcasing my skills and projects as a full-stack developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}