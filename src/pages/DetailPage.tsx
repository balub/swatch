import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import FilamentDetail from '../components/FilamentDetail';
import { getFilamentById } from '../data/filaments';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const filament = id ? getFilamentById(id) : undefined;
  
  useEffect(() => {
    if (!filament && id) {
      navigate('/');
    }
  }, [filament, id, navigate]);
  
  if (!filament) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <FilamentDetail filament={filament} />
      </main>
    </div>
  );
};

export default DetailPage;
