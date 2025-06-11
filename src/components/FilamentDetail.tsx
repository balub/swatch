import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import type { Filament } from "@/types";
import { getFilamentImage } from "@/utils/imageUtils";
import Tag from "./Tag";

interface FilamentDetailProps {
  filament: Filament;
}

const FilamentDetail = ({ filament }: FilamentDetailProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Archive
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded border"
                  style={{ backgroundColor: filament.hexColor }}
                />
                <div>
                  <CardTitle className="text-2xl">{filament.name}</CardTitle>
                  <p className="text-lg text-muted-foreground">
                    {filament.brand}
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Swatch Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center p-4">
                <img
                  src={getFilamentImage(filament.image, filament.hexColor)}
                  alt={`${filament.name} swatch`}
                  className="max-w-full h-auto object-contain rounded"
                  style={{ maxHeight: "400px" }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = getFilamentImage(undefined, filament.hexColor);
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {filament.printingBehavior && (
            <Card>
              <CardHeader>
                <CardTitle>Printing Behavior</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {filament.printingBehavior}
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Properties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="text-sm font-medium">Material</span>
                <div className="mt-1">
                  <Badge>{filament.material}</Badge>
                </div>
              </div>

              <Separator />

              <div>
                <span className="text-sm font-medium">Finish</span>
                <p className="text-sm text-muted-foreground mt-1">
                  {filament.finish}
                </p>
              </div>

              <Separator />

              <div>
                <span className="text-sm font-medium">Color</span>
                <div className="flex items-center gap-2 mt-1">
                  <div
                    className="w-4 h-4 rounded border"
                    style={{ backgroundColor: filament.hexColor }}
                  />
                  <span className="text-sm font-mono">{filament.hexColor}</span>
                </div>
              </div>

              {filament.tags.length > 0 && (
                <>
                  <Separator />
                  <div>
                    <span className="text-sm font-medium">Tags</span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {filament.tags.map((tag) => (
                        <Tag key={tag.id} tag={tag} />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FilamentDetail;
