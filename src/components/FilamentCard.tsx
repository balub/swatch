import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Filament } from "@/types";
import { getFilamentImage } from "@/utils/imageUtils";
import Tag from "./Tag";

interface FilamentCardProps {
  filament: Filament;
}

const FilamentCard = ({ filament }: FilamentCardProps) => {
  return (
    <Link to={`/filament/${filament.id}`}>
      <Card className="h-full transition-colors hover:bg-muted/50">
        <div className="aspect-video w-full bg-gray-100 rounded-t-lg overflow-hidden">
          <img
            src={getFilamentImage(filament.image, filament.hexColor)}
            alt={`${filament.name} swatch`}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to color swatch if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = getFilamentImage(undefined, filament.hexColor);
            }}
          />
        </div>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div
              className="w-6 h-6 rounded border"
              style={{ backgroundColor: filament.hexColor }}
              title={filament.hexColor}
            />
            <Badge variant="secondary" className="text-xs">
              {filament.material}
            </Badge>
          </div>
          <CardTitle className="text-lg">{filament.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{filament.brand}</p>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            <div>
              <span className="text-xs text-muted-foreground">Finish: </span>
              <span className="text-sm">{filament.finish}</span>
            </div>
            {filament.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {filament.tags.slice(0, 3).map((tag) => (
                  <Tag key={tag.id} tag={tag} />
                ))}
                {filament.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{filament.tags.length - 3} more
                  </Badge>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default FilamentCard;
