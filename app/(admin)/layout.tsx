import AdminNav from "@/components/AdminNav/AdminNav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    < AdminNav />
    <div className="pageWrapper">
      <div className="leftBox"></div>
      <div className="contentWrapper">{children}</div>
      <div className="rightBox"></div>
    </div>
    </>
  );
}
