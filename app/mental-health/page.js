// app/mental-health/page.js
import Nav from '../../components/Nav';

export default function MentalHealth() {
  return (
    <div>
      <Nav />
      <div className="container my-5">
        <h1 className="display-4">Mental Health</h1>
        <img src="https://images.pexels.com/photos/7468240/pexels-photo-7468240.jpeg?auto=compress&cs=tinysrgb&w=600" className="page-image img-fluid my-4" alt="Mental Health" />
        <div className="row">
          <div className="col-md-6">
            <h2>Importance of Mental Health</h2>
            <p>Good mental health and wellbeing are fundamental components of living a happy and productive life. It's important to take steps to improve and maintain mental health, such as practicing mindfulness, connecting with others, and seeking professional help when needed.</p>
          </div>
          <div className="col-md-6">
            <h2>Tips for Maintaining Mental Health</h2>
            <ul>
              <li>Stay connected with friends and family</li>
              <li>Engage in regular physical activity</li>
              <li>Practice mindfulness and meditation</li>
              <li>Seek professional help when needed</li>
              <li>Get enough sleep and maintain a healthy diet</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
