
'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Experience() {

  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'b':
          if (document.referrer) {
            router.back();  // Kembali ke halaman sebelumnya
          } else {
            router.push('/');  // Jika tidak ada halaman sebelumnya, arahkan ke halaman utama
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);
  return <div>Experience</div>
}
