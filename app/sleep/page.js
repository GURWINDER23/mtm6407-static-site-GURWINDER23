// app/sleep/page.js
import Nav from '../../components/Nav';

export default function Sleep() {
  return (
    <div>
      <Nav />
      <div className="container my-5">
        <h1 className="display-4">Sleep</h1>
        <img src="https://images.pexels.com/photos/935777/pexels-photo-935777.jpeg?auto=compress&cs=tinysrgb&w=600" className="page-image img-fluid my-4" alt="Sleep" />
        <div className="row">
          <div className="col-md-6">
            <h2>Importance of Adequate Sleep</h2>
            <p>Getting adequate sleep is crucial for overall health. Adults typically need 7-9 hours of sleep per night. Poor sleep is linked to a higher risk of heart disease, diabetes, stroke, and mental health issues. Ensuring a consistent sleep schedule and creating a comfortable sleep environment can greatly improve sleep quality.</p>
          </div>
          <div className="col-md-6">
            <h2>Tips for Better Sleep</h2>
            <ul>
              <li>Maintain a regular sleep schedule</li>
              <li>Create a comfortable sleep environment</li>
              <li>Avoid caffeine and heavy meals before bedtime</li>
              <li>Engage in relaxing activities before sleep</li>
              <li>Limit exposure to screens and bright lights before bedtime</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
