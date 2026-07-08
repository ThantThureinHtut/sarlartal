type Props = {
  postsCount: number;
  followersCount: number;
  followingCount: number;
};

function StatTile({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-0.5">
      <span className="text-lg font-bold text-foreground leading-tight">
        {value}
      </span>
      <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

export default function ProfileStats({
  postsCount,
  followersCount,
  followingCount,
}: Props) {
  return (
    <div className="flex items-center rounded-2xl border border-border bg-card px-2 py-3 shadow-sm ring-1 ring-transparent">
      <StatTile value={postsCount} label="Snaps" />
      <div className="h-8 w-px bg-border" aria-hidden="true" />
      <StatTile value={followersCount} label="Followers" />
      <div className="h-8 w-px bg-border" aria-hidden="true" />
      <StatTile value={followingCount} label="Following" />
    </div>
  );
}
