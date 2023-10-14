export default function CategoryList({ categories }: { categories: string[] }) {
  return (
    <div className="my-2  flex-wrap  space-x-1 space-y-1 hidden">
      {categories.map((category) => (
        <span
          key={category}
          className="self-center rounded-full border-2 border-purple-200 px-3 py-1 text-sm"
        >
          {category}
        </span>
      ))}
    </div>
  );
}
