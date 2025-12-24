import React from "react";
import "./Packages.css";
import day1 from "./day1.webp";
import day2 from "./day2.jpg";
import day3 from "./day3.jpg";
import day4 from "./day4.jpg";

function KeralaPackage() {
  return (
    <div className="package-container">
      {/* HEADER */}
      <h1 className="title">
        Amazing Bhagyanagar Tour{" "}
        <span className="badge">4 Days & 3 Nights</span>
      </h1>

      <p className="location">
        📍 Wonderla Amusement Park - Butterfly Park - Snow World | ⭐⭐⭐⭐⭐
      </p>

      {/* PRICE & BOOK */}
      <div className="price-box">
        <div>
          <p className="price">
            Price Starting From :
            <span className="new"> ₹7499/-</span>
            <span className="old"> ₹9899/-</span>
          </p>

          <div className="price-breakup">
            <p>
              👨 Adult : <strong>₹7499/-</strong>
            </p>
            <p>
              🧒 Children : <strong>₹5499/-</strong>
            </p>
          </div>

          <div className="icons">
            <span>🛏️</span>
            <span>🍴</span>
            <span>🚗</span>
            <span>🔭</span>
          </div>
        </div>

        {/* BOOK NOW BUTTON */}
        <button
          className="book-btn"
          onClick={() =>
            window.open(
 "https://wa.me/919876543210?text=I%20want%20to%20book%20the%20Bhagyanagar%204%20Days%203%20Nights%20Tour",
              "_blank"
            )
          }
        >
          BOOK NOW
        </button>
      </div>

      {/* OVERVIEW */}
      <section className="overview">
        <h2>Overview</h2>
        <p>
          This Children’s Special Hyderabad Tour is designed to offer a perfect
          mix of fun, learning, and relaxation for kids and families. The
          package covers Wonderla Amusement Park, Ramoji Film City, Nehru
          Zoological Park, Snow World, and interactive science centers. Each day
          is planned with comfortable travel time, safe activities, and engaging
          experiences that keep children entertained while allowing parents to
          relax.
        </p>
      </section>

      {/* ITINERARY */}
      <section className="itinerary">
        <h2>PACKAGE ITINERARY</h2>

        <div className="itinerary-grid">
          <div className="day-card">
            <img src={day1} alt="Day 1" />
            <div>
              <span className="day">Day 1</span>
              <h3>Arrival → Hyderabad City</h3>
              <p>
                Arrival at Hyderabad. Visit Birla Science Centre and Birla
                Mandir. Overnight stay.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img src={day2} alt="Day 2" />
            <div>
              <span className="day">Day 2</span>
              <h3>Hyderabad → Ramoji Film City</h3>
              <p>
                Full day visit to Ramoji Film City with shows and attractions.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img src={day3} alt="Day 3" />
            <div>
              <span className="day">Day 3</span>
              <h3>Zoo Park → Mir Alam</h3>
              <p>Visit Nehru Zoological Park and relax at Mir Alam Park.</p>
            </div>
          </div>

          <div className="day-card">
            <img src={day4} alt="Day 4" />
            <div>
              <span className="day">Day 4</span>
              <h3>Wonderla → Snow World → Departure</h3>
              <p>
                Enjoy Wonderla rides, Snow World, Hussain Sagar boat ride and
                departure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KeralaPackage;
