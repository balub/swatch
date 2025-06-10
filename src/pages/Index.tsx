import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import FilamentGrid from '../components/FilamentGrid';
import { filaments } from '../data/filaments';
import { Material, Finish } from '../types';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState<Material[]>([]);
  const [selectedFinishes, setSelectedFinishes] = useState<Finish[]>([]);

  const handleMaterialToggle = (material: Material) => {
    setSelectedMaterials(prev =>
      prev.includes(material) ? prev.filter(m => m !== material) : [...prev, material]
    );
  };

  const handleFinishToggle = (finish: Finish) => {
    setSelectedFinishes(prev =>
      prev.includes(finish) ? prev.filter(f => f !== finish) : [...prev, finish]
    );
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedMaterials([]);
    setSelectedFinishes([]);
  };

  const filteredFilaments = useMemo(() => {
    let result = [...filaments];

    if (searchTerm) {
      result = result.filter(f =>
        f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.material.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedMaterials.length > 0) {
      result = result.filter(f => selectedMaterials.includes(f.material));
    }

    if (selectedFinishes.length > 0) {
      result = result.filter(f => selectedFinishes.includes(f.finish));
    }

    return result;
  }, [searchTerm, selectedMaterials, selectedFinishes]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Filament Archive</h1>
            <p className="text-muted-foreground">
              Your personal collection of 3D printing filament swatches and notes.
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
          
          <FilamentGrid filaments={filteredFilaments} />
        </div>
      </main>
    </div>
  );
};

export default Index;
