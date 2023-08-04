import Link from "next/link";
export default function Header() {
  const user = { username: 'admin'};
  return (
    <header className="p-4 text-white bg-green-500">
      <h1 className="text-5xl" style={{ fontFamily: 'Arial' }}>Cookie Stand Admin</h1>
      <Link href="/overview">Overview</Link>
      <button className='p-2 text-white rounded bg-slate-500'>Login</button>
        {user ? (
          <h2>Welcome {user.username}</h2>
        ):(
          <h2>You need to log in</h2>
        )}
    </header>
  );
}
