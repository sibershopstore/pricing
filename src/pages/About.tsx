import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Tentang Kami</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">
              Siber Shop Store adalah sebuah startup yang bergerak di bidang jasa dan layanan digital IT.
              Kami sudah resmi terdaftar di AHU dan berkomitmen memberikan layanan berkualitas tinggi untuk
              memenuhi kebutuhan digital Anda.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Visi Kami</h2>
            <p className="text-lg mb-6">
              Menjadi mitra terpercaya dalam transformasi digital dan keamanan siber untuk setiap individu
              dan organisasi di Indonesia.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Misi Kami</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg mb-6">
              <li>Memberikan solusi digital yang inovatif dan berkualitas</li>
              <li>Menjaga keamanan dan privasi data pelanggan</li>
              <li>Memberikan layanan profesional dengan standar tinggi</li>
              <li>Berkontribusi dalam pengembangan ekosistem digital Indonesia</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;