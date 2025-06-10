import { Filament, Material, Finish, Tag } from "../types";

// Sample tags
export const tags: Tag[] = [
  { id: "tag1", name: "Brittle" },
  { id: "tag2", name: "Strong" },
  { id: "tag3", name: "Flexible" },
  { id: "tag4", name: "Great for Cosplay" },
  { id: "tag5", name: "Difficult to Print" },
  { id: "tag6", name: "Easy to Print" },
  { id: "tag7", name: "Good for Functional Parts" },
  { id: "tag8", name: "Good for Decorative Parts" },
  { id: "tag9", name: "Requires Enclosure" },
  { id: "tag10", name: "Odorless" },
];

// Sample filament data
export const filaments: Filament[] = [
  {
    id: "fil1",
    name: "Space Gray",
    brand: "Prusament",
    material: "PLA",
    finish: "Matte",
    hexColor: "#2F3640",
    tags: [tags[5], tags[7]],
    printingBehavior:
      "Prints reliably at standard PLA settings. Minimal stringing and excellent layer adhesion.",
  },
  {
    id: "fil2",
    name: "Galaxy Black",
    brand: "Hatchbox",
    material: "PLA",
    finish: "Matte",
    hexColor: "#0F0F0F",
    tags: [tags[5], tags[6]],
    printingBehavior:
      "Very forgiving with temperature variations. Minimal warping even with larger prints.",
  },
  {
    id: "fil3",
    name: "Arctic White",
    brand: "eSun",
    material: "PLA+",
    finish: "Matte",
    hexColor: "#FFFFFF",
    tags: [tags[5], tags[6]],
    printingBehavior:
      "Prints well but requires slightly higher temperatures than standard PLA.",
  },
  {
    id: "fil4",
    name: "Cherry Red",
    brand: "Overture",
    material: "PETG",
    finish: "Glossy",
    hexColor: "#C0392B",
    tags: [tags[1], tags[6]],
    printingBehavior:
      "Some stringing present. Works best with slower speeds and higher retraction.",
  },
  {
    id: "fil5",
    name: "Silky Gold",
    brand: "CC3D",
    material: "PLA",
    finish: "Silk",
    hexColor: "#D4AF37",
    tags: [tags[7], tags[5]],
    printingBehavior:
      "Requires slightly higher temperatures. Tends to be more brittle than standard PLA.",
  },
  {
    id: "fil6",
    name: "Neon Blue",
    brand: "Polymaker",
    material: "PLA",
    finish: "Matte",
    hexColor: "#3498DB",
    tags: [tags[5], tags[7]],
    printingBehavior:
      "Very consistent flow and minimal stringing. Good layer adhesion.",
  },
  {
    id: "fil7",
    name: "Matte Black",
    brand: "Prusa",
    material: "PETG",
    finish: "Matte",
    hexColor: "#1A1A1A",
    tags: [tags[1], tags[6]],
    printingBehavior:
      "Requires a well-calibrated first layer. Less stringing than other PETG filaments.",
  },
  {
    id: "fil8",
    name: "Emerald Green",
    brand: "Atomic",
    material: "PLA",
    finish: "Matte",
    hexColor: "#27AE60",
    tags: [tags[5], tags[7]],
    printingBehavior:
      "Consistent diameter and excellent flow properties. Barely any stringing.",
  },
];

// Helper functions to filter filaments
export const getFilamentsByMaterial = (material: Material) => {
  return filaments.filter((filament) => filament.material === material);
};

export const getFilamentsByBrand = (brand: string) => {
  return filaments.filter((filament) => filament.brand === brand);
};

export const getFilamentsByFinish = (finish: Finish) => {
  return filaments.filter((filament) => filament.finish === finish);
};

export const getFilamentsByTag = (tagId: string) => {
  return filaments.filter((filament) =>
    filament.tags.some((tag) => tag.id === tagId)
  );
};

export const getUniqueFilamentBrands = (): string[] => {
  return [...new Set(filaments.map((filament) => filament.brand))];
};

export const getFilamentById = (id: string): Filament | undefined => {
  return filaments.find((filament) => filament.id === id);
};
