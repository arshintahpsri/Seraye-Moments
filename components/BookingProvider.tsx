"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type BookingState = {
  packageId: string;
  setPackageId: (id: string) => void;
};

const BookingContext = createContext<BookingState | null>(null);

/** Menyimpan paket terpilih yang dipakai bersama katalog dan formulir pemesanan. */
export function BookingProvider({ children }: { children: ReactNode }) {
  const [packageId, setPackageId] = useState("sejenak-photo");

  return (
    <BookingContext.Provider value={{ packageId, setPackageId }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking harus dipakai di dalam BookingProvider");
  return ctx;
}
