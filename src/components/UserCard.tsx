import { UserData } from "@/lib/types";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

export default function UserCard({
  user,
  searchQuery,
}: {
  user: UserData;
  searchQuery: string;
}) {
  const highlightText = (text: string) => {
    const parts = text.split(new RegExp(`(^${searchQuery})`, "gi"));

    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === searchQuery.toLowerCase() ? (
            <span key={i} className="bg-yellow-300 dark:bg-orange-600">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div className="p-3 sm:p-5 shadow-md border dark:border-0 sm:text-lg space-y-1.5 rounded-md transition-colors dark:bg-gray-800">
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-medium">
          {highlightText(user.name)}
        </h2>
        <h3 className="text-gray-600 dark:text-gray-400">@{user.username}</h3>
      </div>
      <div className="flex items-center gap-3">
        <EnvelopeIcon className="h-4 w-4" />
        <span className="text-sky-500 underline cursor-pointer">
          {highlightText(user.email)}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <MapPinIcon className="h-4 w-4" />
        {highlightText(user.address.city)}
      </div>
      <div className="flex items-center gap-3">
        <PhoneIcon className="h-4 w-4" />
        {user.phone}
      </div>
      <div className="flex items-center gap-3">
        <BuildingOffice2Icon className="h-4 w-4" />
        {user.company.name}
      </div>
    </div>
  );
}
