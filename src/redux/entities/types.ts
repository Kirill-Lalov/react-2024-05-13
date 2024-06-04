export type SliceType<T> = {
  entities: Record<string, T>;
  ids: string[];
};
