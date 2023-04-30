import Link from "next/link";
import Image from "next/image";

interface UserAvatarProps {
  userAvatar: string;
  name: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ userAvatar, name }) => {
  return (
    <Link href={"/"}>
      <Image
        className="w-8 rounded-lg border-2 shadow md:w-10"
        src={userAvatar}
        height={128}
        width={128}
        alt={name}
      />
    </Link>
  );
};

export default UserAvatar;
