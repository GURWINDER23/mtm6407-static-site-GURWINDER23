// app/nutrition/page.js
import Nav from '../../components/Nav';

export default function Nutrition() {
  return (
    <div>
      <Nav />
      <div className="container my-5">
        <h1 className="display-4">Nutrition</h1>
        <img src="https://images.pexels.com/photos/4551567/pexels-photo-4551567.jpeg?auto=compress&cs=tinysrgb&w=600" className="page-image img-fluid my-4" alt="Nutrition" />
        <div className="row">
          <div className="col-md-6">
            <h2>Importance of Balanced Diet</h2>
            <p>A balanced diet provides the necessary vitamins, minerals, and nutrients to keep the body and mind healthy and strong. It helps in maintaining optimal weight, improves brain function, and boosts the immune system.</p>
          </div>
          <div className="col-md-6">
            <h2>Tips for Healthy Eating</h2>
            <ul>
              <li>Include a variety of foods in your diet</li>
              <li>Eat plenty of fruits and vegetables</li>
              <li>Choose whole grains over refined grains</li>
              <li>Limit sugar and salt intake</li>
              <li>Stay hydrated by drinking plenty of water</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
