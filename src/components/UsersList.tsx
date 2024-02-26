import { motion } from "framer-motion";
import UserCard from "./UserCard";
import { UserData } from "@/lib/types";

interface UsersListProps {
  users: UserData[];
  searchQuery: string;
}

export default function UsersList({ users, searchQuery }: UsersListProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-2 h-full py-7 sm:py-10 px-6"
    >
      <h2 className="sm:text-xl ml-2">
        {users.length == 1
          ? "Se encontró 1 usuario"
          : `Se encontraron ${users.length} usuarios`}
      </h2>
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5">
        {users.map((user) => (
          <UserCard key={user.id} user={user} searchQuery={searchQuery} />
        ))}
      </div>
    </motion.div>
  );
}
