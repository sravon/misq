import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />
      <div className="flex-1 ">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
