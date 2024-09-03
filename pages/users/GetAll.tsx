import { useState, useEffect } from "react";
import { User } from "../../core/models/user";

export default function Page() {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(true);
  let users: User[] = [];
  const rows = [];

  useEffect(() => {
    fetch("/api/users/GetAll")
      .then((res) => res.json())
      .then((data: User[]) => {
        setLoading(false);
        setData(data);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (data.length == 0) return <p>No user data</p>;
  console.log(data)


  return <div>
    <table>
        {data.map((user) => (
            <tr key={user.id}><td>{user.firstName}</td><td>{user.hashedPassword}</td><td>{user.salt}</td></tr>
        ))}
    </table>
  </div>;
}
