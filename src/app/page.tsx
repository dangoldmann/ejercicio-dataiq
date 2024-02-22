"use client";

import Header from "@/components/Header";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { useEffect, useState } from "react";
import UsersList from "@/components/UsersList";
import { UserData } from "@/lib/types";

const SERVER_URL = "https://jsonplaceholder.typicode.com/users";

export default function Home() {
  const [usersData, setUsersData] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(SERVER_URL, { signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = (await response.json()) as UserData[];
        setUsersData(data);
      } catch (error) {
        console.error("Ocurrió un problema: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    const timeoutId = setTimeout(() => controller.abort(), 5000);

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
      user.address.city.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <main>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {isLoading ? (
        <LoadingSkeleton />
      ) : filteredUsers.length === 0 ? (
        <p className="text-xl text-center mt-28">
          No se encontraron usuarios con ese filtro de búsqueda
        </p>
      ) : (
        <UsersList users={filteredUsers} searchQuery={searchQuery} />
      )}
    </main>
  );
}
