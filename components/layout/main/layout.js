import { useSession } from "next-auth/react";
import LayoutDoctor from "../mainDoctor/layout";
import LayoutPatient from "../mainPatient/layout";

export default function Layout({ children }) {
  const { data: session } = useSession();

  switch (session?.user?.role) {
    case "patient":
      return <LayoutPatient>{children}</LayoutPatient>;
    case "doctor":
      return <LayoutDoctor>{children}</LayoutDoctor>;
    default:
      return <></>;
  }
}
