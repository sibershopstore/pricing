import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Syarat & Ketentuan</h1>
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Pembayaran</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg mb-6">
              <li>Pembayaran dapat dilakukan melalui transfer bank, e-wallet (OVO, GoPay, DANA), dan virtual account</li>
              <li>Pembayaran harus dilunasi sesuai dengan kesepakatan yang telah dibuat</li>
              <li>Untuk beberapa layanan, tersedia opsi pembayaran di akhir</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Durasi Pengerjaan</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg mb-6">
              <li>Layanan sosial media: 1-3 hari kerja</li>
              <li>Pengembangan website: 2-4 minggu (tergantung kompleksitas)</li>
              <li>SEO dan optimisasi: sesuai dengan paket yang dipilih</li>
              <li>IT Support: response time maksimal 24 jam</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Garansi Layanan</h2>
            <p className="text-lg mb-6">
              Setiap layanan kami memiliki garansi yang berbeda-beda. Garansi mencakup:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg mb-6">
              <li>Jaminan kepuasan pelanggan</li>
              <li>Support teknis selama periode garansi</li>
              <li>Perbaikan bug dan masalah teknis</li>
              <li>Konsultasi lanjutan sesuai ketentuan</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;