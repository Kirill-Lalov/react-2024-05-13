export type SliceSchema<T> = {
  entities: Record<string, T>;
  ids: string[];
};
