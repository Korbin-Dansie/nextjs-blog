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
    <ul>
        <li>Super Data</li>
        {data.map((user) => (
          
            <li key={user.id}>{user.firstName}</li>
        ))}

    </ul>
  </div>;
}
