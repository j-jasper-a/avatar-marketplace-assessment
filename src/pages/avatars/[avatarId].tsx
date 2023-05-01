import { useRouter } from "next/router";
import Header from "@/components/header/Header";
import data from "@/data.json";
import { Avatar, Avatars } from "@/interfaces";
import Image from "next/image";
import UserSatisfaction from "@/components/items/UserSatisfaction";
import CreatorBanner from "@/components/items/CreatorBanner";
import MainNavigator from "@/components/reusable/MainNavigator";
import PlatformAndPrice from "@/components/items/PlatformAndPrice";
import BigButton from "@/components/buttons/BigButton";
import Price from "@/components/items/Price";
import AutoUpload from "@/components/items/AutoUpload";

const AvatarPage = () => {
  const router = useRouter();
  const { avatarId } = router.query;

  const findAvatarById = (
    data: Avatars,
    avatarId: number
  ): Avatar | undefined => {
    return data.avatars.find((avatar) => avatar.id === avatarId);
  };

  const currentAvatar = findAvatarById(data, Number(avatarId));

  if (currentAvatar) {
    const {
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
    } = currentAvatar;

    return (
      <div>
        <div>
          <main className="mx-auto max-w-screen-xl">
            <Header />
            <div className="flex flex-col gap-4 p-4">
              <div>
                <MainNavigator title="Go back" href="/" />
              </div>
              <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-16">
                <div className="flex flex-col gap-4">
                  <div>
                    <Image
                      className="rounded-lg shadow"
                      src={imageUrl}
                      width={1024}
                      height={1024}
                      alt={name}
                    />
                  </div>
                  <div className="flex h-full justify-between gap-4 overflow-hidden">
                    <button
                      className="h-fit w-1/5 rounded-lg border-8 border-[#7e1f89] shadow"
                      onClick={(e) => {
                        e.preventDefault;
                      }}
                    >
                      <Image
                        src={imageUrl}
                        width={1024}
                        height={1024}
                        alt={name}
                      />
                    </button>
                    <button
                      className="h-fit w-1/5 rounded-lg border-8 border-white shadow"
                      onClick={(e) => {
                        e.preventDefault;
                      }}
                    >
                      <Image
                        src={imageUrl}
                        width={1024}
                        height={1024}
                        alt={name}
                      />
                    </button>
                    <button
                      className="h-fit w-1/5 rounded-lg border-8 border-white shadow"
                      onClick={(e) => {
                        e.preventDefault;
                      }}
                    >
                      <Image
                        src={imageUrl}
                        width={1024}
                        height={1024}
                        alt={name}
                      />
                    </button>
                    <button
                      className="h-fit w-1/5 rounded-lg border-8 border-white shadow"
                      onClick={(e) => {
                        e.preventDefault;
                      }}
                    >
                      <Image
                        src={imageUrl}
                        width={1024}
                        height={1024}
                        alt={name}
                      />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-4 rounded-lg bg-white p-4 md:p-16">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <p className="text-4xl font-medium">{name}</p>
                      <p className="font-medium opacity-50">
                        {sex === "female" ? "Female" : "Male"}
                      </p>
                    </div>
                    <CreatorBanner
                      creatorAvatar={creatorAvatar}
                      creatorName={creatorName}
                      isSmall={false}
                    />
                    <UserSatisfaction
                      ratings={ratings}
                      likes={likes}
                      isSmall={false}
                    />
                    <PlatformAndPrice
                      price={price}
                      platforms={platforms}
                      isSmall={false}
                    />
                    <p>{description}</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Price value={price} isSmall={false} />
                    <div className="flex justify-between gap-4">
                      <BigButton title="Buy Now" isSpecial={true} />
                      <BigButton title="Add to Cart" isSpecial={false} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-fit self-end rounded-lg bg-neutral-600 p-4">
                <AutoUpload autoUpload={autoUpload} isSmall={false} />
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
  return (
    <div>
      <p>There is no such thing.</p>
    </div>
  );
};

export default AvatarPage;
