import 'bootstrap/dist/css/bootstrap.min.css'; // Impor Bootstrap CSS
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/SplashScreen.css";

const SplashScreen = () => {
  const [loadingDone, setLoadingDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingDone(true);
      navigate('/welcome'); // Mengarahkan ke halaman '/welcome'
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen d-flex justify-content-center align-items-center">
      {!loadingDone && (
        <div className="loading-container bg-white rounded p-2" style={{ width: '80%', maxWidth: '600px' }}>
          <div className="loading-bar bg-light rounded position-relative" style={{ height: '10px' }}>
            <div className="loading-progress bg-info rounded" style={{ width: '0%', height: '100%' }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;
