import Link from "next/link";
import { BsHandThumbsUpFill, BsStarFill, BsStarHalf } from "react-icons/bs";
import HeartButton from "../buttons/HeartButton";

interface UserSatisfactionProps {
  ratings: number;
  likes: number;
  isSmall: boolean;
}

const UserSatisfaction: React.FC<UserSatisfactionProps> = ({
  ratings,
  likes,
  isSmall,
}) => {
  const fullStars = Math.floor(ratings);
  const hasHalfStar = ratings - fullStars >= 0.5;

  const stars = Array.from({ length: fullStars }, (_, index) => (
    <BsStarFill key={index} />
  ));

  if (hasHalfStar) {
    stars.push(<BsStarHalf key={fullStars} />);
  }

  return (
    <div
      className={`${
        isSmall ? "text-xs" : "w-fit gap-2 text-base"
      } flex items-center justify-between rounded-lg`}
    >
      <Link className="group relative flex items-center gap-1" href={"/"}>
        <p className="opacity-75 transition group-hover:opacity-100">
          {ratings}
        </p>
        <div
          className={`${
            isSmall ? "hidden" : "flex"
          } text-[#7e1f89] md:flex md:items-center`}
        >
          {stars}
        </div>
        <div
          className={`${isSmall ? "block" : "hidden"} text-[#7e1f89] md:hidden`}
        >
          <BsStarFill />
        </div>
      </Link>
      <span className="opacity-25">•</span>
      <Link
        className="group flex items-center gap-1 opacity-75 transition hover:opacity-100"
        href={"/"}
      >
        <p>{likes}</p>
        <BsHandThumbsUpFill />
      </Link>
      <span className="opacity-25">•</span>
      <HeartButton />
    </div>
  );
};

export default UserSatisfaction;
