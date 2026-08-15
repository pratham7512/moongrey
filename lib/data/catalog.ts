import { galleryImages, packages } from "@/lib/data/content";
import type { GalleryImage, Package } from "@/lib/types";

/**
 * Data boundary for the catalogue. Replace the seed data below with an API or
 * database query when the backend is connected; consuming UI stays unchanged.
 */
export interface CatalogRepository {
  getPackages(): Promise<Package[]>;
  getGallery(): Promise<GalleryImage[]>;
}

const seedCatalogRepository: CatalogRepository = {
  async getPackages() {
    return packages;
  },
  async getGallery() {
    return galleryImages;
  },
};

export const catalogRepository = seedCatalogRepository;

export async function getPackages() {
  return catalogRepository.getPackages();
}

export async function getGalleryImages() {
  return catalogRepository.getGallery();
}
