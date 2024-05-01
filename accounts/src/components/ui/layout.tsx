import { ReactNode } from "react";
import { TopBarNavigation } from "./topbar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopBarNavigation />
      <main className="">{children}</main>
    </>
  );
}
