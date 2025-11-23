// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { useAppDispatch, useAppStore } from "../../lib/hook";
// import { verifyToken } from "../../lib/features/authSlice";
// import { useRouter } from "next/navigation";

// export function AuthInitializer({ children }: { children: React.ReactNode }) {
//   const dispatch = useAppDispatch();

//   const token =
//     typeof window === "undefined" ? "" : localStorage.getItem("token");

//   const router = useRouter();

//   useEffect(() => {
//     // const tokenLc = localStorage.getItem("token");
//     if (!token || token == "") router.push("/login");
//     // Verify token on component mount
//     dispatch(verifyToken());
//   }, [dispatch, token]);

//   return <>{children}</>; // This component doesn't render anything
// }

"use client";

import { useEffect, useState } from "react";
import { useAppDispatch } from "../../lib/hook";
import { verifyToken } from "../../lib/features/authSlice";
import { useRouter } from "next/navigation";

export function AuthInitializer({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      // Only access localStorage in useEffect (client-side only)
      const token = localStorage.getItem("token");

      if (!token || token === "") {
        router.push("/login");
        setIsChecking(false);
        return;
      }

      // Verify token and wait for result
      try {
        await dispatch(verifyToken()).unwrap();
        setIsChecking(false);
      } catch (error) {
        // If verification fails, redirect to login
        router.push("/login");
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [dispatch, router]);

  // Optional: Show loading state while checking auth
  if (isChecking) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
}
