# Filament Images

This folder contains photos of 3D printing filament swatches.

## File Naming Convention

Images should be named to match the JSON data in `/public/data/filaments.json`:

- `esun_gray_pla.jpg`
- `wol3d_black_petg.jpg`
- `numakers_green_tpu.jpg`

## Supported Formats

- `.jpg`, `.jpeg`, `.png`, `.webp`
- Recommended size: 400x400px or larger
- Keep file sizes reasonable (< 1MB each)

## Adding New Images

1. Add your image file here with a descriptive name
2. Update the corresponding entry in `/public/data/filaments.json`
3. Set the `image` field to `/images/filaments/your-filename.jpg`

## Missing Images

If an image is missing, the app will automatically:

1. Generate a color swatch from the `hexColor` field
2. Fall back to a placeholder image
