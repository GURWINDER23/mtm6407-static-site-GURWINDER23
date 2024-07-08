// app/page.js
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="container text-center my-5">
        <h1 className="display-4">Welcome to Healthy Living</h1>
        <img src="https://images.pexels.com/photos/5946092/pexels-photo-5946092.jpeg?auto=compress&cs=tinysrgb&w=600" className="header-image img-fluid my-4" alt="Healthy Living" />
        <p className="lead">Explore our tips and advice on maintaining a healthy lifestyle. Navigate through the different sections to learn more about nutrition, exercise, mental health, sleep, and hydration.</p>
      </div>
    </div>
  );
}
