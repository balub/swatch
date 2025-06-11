/**
 * Get the image URL for a filament, with fallback options
 */
export const getFilamentImage = (
  image?: string,
  hexColor?: string,
  fallbackType: "color" | "placeholder" = "color"
): string => {
  if (image) {
    return image;
  }

  if (hexColor && fallbackType === "color") {
    return createColorSwatch(hexColor);
  }

  return "/images/placeholder-filament.png";
};

/**
 * Create a data URL for a color swatch
 */
export const createColorSwatch = (
  hexColor: string,
  size: number = 200
): string => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) return "/images/placeholder-filament.png";

  canvas.width = size;
  canvas.height = size;

  // Fill with the color
  ctx.fillStyle = hexColor;
  ctx.fillRect(0, 0, size, size);

  // Add a subtle border
  ctx.strokeStyle = "#00000020";
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 0, size, size);

  return canvas.toDataURL();
};

/**
 * Check if an image URL is valid/accessible
 */
export const checkImageExists = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};
