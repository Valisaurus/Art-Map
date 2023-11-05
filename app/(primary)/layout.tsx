import "../globals.css";
import Nav from "@/components/Nav/Nav";



export default function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <div className="pageWrapper">
        <div className="leftBox"></div>
        <div className="contentWrapper">{children}</div>
        <div className="rightBox"></div>
      </div>
    </>
  );
}
