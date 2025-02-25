// src/components/CatComponent.tsx
import React, { useState, useEffect } from 'react';
import '../style/CatComponent.css';
import { CatData } from '../interfaces/ICatData';
import { fetchCatData } from '../api/CatApi'; // <-- Added import

const CatComponent: React.FC = () => {
  const [catData, setCatData] = useState<CatData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadCatData = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCatData();
      setCatData(data);
    } catch (err) {
      setError("Error fetching cat data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCatData();
  }, []);

  return (
    <div className="cat-container">
      <h1>Random Cat Facts</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {catData && !loading && !error && (
        <>
          <img
            src={catData.imageUrl}
            alt="A cute cat"
            className="cat-image"
          />
          <p className="cat-fact">{catData.fact}</p>
          <button
            onClick={loadCatData}
            className="refresh-button"
            aria-label="Refresh cat fact and image"
          >
            Refresh
          </button>
        </>
      )}
    </div>
  );
};

export default CatComponent;