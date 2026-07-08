import { getSavedSnaps, getUser } from "@/app/(action)/serveraction";
import CardBox from "@/components/Dashboard/CardBox/CardBox";
import { BookmarkIcon } from "lucide-react";
type Likes = {
  userId: string;
  postId: string;
  createdAt: Date;
}
type Props = {
  id: string;
  image_url: string;
  likeCount: number;
  title: string;
  likes: Likes[];
  user : {
    name:string;
    image:string;
    status:string;
   };
   createdAt: string;
   userId: string;
}
export default async function SavedCardList() {
  const [snaps, current_user] = await Promise.all([getSavedSnaps(), getUser()]);
  return (
    <>
      {!Array.isArray(snaps) || snaps.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border py-16 px-6 text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-muted ring-1 ring-border">
            <BookmarkIcon className="size-5 text-muted-foreground" />
          </div>
          <p className="text-sm font-medium text-foreground">No saved snaps</p>
          <p className="max-w-xs text-sm text-muted-foreground">
            You haven&apos;t saved any snaps yet.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6">
          {snaps.map((snap: Props, index: number) => (
            <CardBox key={snap.id} snap={snap} current_user={current_user} priority={index === 0} />
          ))}
        </div>
      )}
    </>
  );
}
