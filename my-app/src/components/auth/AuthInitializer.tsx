"use client";

import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppStore } from "../../lib/hook";
import { verifyToken } from "../../lib/features/authSlice";
import { useRouter } from "next/navigation";

export function AuthInitializer({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  const token =
    typeof window === "undefined" ? "" : localStorage.getItem("token");

  const router = useRouter();

  useEffect(() => {
    // const tokenLc = localStorage.getItem("token");
    if (!token || token == "") router.push("/login");
    // Verify token on component mount
    dispatch(verifyToken());
  }, [dispatch, token]);

  return <>{children}</>; // This component doesn't render anything
}
