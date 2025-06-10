
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { Material, Finish } from '../types';

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (searchTerm: string) => void;
  selectedMaterials: Material[];
  onMaterialToggle: (material: Material) => void;
  selectedFinishes: Finish[];
  onFinishToggle: (finish: Finish) => void;
  onClearFilters: () => void;
}

const materials: Material[] = ['PLA', 'PLA+', 'PETG', 'ABS', 'TPU', 'ASA'];
const finishes: Finish[] = ['Matte', 'Silk', 'Glossy', 'Metallic'];

const FilterBar = ({ searchTerm, onSearchChange, selectedMaterials, onMaterialToggle, selectedFinishes, onFinishToggle, onClearFilters }: FilterBarProps) => {
  const hasActiveFilters = selectedMaterials.length > 0 || selectedFinishes.length > 0 || searchTerm;

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-card">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Search filaments..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full"
          />
        </div>
        {hasActiveFilters && (
          <Button variant="outline" onClick={onClearFilters}>
            <X className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        )}
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-sm font-medium mb-2">Materials</h3>
          <div className="flex flex-wrap gap-2">
            {materials.map(material => (
              <Badge
                key={material}
                variant={selectedMaterials.includes(material) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => onMaterialToggle(material)}
              >
                {material}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Finishes</h3>
          <div className="flex flex-wrap gap-2">
            {finishes.map(finish => (
              <Badge
                key={finish}
                variant={selectedFinishes.includes(finish) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => onFinishToggle(finish)}
              >
                {finish}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
