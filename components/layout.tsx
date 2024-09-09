import NavBar from "./navbar"
 
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="max-w-screen-xl mx-auto p-4">{children}</main>
    </>
  )
}
