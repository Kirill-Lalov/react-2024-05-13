import { Button } from '@components/Button';

export type TabsProps<T> = {
  entries: EntryType<T>[];
  onChange: (value: T) => void;
};

export type EntryType<T> = {
  label: string;
  value: T;
};

export function Tabs<T>({ entries, onChange, ...props }: TabsProps<T>) {
  return (
    <div {...props}>
      {entries.map(({ label, value }) => (
        <Button onClick={() => onChange(value)}>{label}</Button>
      ))}
    </div>
  );
}
