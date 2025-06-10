
import { Filament, Material, Finish, Tag } from '../types';

// Sample tags
export const tags: Tag[] = [
  { id: 'tag1', name: 'Brittle' },
  { id: 'tag2', name: 'Strong' },
  { id: 'tag3', name: 'Flexible' },
  { id: 'tag4', name: 'Great for Cosplay' },
  { id: 'tag5', name: 'Difficult to Print' },
  { id: 'tag6', name: 'Easy to Print' },
  { id: 'tag7', name: 'Good for Functional Parts' },
  { id: 'tag8', name: 'Good for Decorative Parts' },
  { id: 'tag9', name: 'Requires Enclosure' },
  { id: 'tag10', name: 'Odorless' },
];

// Sample filament data
export const filaments: Filament[] = [
  {
    id: 'fil1',
    name: 'Space Gray',
    brand: 'Prusament',
    material: 'PLA',
    finish: 'Matte',
    hexColor: '#2F3640',
    tags: [tags[5], tags[7]],
    projectNotes: 'Used for the Star Wars helmet project. Excellent surface finish with minimal post-processing.',
    printingBehavior: 'Prints reliably at standard PLA settings. Minimal stringing and excellent layer adhesion.',
    printSettings: {
      temperature: '215°C',
      bedTemperature: '60°C',
      speed: '50mm/s',
    },
    lastUsed: '2023-10-15',
  },
  {
    id: 'fil2',
    name: 'Galaxy Black',
    brand: 'Hatchbox',
    material: 'PLA',
    finish: 'Standard',
    hexColor: '#0F0F0F',
    tags: [tags[5], tags[6]],
    projectNotes: 'My go-to black filament for functional prints. Consistent quality and good strength.',
    printingBehavior: 'Very forgiving with temperature variations. Minimal warping even with larger prints.',
    printSettings: {
      temperature: '210°C',
      bedTemperature: '55°C',
      speed: '55mm/s',
    },
    lastUsed: '2023-11-20',
  },
  {
    id: 'fil3',
    name: 'Arctic White',
    brand: 'eSun',
    material: 'PLA+',
    finish: 'Standard',
    hexColor: '#FFFFFF',
    tags: [tags[5], tags[6]],
    projectNotes: 'Used for the desk organizer project. Good surface finish but shows dust easily.',
    printingBehavior: 'Prints well but requires slightly higher temperatures than standard PLA.',
    printSettings: {
      temperature: '220°C',
      bedTemperature: '60°C',
      speed: '50mm/s',
    },
    lastUsed: '2023-09-05',
  },
  {
    id: 'fil4',
    name: 'Cherry Red',
    brand: 'Overture',
    material: 'PETG',
    finish: 'Glossy',
    hexColor: '#C0392B',
    tags: [tags[1], tags[6]],
    projectNotes: 'Used for outdoor garden markers. Has held up well to UV exposure for 6+ months.',
    printingBehavior: 'Some stringing present. Works best with slower speeds and higher retraction.',
    printSettings: {
      temperature: '235°C',
      bedTemperature: '80°C',
      speed: '40mm/s',
      additionalNotes: 'Use 6mm retraction distance to minimize stringing',
    },
    lastUsed: '2023-08-10',
  },
  {
    id: 'fil5',
    name: 'Silky Gold',
    brand: 'CC3D',
    material: 'PLA',
    finish: 'Silk',
    hexColor: '#D4AF37',
    tags: [tags[7], tags[5]],
    projectNotes: 'Used for decorative vases and figurines. Adds a premium look to finished prints.',
    printingBehavior: 'Requires slightly higher temperatures. Tends to be more brittle than standard PLA.',
    printSettings: {
      temperature: '220°C',
      bedTemperature: '60°C',
      speed: '45mm/s',
    },
    lastUsed: '2023-12-01',
  },
  {
    id: 'fil6',
    name: 'Neon Blue',
    brand: 'Polymaker',
    material: 'PLA',
    finish: 'Standard',
    hexColor: '#3498DB',
    tags: [tags[5], tags[7]],
    projectNotes: 'Used for the desk lamp project. Color is vibrant and true to images online.',
    printingBehavior: 'Very consistent flow and minimal stringing. Good layer adhesion.',
    printSettings: {
      temperature: '210°C',
      bedTemperature: '60°C',
      speed: '50mm/s',
    },
    lastUsed: '2023-10-20',
  },
  {
    id: 'fil7',
    name: 'Matte Black',
    brand: 'Prusa',
    material: 'PETG',
    finish: 'Matte',
    hexColor: '#1A1A1A',
    tags: [tags[1], tags[6]],
    projectNotes: 'Used for functional parts that need strength. The matte finish hides layer lines well.',
    printingBehavior: 'Requires a well-calibrated first layer. Less stringing than other PETG filaments.',
    printSettings: {
      temperature: '240°C',
      bedTemperature: '85°C',
      speed: '40mm/s',
    },
    lastUsed: '2023-11-15',
  },
  {
    id: 'fil8',
    name: 'Emerald Green',
    brand: 'Atomic',
    material: 'PLA',
    finish: 'Standard',
    hexColor: '#27AE60',
    tags: [tags[5], tags[7]],
    projectNotes: 'Used for plant-related prints. Color matches well with real plants.',
    printingBehavior: 'Consistent diameter and excellent flow properties. Barely any stringing.',
    printSettings: {
      temperature: '215°C',
      bedTemperature: '60°C',
      speed: '50mm/s',
    },
    lastUsed: '2023-09-12',
  }
];

// Helper functions to filter filaments
export const getFilamentsByMaterial = (material: Material) => {
  return filaments.filter(filament => filament.material === material);
};

export const getFilamentsByBrand = (brand: string) => {
  return filaments.filter(filament => filament.brand === brand);
};

export const getFilamentsByFinish = (finish: Finish) => {
  return filaments.filter(filament => filament.finish === finish);
};

export const getFilamentsByTag = (tagId: string) => {
  return filaments.filter(filament => filament.tags.some(tag => tag.id === tagId));
};

export const getUniqueFilamentBrands = (): string[] => {
  return [...new Set(filaments.map(filament => filament.brand))];
};

export const getFilamentById = (id: string): Filament | undefined => {
  return filaments.find(filament => filament.id === id);
};
