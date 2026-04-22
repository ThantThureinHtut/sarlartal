import { getSnaps } from "@/app/(action)/serveraction";
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
export default async function CardList() {
  const snaps = await getSnaps();
  return (
    <>
      {!Array.isArray(snaps) ? (
        <div className="flex flex-col items-center justify-center gap-5 m-4 ">
          <p className="text-gray-500">
            No snaps found. Create your first snap!
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-5 m-4 ">
          {snaps.map((snap: Props) => (
            <CardBox key={snap.id} snap={snap} />
          ))}
        </div>
      )}
    </>
  );
}
