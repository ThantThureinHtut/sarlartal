import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Suspense } from "react";
import CardBoxFooter from "@/components/Dashboard/CardBox/CardBoxFooter";
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
type CurrentUser = {
  id: string;
  likes: Like[];
  savedBySnaps: SavedSnap[];
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
    <div className="mx-auto w-full max-w-md sm:max-w-lg ">
      <div className="relative overflow-hidden rounded-3xl aspect-4/5 bg-black shadow-md shadow-black/40 group">
        <Image
          src={image_url}
          alt={title || `Snap by ${user.name}`}
          fill
          priority={priority}
          loading="eager"
          sizes="(max-width: 640px) 100vw, 480px"
          className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {/* Top gradient — smooth eased fade */}
        <div
          className="absolute inset-x-0 top-0 h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.28) 30%, rgba(0,0,0,0.12) 60%, rgba(0,0,0,0) 100%)",
          }}
        />

        {/* Bottom gradient — keeps footer area readable */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)",
          }}
        />

        {/* Header: avatar + name + more button */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-4">
          <div className="flex items-center gap-4">
            <div className="relative ">
              <Avatar className="size-10 ring-2 ring-white/30 ring-offset-1 ring-offset-transparent shadow-lg">
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback className="bg-white/20 text-white backdrop-blur-sm">
                  CN
                </AvatarFallback>
              </Avatar>
              {/* Status dot */}
              <span
                className={cn(
                  "absolute bottom-0.5 -right-0.5 size-2.5 rounded-full ring-[3px] ring-background shadow-sm",
                  currentStatus.dot,
                )}
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-white leading-tight drop-shadow">
                {user.name}
              </p>
              <p className="text-xs text-white/70 drop-shadow">
                {formatDistance(new Date(createdAt), new Date(), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>

          <button
            aria-label="More options"
            className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
          >
            <MoreHorizontal className="size-4" />
          </button>
        </div>

        {/* Caption bar */}
        {title.trim() && (
          <div className="absolute inset-x-0 bottom-20 px-4 py-2.5 bg-black/40 backdrop-blur-md">
            <p className="text-xs sm:text-sm text-white/90 leading-snug text-center">
              {title}
            </p>
          </div>
        )}

        {/* Footer: like + bookmark — sits below caption bar */}
        <div className="absolute inset-x-0 bottom-0 px-4 py-3">
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
