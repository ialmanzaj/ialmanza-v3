export default function CategoryList({ categories }: { categories: string[] }) {
  return (
    <div className="flex space-x-2">
      {categories.map((category) => (
        <span
          key={category}
          className="rounded-full border-2 border-purple-200 px-4 py-2 text-sm"
        >
          {category}
        </span>
      ))}
    </div>
  );
}
