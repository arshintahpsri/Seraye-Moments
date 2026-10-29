"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type BookingState = {
  packageId: string;
  photographerId: string;
  setPackageId: (id: string) => void;
  setPhotographerId: (id: string) => void;
};

const BookingContext = createContext<BookingState | null>(null);

/** Menyimpan pilihan paket & fotografer yang dipakai bersama katalog, kurasi, dan formulir booking. */
export function BookingProvider({ children }: { children: ReactNode }) {
  const [packageId, setPackageId] = useState("sejenak");
  const [photographerId, setPhotographerId] = useState("dimas");

  return (
    <BookingContext.Provider
      value={{ packageId, photographerId, setPackageId, setPhotographerId }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking harus dipakai di dalam BookingProvider");
  return ctx;
}
