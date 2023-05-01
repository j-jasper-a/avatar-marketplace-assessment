import Link from "next/link";

interface MainNavigatorProps {
  title: React.ReactNode;
  href: string;
}

const MainNavigator: React.FC<MainNavigatorProps> = ({ title, href }) => {
  return (
    <Link href={href}>
      <div className="group text-xl font-medium transition">{title}</div>
    </Link>
  );
};

export default MainNavigator;
