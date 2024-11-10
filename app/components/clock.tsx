"use client"
import { useState, useEffect } from 'react';

export const Clock = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    // Set interval untuk memperbarui waktu setiap detik
    const intervalId = setInterval(updateClock, 1000);

    // Panggil updateClock sekali untuk menampilkan waktu saat ini ketika pertama kali di-render
    updateClock();

    // Bersihkan interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="font-mono text-xs">
      <p>{time}</p>
    </div>
  );
};
