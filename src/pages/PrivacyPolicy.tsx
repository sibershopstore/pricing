import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Kebijakan Privasi</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">
              Kami berkomitmen untuk menjaga kerahasiaan dan keamanan data pribadi Anda.
              Kebijakan privasi ini menjelaskan bagaimana kami mengumpul, menggunakan,
              dan melindungi informasi yang Anda berikan kepada kami.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Pengumpulan Data</h2>
            <p className="text-lg mb-6">
              Data yang kami kumpulkan hanya akan digunakan untuk keperluan transaksi,
              komunikasi, dan meningkatkan layanan kami. Kami tidak akan membagikan data
              Anda ke pihak ketiga tanpa izin, kecuali jika diwajibkan oleh hukum.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Keamanan Data</h2>
            <p className="text-lg mb-6">
              Kami menerapkan langkah-langkah keamanan yang ketat untuk melindungi data
              Anda dari akses yang tidak sah, penggunaan yang tidak tepat, atau pengungkapan.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Penghapusan Data</h2>
            <p className="text-lg mb-6">
              Anda dapat meminta kami untuk menghapus data pribadi Anda setelah layanan
              selesai. Kami akan memproses permintaan penghapusan data sesuai dengan
              kebijakan privasi yang berlaku.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;