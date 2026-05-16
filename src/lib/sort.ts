import type { CollectionEntry } from 'astro:content';

const CATEGORY_PRIORITY: Record<CollectionEntry<'findings'>['data']['category'], number> = {
  self: 0,
  handyman: 1,
  dismissed: 2,
};

export function sortFindings(findings: CollectionEntry<'findings'>[]): CollectionEntry<'findings'>[] {
  return [...findings].sort((a, b) => {
    const catDiff = CATEGORY_PRIORITY[a.data.category] - CATEGORY_PRIORITY[b.data.category];
    if (catDiff !== 0) return catDiff;
    return a.data.order - b.data.order;
  });
}
