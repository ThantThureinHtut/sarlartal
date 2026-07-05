import { getFollowingPosts, getUser } from "@/app/(action)/serveraction";
import CardBox from "@/components/Dashboard/CardBox/CardBox";
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
export default async function FollowingCardList() {
  const [snaps, current_user] = await Promise.all([getFollowingPosts(), getUser()]);
  return (
    <>
      {!Array.isArray(snaps) || snaps.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-5 m-4 ">
          <p className="text-gray-500">
            No posts yet from people you follow. Follow someone to see their snaps here!
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-5 m-4 ">
          {snaps.map((snap: Props, index: number) => (
            <CardBox key={snap.id} snap={snap} current_user={current_user} priority={index === 0} />
          ))}
        </div>
      )}
    </>
  );
}
