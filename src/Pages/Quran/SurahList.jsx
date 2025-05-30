import React, { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const SurahList = () => {
  const [surahs, setSurahs] = useState([]);
  const [loadingSurahs, setLoadingSurahs] = useState(true);
  const [error, setError] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedSurah, setSelectedSurah] = useState(null);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch Surahs");
        return res.json();
      })
      .then((data) => {
        setSurahs(data.data);
        setLoadingSurahs(false);
      })
      .catch(() => {
        setError("Could not load Surah list.");
        setLoadingSurahs(false);
      });
  }, []);

  const handleSurahClick = (surahNumber) => {
    if (!user) {
      setSelectedSurah(surahNumber);
      setShowLoginModal(true);
    } else {
      navigate(`/surah/${surahNumber}`);
    }
  };

  const handleLoginRedirect = () => {
    // Save the surah to localStorage or sessionStorage to redirect after login
    localStorage.setItem("redirectAfterLogin", `/surah/${selectedSurah}`);
    navigate("/login");
  };

  if (loadingSurahs) return <div>Loading Surahs...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Quran Surahs</h2>

      <div className="grid grid-cols-2 gap-6">
        {surahs.map((surah) => (
          <div
            key={surah.number}
            onClick={() => handleSurahClick(surah.number)}
            className="cursor-pointer p-4 border rounded-lg shadow hover:bg-green-100 transition"
          >
            <div className="text-xl font-semibold">
              {surah.number}. {surah.englishName}
            </div>
            <div className="text-right text-green-700 text-lg">
              {surah.name}
            </div>
          </div>
        ))}
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded p-6 max-w-sm w-full text-center shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Login Required</h3>
            <p className="mb-6">You must login to view this Surah.</p>
            <button
              onClick={handleLoginRedirect}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Go to Login
            </button>
            <button
              onClick={() => setShowLoginModal(false)}
              className="ml-4 text-gray-500 hover:text-gray-700 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurahList;
