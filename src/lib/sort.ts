import type { CollectionEntry } from 'astro:content';

const CATEGORY_PRIORITY: Record<CollectionEntry<'findings'>['data']['category'], number> = {
  self: 0,
  handyman: 1,
  dismissed: 2,
};

const STATUS_PRIORITY: Record<CollectionEntry<'findings'>['data']['status'], number> = {
  'in-progress': 0,
  todo: 1,
  done: 2,
};

export function sortFindings(findings: CollectionEntry<'findings'>[]): CollectionEntry<'findings'>[] {
  return [...findings].sort((a, b) => {
    const catDiff = CATEGORY_PRIORITY[a.data.category] - CATEGORY_PRIORITY[b.data.category];
    if (catDiff !== 0) return catDiff;
    const statusDiff = STATUS_PRIORITY[a.data.status] - STATUS_PRIORITY[b.data.status];
    if (statusDiff !== 0) return statusDiff;
    return a.data.order - b.data.order;
  });
}
