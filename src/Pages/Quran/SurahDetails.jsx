import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SurahDetails = () => {
  const { surahNumber } = useParams();
  const [surah, setSurah] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch Surah details");
        return res.json();
      })
      .then((data) => {
        setSurah(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Could not load Surah details");
        setLoading(false);
        console.log(err);
      });
  }, [surahNumber]);

  if (loading) return <div className="text-center mt-10">Loading Surah...</div>;
  if (error)
    return <div className="text-center text-red-600 mt-10">{error}</div>;

  return (
    <div className="p-24 w-full mx-auto bg-white shadow rounded">
      <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
        {surah.englishName} ({surah.name})
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Revealed in {surah.revelationType}
      </p>

      <div className="space-y-6">
        {surah.ayahs.map((ayah) => (
          <div key={ayah.numberInSurah} className="border-b pb-4">
            <div className="text-right text-2xl font-arabic text-green-800 mb-2">
              {ayah.text}
            </div>
            <p className="text-sm text-gray-500">Verse {ayah.numberInSurah}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/quran"
          className="btn btn-neutral rounded-lg bg-gradient-to-r from-[#04a6f6] to-[#53ed83]"
        >
          Back to Surah List
        </Link>
      </div>
    </div>
  );
};

export default SurahDetails;
