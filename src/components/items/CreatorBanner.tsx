import Image from "next/image";

interface CreatorBannerProps {
  creatorName: string;
  creatorAvatar: string;
  isSmall: boolean;
}

const CreatorBanner: React.FC<CreatorBannerProps> = ({
  creatorName,
  creatorAvatar,
  isSmall,
}) => {
  return (
    <div className={`${isSmall ? "gap-1" : "gap-2"} flex items-center`}>
      <Image
        className={`${isSmall ? "h-4 w-4" : "h-8 w-8"} rounded-full`}
        src={creatorAvatar}
        width={64}
        height={64}
        alt={creatorName}
      />
      <p className={`${isSmall ? "text-xs" : "text-base"} opacity-75`}>
        {creatorName}
      </p>
    </div>
  );
};

export default CreatorBanner;
