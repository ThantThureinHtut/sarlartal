import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import CardBoxFooter from "@/components/Dashboard/CardBox/CardBoxFooter";
import FollowButton from "@/components/Dashboard/CardBox/FollowButton";
import { MoreHorizontal } from "lucide-react";
import { formatDistance } from "date-fns";
import { cn } from "@/lib/utils";
import { STATUSES } from "@/components/data/status";


type Props = {
  id: string;
  image_url: string;
  likeCount: number;
  title: string;
  user: {
    name: string;
    image: string;
    status: string;
  };
  createdAt: string;
  userId: string;
};
type Like = {
  userId: string;
  postId: string;
  createdAt: Date;
};
type SavedSnap = {
  id: string;
  authorId: string;
  savedUserId: string;
  postId: string;
  createdAt: Date;
};
type Follow = {
  followerId: string;
  followingId: string;
  createdAt: Date;
};
type CurrentUser = {
  id: string;
  likes: Like[];
  savedBySnaps: SavedSnap[];
  following: Follow[];
};

export default async function CardBox({
  snap,
  current_user,
  priority = false,
}: {
  snap: Props;
  current_user: CurrentUser;
  priority?: boolean;
}) {
  const { id, createdAt, image_url, likeCount, user, userId, title } = snap;
  const currentStatus = STATUSES.find((s) => s.value === user.status)!;

  return (
    <div className="mx-auto w-full max-w-md sm:max-w-lg">
      <div className="overflow-hidden rounded-3xl bg-card ring-1 ring-border shadow-sm">
        {/* Header: avatar + name + more button — off the photo */}
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative shrink-0">
              <Avatar className="size-10 ring-2 ring-background shadow-sm">
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback className="bg-muted text-muted-foreground">
                  CN
                </AvatarFallback>
              </Avatar>
              {/* Status dot */}
              <span
                className={cn(
                  "absolute bottom-0 -right-0.5 size-2.5 rounded-full ring-2 ring-card",
                  currentStatus.dot,
                )}
              />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground leading-tight truncate">
                {user.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatDistance(new Date(createdAt), new Date(), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {userId !== current_user.id && (
              <FollowButton
                targetUserId={userId}
                initialIsFollowing={current_user.following.some(
                  (f) => f.followingId === userId,
                )}
              />
            )}
            <button
              aria-label="More options"
              className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
            >
              <MoreHorizontal className="size-4" />
            </button>
          </div>
        </div>

        {/* Photo — contained within the card, rounded by the card's own overflow-hidden */}
        <div className="relative aspect-4/5 bg-muted">
          <Image
            src={image_url}
            alt={title || `Snap by ${user.name}`}
            fill
            preload={priority}
            sizes="(max-width: 640px) 100vw, 480px"
            className="object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* Caption — plain text below the photo */}
        {title.trim() && (
          <p className="px-4 pt-3 text-sm text-foreground leading-snug">
            {title}
          </p>
        )}

        {/* Footer: like + bookmark */}
        <div className="px-4 py-3">
          <CardBoxFooter
            likeCount={likeCount}
            postId={id}
            userId={userId}
            current_user={current_user}
          />
        </div>
      </div>
    </div>
  );
}
