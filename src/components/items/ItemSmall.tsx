import Image from "next/image";
import UserSatisfaction from "./UserSatisfaction";
import AutoUpload from "./AutoUpload";
import AddToCartButton from "../buttons/AddToCartButton";
import PlatformAndPrice from "./PlatformAndPrice";
import CreatorBanner from "./CreatorBanner";
import Link from "next/link";
import { Avatar } from "@/interfaces";

const ItemSmall: React.FC<Avatar> = ({
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
            isSmall={true}
          />
          <UserSatisfaction ratings={ratings} likes={likes} isSmall={true} />
          <PlatformAndPrice
            price={price}
            platforms={platforms}
            isSmall={true}
          />
        </div>
      </div>
      <div className="px-2 py-1 text-white">
        <AutoUpload autoUpload={autoUpload} isSmall={true} />
      </div>
    </div>
  );
};

export default ItemSmall;
