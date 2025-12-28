import Navbar from "../components/Navbar";
import "./PackagesPage.css";
  import { useNavigate } from "react-router-dom";
function PackagesPage() {
   const navigate = useNavigate(); 
   const routes = [
  "/family-package",
  "/spiritual-package",
  "/adventure-package",
  "/couple-package",
  "/friends-package",
  "/students-package",
  "/children-package",
  "/historical-package",
  "/women-package"
];
   const packages  = [
  { id: 1, title: "Family Package", price: "₹4,999", img: "./images/bgimg.png" },
  { id: 2, title: "Spiritual Package", price: "₹4,999", img: "./images/spiritualpack.png" },
  { id: 3, title: "Adventure Package", price: "₹10,000", img: "./images/adventurespack.png" },
  { id: 4, title: "Couple Package", price: "₹8,000", img: "./images/couplepack.png" },
  { id: 5, title: "Friends Package", price: "₹9,700", img: "./images/friendspack.png" },
  { id: 6, title: "Students Package", price: "₹8,000", img: "./images/studentspack.png" },
  { id: 7, title: "Children Package", price: "₹8,000", img: "./images/childrenPackage.png" },
  { id: 8, title: "Historical Package", price: "₹6,500", img: "./images/historicalpack.png" },
  { id: 9, title: "Women Package", price: "₹6,500", img: "./images/women'spack.png" },
];

 
  return (
     <div className="packages-page">
      <Navbar />
      <div className="particles1"></div>
 
      {/* HEADER */}
      <header className="page-header1">
        <div className="header-overlay1">
          <h1>Explore Hyderabad</h1>
          <p>Plan • Travel • Experience the Royal Heritage</p>
        </div>
      </header>
 
      {/* PACKAGES GRID */}
      <div className="container1">
        <div className="grid1">
          {packages.map((pkg, idx) => (
            <div className="package-card1" key={idx}>
              <div className="img-container1">
                <img src={pkg.img} alt={pkg.title} />
              </div>
              <div className="card-content1">
                <h3>{pkg.title}</h3>
                <p>{pkg.price}</p>
                <button onClick={() => navigate(routes[idx])}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default PackagesPage;