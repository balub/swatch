export type Material = "PLA" | "PLA+" | "PETG" | "ABS" | "TPU" | "ASA";

export type Finish = "Matte" | "Silk" | "Glossy" | "Metallic";

export interface Tag {
  id: string;
  name: string;
}

export interface Filament {
  id: string;
  name: string;
  brand: string;
  material: Material;
  finish: Finish;
  hexColor: string;
  image?: string;
  tags: Tag[];
  printingBehavior?: string;
}
