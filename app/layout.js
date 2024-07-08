import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import BootstrapLoader from '../components/BootstrapLoader';

export const metadata = {
  title: 'Healthy Living',
  description: 'A site dedicated to promoting healthy living',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BootstrapLoader />
        {children}
      </body>
    </html>
  );
}
