import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";

export default function RootLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full h-[97vh] rounded-lg my-2 mx-1 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800  overflow-hidden">
        <Header />
        <MobileNav />
        {children}
        <MusicPlayer />
      </main>
    </div>
  );
}
