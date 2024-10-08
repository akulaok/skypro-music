import { trackType } from "./types";

type GetUniqueParams = {
  activeFilter: string | null;
  tracks: trackType[];
};

export function getUnique({ activeFilter, tracks }: GetUniqueParams): string[] {
  if (activeFilter === "исполнителю") {
    return getUniqueValues(tracks, "author");
  }

  if (activeFilter === "жанру") {
    return getUniqueValues(tracks, "genre");
  }

  if (activeFilter === "году выпуска") {
    return ["По умолчанию", "Сначала новые", "Сначала старые"];
  }

  return [];
}

export const getUniqueValues = <T, K extends keyof T>(items: T[], field: K): string[] => {
  return Array.from(new Set(items && items.map(item => String(item[field]))));
};


export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}
