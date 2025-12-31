export default function StatSkeleton({ width = 'w-16' }) {
  return (
    <div className={`h-9 ${width} rounded-lg bg-zinc-200/70 animate-pulse`} />
  );
}
