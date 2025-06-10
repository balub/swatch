import React from 'react';
import { Filament } from '../types';
import FilamentCard from './FilamentCard';
import { Package } from 'lucide-react';

interface FilamentGridProps {
  filaments: Filament[];
}

const FilamentGrid = ({ filaments }: FilamentGridProps) => {
  if (filaments.length === 0) {
    return (
      <div className="text-center py-16">
        <Package className="mx-auto w-16 h-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold mb-2">No filaments found</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Try adjusting your filters or search criteria to find the filaments you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filaments.map(filament => (
        <FilamentCard key={filament.id} filament={filament} />
      ))}
    </div>
  );
};

export default FilamentGrid;
