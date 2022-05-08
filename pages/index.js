import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log(window);
    console.log(status);
    console.log(session);
    if (typeof window !== "undefined" && status === "unauthenticated") {
      router.push("/loginOrRegister");
    }
    if (typeof window !== "undefined" && status !== "loading") {
      switch (session?.user?.role) {
        case "patient":
          router.push("/auth/patient");
          break;
        case "doctor":
          router.push("/auth/doctor");
          break;
        case "admin":
          router.push("/auth/doctor");
          break;
        default:
          router.push("/loginOrRegister");
          break;
      }
    }
  }, [status, router, session?.user?.role]);

  return <></>;
}
