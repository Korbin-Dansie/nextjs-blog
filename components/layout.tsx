import NavBar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="max-w-screen-xl mx-auto p-4">{children}</main>
    </>
  );
}
