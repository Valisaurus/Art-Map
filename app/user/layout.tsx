import UserNav from "@/components/Navigation/UserNav/UserNav";

export default function userLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    < UserNav />
    <div className="pageWrapper">
      <div className="leftBox"></div>
      <div className="contentWrapper">{children}</div>
      <div className="rightBox"></div>
    </div>
    <div className="bottomBox"></div>
    </>
  );
}
