import React, { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FilamentDetail from "../components/FilamentDetail";
import { useFilamentData } from "../hooks/useFilamentData";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { filaments, loading, error } = useFilamentData();

  const filament = useMemo(() => {
    return filaments.find((f) => f.id === id);
  }, [filaments, id]);

  useEffect(() => {
    if (!loading && !filament && id) {
      navigate("/");
    }
  }, [filament, id, navigate, loading]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading filament details...</p>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <div className="text-destructive mb-4">⚠️</div>
            <h3 className="text-xl font-semibold mb-2">Error Loading Data</h3>
            <p className="text-muted-foreground">{error}</p>
          </div>
        </main>
      </div>
    );
  }

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
