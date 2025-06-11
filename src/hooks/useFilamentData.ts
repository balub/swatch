import { useState, useEffect } from "react";
import type { Filament, Tag } from "@/types";

interface FilamentData {
  tags: Tag[];
  filaments: Filament[];
}

export const useFilamentData = () => {
  const [data, setData] = useState<FilamentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/data/filaments.json");

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const jsonData: FilamentData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load filament data"
        );
        console.error("Error loading filament data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    filaments: data?.filaments || [],
    tags: data?.tags || [],
    loading,
    error,
    refetch: () => {
      setLoading(true);
      setData(null);
      setError(null);
    },
  };
};
