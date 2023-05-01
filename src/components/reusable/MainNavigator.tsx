import Link from "next/link";

interface MainNavigatorProps {
  title: string;
  href: string;
}

const MainNavigator: React.FC<MainNavigatorProps> = ({ title, href }) => {
  return (
    <Link href={href}>
      <p className="text-xl font-medium">{title}</p>
    </Link>
  );
};

export default MainNavigator;
