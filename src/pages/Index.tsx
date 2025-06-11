import { useState, useMemo } from "react";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import FilamentGrid from "../components/FilamentGrid";
import { useFilamentData } from "../hooks/useFilamentData";
import type { Material, Finish } from "@/types";

const Index = () => {
  const { filaments, loading, error } = useFilamentData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMaterials, setSelectedMaterials] = useState<Material[]>([]);
  const [selectedFinishes, setSelectedFinishes] = useState<Finish[]>([]);

  const handleMaterialToggle = (material: Material) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };

  const handleFinishToggle = (finish: Finish) => {
    setSelectedFinishes((prev) =>
      prev.includes(finish)
        ? prev.filter((f) => f !== finish)
        : [...prev, finish]
    );
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedMaterials([]);
    setSelectedFinishes([]);
  };

  const filteredFilaments = useMemo(() => {
    let result = [...filaments];

    if (searchTerm) {
      result = result.filter(
        (f) =>
          f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          f.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          f.material.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((f) => selectedMaterials.includes(f.material));
    }

    if (selectedFinishes.length > 0) {
      result = result.filter((f) => selectedFinishes.includes(f.finish));
    }

    return result;
  }, [filaments, searchTerm, selectedMaterials, selectedFinishes]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Filament Archive</h1>
            <p className="text-muted-foreground">
              Your personal collection of 3D printing filament swatches and
              notes.
            </p>
          </div>

          <FilterBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedMaterials={selectedMaterials}
            onMaterialToggle={handleMaterialToggle}
            selectedFinishes={selectedFinishes}
            onFinishToggle={handleFinishToggle}
            onClearFilters={handleClearFilters}
          />

          {loading ? (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading filaments...</p>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <div className="text-destructive mb-4">⚠️</div>
              <h3 className="text-xl font-semibold mb-2">Error Loading Data</h3>
              <p className="text-muted-foreground mb-4">{error}</p>
              <p className="text-sm text-muted-foreground">
                Make sure your JSON file is available at `/data/filaments.json`
              </p>
            </div>
          ) : (
            <FilamentGrid filaments={filteredFilaments} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
