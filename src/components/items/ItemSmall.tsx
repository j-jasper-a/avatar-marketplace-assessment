import Image from "next/image";
import UserSatisfaction from "./UserSatisfaction";
import AutoUpload from "./AutoUpload";
import AddToCartButton from "../buttons/AddToCartButton";
import PlatformAndPrice from "./PlatformAndPrice";
import CreatorBanner from "./CreatorBanner";
import Link from "next/link";

interface ItemSmallProps {
  id: number;
  name: string;
  sex: string;
  price: number;
  description?: string;
  ratings: number;
  likes: number;
  imageUrl: string;
  creatorName: string;
  creatorAvatar: string;
  autoUpload: boolean;
  platforms: { platformId: number; platformName: string }[];
}

const ItemSmall: React.FC<ItemSmallProps> = ({
  id,
  name,
  sex,
  price,
  description,
  ratings,
  likes,
  imageUrl,
  creatorName,
  creatorAvatar,
  autoUpload,
  platforms,
}) => {
  return (
    <div className="rounded-lg bg-neutral-600 shadow">
      <div className="relative overflow-hidden rounded-lg bg-white shadow">
        <div className="relative">
          <AddToCartButton />
          <Link href={`/avatars/${id}`}>
            <Image
              className="rounded-b-lg"
              src={imageUrl}
              width={1024}
              height={1024}
              alt={name}
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2 p-2 md:p-4">
          <p className="line-clamp-2 font-medium leading-5">{name}</p>
          <CreatorBanner
            creatorName={creatorName}
            creatorAvatar={creatorAvatar}
          />
          <UserSatisfaction value={ratings} likes={likes} />
          <PlatformAndPrice price={price} platforms={platforms} />
        </div>
      </div>
      <div className="px-2 py-1 text-white">
        <AutoUpload autoUpload={autoUpload} platforms={platforms} />
      </div>
    </div>
  );
};

export default ItemSmall;
