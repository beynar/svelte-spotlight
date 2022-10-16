export type IndexHit = { index: string; hits: Hit[] } & Record<string, any>;

export type Hit = { name: string; objectID: string };
