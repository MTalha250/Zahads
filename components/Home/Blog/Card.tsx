interface BlogCardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  image,
  description,
  link,
}) => {
  return (
    <a href={link} className="bg-white rounded-lg overflow-hidden shadow-md m-4 w-100">
      <img className="w-full h-52 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-primary/90 hover:text-primary text-sm">
          {description}
        </p>
      </div>
    </a>
  );
};

export default BlogCard;