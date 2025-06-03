import { useEffect, useState, useRef, useCallback } from "react";

import { fetchUsers } from "../API/fetchUsers";
import Spinner from "./Spinner";
import User from "./User";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const observer = useRef(null);

  const lastUserElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPage((prevPage) => prevPage + 1);
          }
        },
        { threshold: 1.0 }
      );
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data, hasMore } = await fetchUsers(page);
        console.log(data);
        setUsers((prev) => [...prev, ...data]);
        setHasMore(hasMore);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [page]);

  return (
    <div className="p-4 flex flex-col items-center gap-4">
      {users.map((user, index) => {
        if (users.length === index + 1) {
          return (
            <User key={user.id} data={user} elementRef={lastUserElementRef} />
          );
        } else {
          return <User key={user.id} data={user} />;
        }
      })}
      {loading && <Spinner />}
      {error && <p className="text-center text-red-500 py-4">{error}</p>}
    </div>
  );
}
