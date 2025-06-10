import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Filament } from "../types";
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
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
            alt={`${filament.name} swatch`}
            className="w-full h-full object-cover"
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
