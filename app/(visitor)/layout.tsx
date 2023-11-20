import "./visitor.css";
import Nav from "@/components/Navigation/MainNav/MainNav";
import MapComponent from "@/components/Map/Map";

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
        <div className="contentWrapper">
          {children} <MapComponent />
        </div>
        <div className="rightBox"></div>
      </div>
      <div className="bottomBox"></div>
    </>
  );
}
