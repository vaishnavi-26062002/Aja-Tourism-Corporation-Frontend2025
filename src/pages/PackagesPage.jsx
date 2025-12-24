import Navbar from "../components/Navbar";
//import "./DashboardPage.css";
import { useNavigate } from "react-router-dom";

function PackagesPage() {
  const navigate = useNavigate();

  const handleViewDetails = (packageId) => {
    navigate("/bookings", {
      state: { packageId },
    });
  };

  return (
    <>
      <Navbar />

      {/* ================= CAROUSEL ================= */}
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Chowmahalla_Palace_-_Khilwat_Mubarak.jpg"
              className="d-block w-100"
              alt="Chowmahalla Palace"
            />
            <div className="carousel-caption">
              <h5>Chowmahalla Palace</h5>
              <p>The Royal heritage of Hyderabad</p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Forte_di_golconda%2C_vedute_da_est_04.jpg"
              className="d-block w-100"
              alt="Golconda Fort"
            />
            <div className="carousel-caption">
              <h5>Golconda Fort</h5>
              <p>Majestic hilltop fortress with rich history</p>
            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* ================= TITLE ================= */}
      <div className="container mt-4 text-center">
        <h1 className="fw-bold">Plan • Travel • Experience</h1>
        <p className="text-muted">
          Discover places, plan trips, and travel smarter with AJA Tourism
        </p>
      </div>

      {/* ================= PACKAGES ================= */}
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">

          {/* FAMILY */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Forte_di_golconda%2C_vedute_da_est_04.jpg"
                className="card-img-top"
                alt="Family Package"
              />
              <div className="card-body">
                <h5 className="card-title">Family Package</h5>
                <p className="card-text">Price - ₹4,999</p>
                <button
                  className="btn btn-success"
                  onClick={() => handleViewDetails(1)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* FRIENDS */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://media.istockphoto.com/id/825421318/photo/statue-of-buddha.jpg"
                className="card-img-top"
                alt="Friends Package"
              />
              <div className="card-body">
                <h5 className="card-title">Friends</h5>
                <p className="card-text">Price - ₹9,700</p>
                <button
                  className="btn btn-success"
                  onClick={() => handleViewDetails(2)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* STUDENTS */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://www.qutbshahiheritagepark.org/storage/common-section/01-2-24072401345419.jpg"
                className="card-img-top"
                alt="Students Package"
              />
              <div className="card-body">
                <h5 className="card-title">Students</h5>
                <p className="card-text">Price - ₹8,000</p>
                <button
                  className="btn btn-success"
                  onClick={() => handleViewDetails(3)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* COUPLE */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Chowmahalla_Palace_-_Khilwat_Mubarak.jpg"
                className="card-img-top"
                alt="Couple Package"
              />
              <div className="card-body">
                <h5 className="card-title">Couple</h5>
                <p className="card-text">Price - ₹8,000</p>
                <button
                  className="btn btn-success"
                  onClick={() => handleViewDetails(4)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default PackagesPage;
