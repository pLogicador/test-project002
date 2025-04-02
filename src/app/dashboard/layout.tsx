import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard intro",
  description: "Dashboard page for you",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h3>Dashboard Header</h3>
      <br />
      {children}
    </>
  );
}
