import { useState, useEffect } from "react";
import { User } from "../../core/models/user";

export default function Page() {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let users: User[] = [];
  const rows = [];

  useEffect(() => {
    fetch("/api/users/get-all")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the user data.");
        }
        return res.json();
      })
      .then((data: User[]) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setData([]);
        setLoading(false);
        setError(err.message);
      });
  }, []);

  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Loading...</p>;
  if (data.length == 0) return <p>No user data</p>;

  return (
    <div>
      <table>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName + " " + user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.hashedPassword}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
