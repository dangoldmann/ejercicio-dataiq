export default function LoadingSkeleton() {
  const numberOfSkeletons = 5;

  return (
    <div className="flex flex-col items-center w-full gap-5 py-10 px-6">
      {Array.from({ length: numberOfSkeletons }, (_, index) => (
        <div
          key={index}
          className="animate-pulse bg-gray-300 w-[85%] h-[180px] rounded-md"
        />
      ))}
    </div>
  );
}
