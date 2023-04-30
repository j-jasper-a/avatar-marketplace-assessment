interface CategoryTitleProps {
  title: string;
}

const CategoryTitle: React.FC<CategoryTitleProps> = ({ title }) => {
  return <p className="font-medium">{title}</p>;
};

export default CategoryTitle;
