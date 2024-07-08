// app/exercise/page.js
import Nav from '../../components/Nav';

export default function Exercise() {
  return (
    <div>
      <Nav />
      <div className="container my-5">
        <h1 className="display-4">Exercise</h1>
        <img src="https://images.pexels.com/photos/3838937/pexels-photo-3838937.jpeg?auto=compress&cs=tinysrgb&w=600" className="page-image img-fluid my-4" alt="Exercise" />
        <div className="row">
          <div className="col-md-6">
            <h2>Benefits of Regular Exercise</h2>
            <ul>
              <li>Improves muscle strength and boosts endurance</li>
              <li>Helps maintain a healthy weight</li>
              <li>Reduces the risk of chronic diseases</li>
              <li>Improves mental health and mood</li>
              <li>Enhances sleep quality</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h2>Types of Exercise</h2>
            <ul>
              <li>Aerobic exercises such as walking, running, and cycling</li>
              <li>Strength training exercises such as weightlifting</li>
              <li>Flexibility exercises such as stretching and yoga</li>
              <li>Balance exercises to improve stability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
