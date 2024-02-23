export default function LoadingSkeleton() {
  const numberOfSkeletons = 9;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-6">
      {Array.from({ length: numberOfSkeletons }, (_, index) => (
        <div
          key={index}
          className="animate-pulse bg-gray-300 h-[180px] rounded-md"
        />
      ))}
    </div>
  );
}
