// src/pages/SurahList.jsx
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
      .then((res) => res.json())
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
    localStorage.setItem("redirectAfterLogin", `/surah/${selectedSurah}`);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 pt-24 px-6 md:px-24 pb-20">
      <h2 className="text-4xl font-extrabold text-center text-green-700 mb-10">
        📖 Explore the Surahs
      </h2>

      {error && <div className="text-center text-red-600">{error}</div>}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loadingSurahs
          ? Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-white border border-green-200 rounded-xl shadow-md p-5 space-y-4"
              >
                <div className="h-4 bg-green-200 rounded w-1/2"></div>
                <div className="h-4 bg-green-100 rounded w-2/3"></div>
                <div className="h-6 bg-green-300 rounded w-full text-right"></div>
              </div>
            ))
          : surahs.map((surah) => (
              <div
                key={surah.number}
                onClick={() => handleSurahClick(surah.number)}
                className="cursor-pointer p-5 bg-white border border-green-200 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transform transition duration-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xl font-semibold text-green-800">
                    {surah.number}. {surah.englishName}
                  </span>
                  <span className="text-sm text-green-500">
                    {surah.englishNameTranslation}
                  </span>
                </div>
                <div className="text-right text-green-700 text-2xl font-arabic">
                  {surah.name}
                </div>
              </div>
            ))}
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-sm w-full shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-center text-green-700">
              🔐 Login Required
            </h3>
            <p className="text-gray-700 mb-6 text-center">
              You must login to view this Surah.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleLoginRedirect}
                className="btn btn-neutral rounded-lg bg-gradient-to-r from-[#04a6f6] to-[#53ed83]"
              >
                Go to Login
              </button>
              <button
                onClick={() => setShowLoginModal(false)}
                className="btn btn-neutral btn-outline rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurahList;
