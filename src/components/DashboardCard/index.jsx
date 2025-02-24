import "./styles.scss";
import locationData from "../../constants/LocationData";
import edit from "../../assets/images/Dashboard/d-card-1.png";
import del from "../../assets/images/Dashboard/d-card-2.png";

const DashboardCard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Booking List</h1>
      <h2 className="dashboard-subtitle">Lorem ipsum lorem uojuhn</h2>
      <div className="dashboard-card-container">
        {locationData
          .slice(0, 3)
          .map(
            ({
              id,
              img,
              title,
              subtitle,
              date,
              day,
              address,
              initial,
              total,
            }) => (
              <div key={id} className="dashboard-card">
                <div className="image-container">
                  <img src={img} alt={title} className="dashboard-card-image" />
                  {id === 1 && <p className="image-text">$200 per night</p>}
                </div>
                <h1 className="dashboard-card-title">{title}</h1>
                <h2 className="dashboard-card-subtitle">{subtitle}</h2>
                <div className="card-details">
                  <div className="card-header">
                    <p className="date">{date}</p>
                    <div className="icon">
                      <img className="edit-icon" src={edit} alt="edit" />
                      <img className="delete-icon" src={del} alt="delete" />
                    </div>
                  </div>
                  <p className="day">{day}</p>
                  <p className="address">{address}</p>
                  <p className="initial">{initial}</p>
                  <p className="total">{total}</p>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default DashboardCard;
