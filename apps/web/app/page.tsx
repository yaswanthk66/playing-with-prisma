export default async function Home() {
  const res = await fetch("http://localhost:3002/user", {
    cache: "no-store",
  });

  const user = await res.json();

  return (
    <div>
      email: {user?.email}
    </div>
  );
}
