import "@/assets/css/main.scss";
import ToastUI from "@/components/client/ui/toast";
import Header from "@/components/server/layout/header";
import Sidebar from "@/components/server/layout/sidebar";

export default async function RootLayout({ children }) {
  return (
    <div id="root">
      <div className="overlay"></div>
      <div className="main-container">
        <ToastUI />
        <Header />
        <div className="content-wrapper split-container">
          {children}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
