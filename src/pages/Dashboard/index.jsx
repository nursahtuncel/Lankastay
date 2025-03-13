import "./styles.scss";
import DashboardSection from "../../components/DashboardSection";
import ListHotelComponent from "../../components/ListHotelComponent";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <DashboardSection />
      <ListHotelComponent />
    </div>
  );
};

export default Dashboard;
