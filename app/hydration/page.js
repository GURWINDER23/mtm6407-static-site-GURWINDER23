// app/hydration/page.js
import Nav from '../../components/Nav';

export default function Hydration() {
  return (
    <div>
      <Nav />
      <div className="container my-5">
        <h1 className="display-4">Hydration</h1>
        <img src="https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600" className="page-image img-fluid my-4" alt="Hydration" />
        <div className="row">
          <div className="col-md-6">
            <h2>Importance of Staying Hydrated</h2>
            <p>Staying hydrated is crucial for overall health. Water is the best fluid for hydration, but other beverages and high-water-content foods can also contribute. It's important to drink enough fluids throughout the day, especially during physical activity or in hot weather.</p>
          </div>
          <div className="col-md-6">
            <h2>Tips for Staying Hydrated</h2>
            <ul>
              <li>Drink water regularly throughout the day</li>
              <li>Carry a water bottle with you</li>
              <li>Eat fruits and vegetables with high water content</li>
              <li>Avoid sugary drinks and excessive caffeine</li>
              <li>Monitor your urine color to gauge hydration levels</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
