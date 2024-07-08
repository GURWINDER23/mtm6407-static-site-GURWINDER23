// components/Nav.js
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        <Link href="/" legacyBehavior><a className="navbar-brand">Healthy Living</a></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/nutrition" legacyBehavior>
                <a className="nav-link">Nutrition</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/exercise" legacyBehavior>
                <a className="nav-link">Exercise</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mental-health" legacyBehavior>
                <a className="nav-link">Mental Health</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/sleep" legacyBehavior>
                <a className="nav-link">Sleep</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/hydration" legacyBehavior>
                <a className="nav-link">Hydration</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
