import AdminNav from "@/components/Navigation/AdminNav/AdminNav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminNav />
      <div className="pageWrapper">
        <div className="contentWrapper">{children}</div>
      </div>
    </>
  );
}
