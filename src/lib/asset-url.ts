// Lovable-hosted images live under /__l5e/, which only Lovable hosting serves.
// On other hosts (Vercel, Netlify) we point at the Lovable host absolutely.
const LOVABLE_HOST = "https://id-preview--45608458-dcbc-4a62-9ed8-2c9191ac6fcc.lovable.app";
export function assetUrl(path: string): string {
  return path.startsWith("/__l5e/") ? `${LOVABLE_HOST}${path}` : path;
}
export const IMAGE_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="#eeeef2"/><path d="M150 190l35-45 30 35 20-25 35 35z" fill="#c9c9d3"/><circle cx="170" cy="120" r="14" fill="#c9c9d3"/></svg>'
  );
