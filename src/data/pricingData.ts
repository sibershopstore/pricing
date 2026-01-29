import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  // ================= SOCIAL MEDIA =================
  {
    id: 'fb-ig',
    title: 'FB & Instagram',
    price: '300rb',
    description: 'Hapus akun Facebook & Instagram yang terkena hack.',
    features: ['Proses cepat', 'Privacy 100%', 'Legal'],
    badge: 'TERPOPULER',
    category: 'social'
  },
  {
    id: 'fb-ig-x',
    title: 'FB / IG / X',
    price: '100rb',
    description: 'Hapus akun media sosialmu sekarang.',
    features: ['Proses cepat', 'Privacy 100%', 'Legal'],
    badge: 'TERLARIS',
    category: 'social'
  },
  {
    id: 'hapus-akun-negatif',
    title: 'Hapus Akun Negatif',
    price: 'N/A',
    description: 'Penanganan akun negatif sesuai kebijakan platform.',
    features: ['Instagram', 'Facebook', 'Privacy 100%'],
    badge: 'HOT SALE',
    category: 'social'
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    price: '200rb',
    description: 'Hapus akun LinkedIn secara legal dan aman.',
    features: ['Proses cepat', 'Privacy 100%', 'Legal'],
    badge: 'TERPOPULER',
    category: 'social'
  },
  {
    id: 'soundcloud-pinterest',
    title: 'SoundCloud / Pinterest',
    price: '150rb',
    description: 'Hapus akun SoundCloud & Pinterest.',
    features: ['Proses cepat', 'Privacy 100%', 'Legal'],
    badge: 'NEW',
    category: 'social'
  },
  {
    id: 'tiktok',
    title: 'TikTok',
    price: '250rb',
    description: 'Hapus akun TikTok dengan aman.',
    features: ['Proses cepat', 'Privacy 100%', 'Legal'],
    badge: 'NEW',
    category: 'social'
  },
  {
    id: 'hapus-komentar',
    title: 'Hapus Komentar',
    price: '150rb',
    originalPrice: '350rb',
    description: 'Hapus komentar negatif untuk menjaga reputasi.',
    features: ['Instagram', 'Facebook', 'Google Maps', 'Threads'],
    badge: 'TERMURAH',
    category: 'social'
  },

  // ================= WEB / CONTENT =================
  {
    id: 'scribd',
    title: 'Hapus Dokumen Scribd',
    price: '250rb',
    originalPrice: '350rb',
    description: 'Hapus dokumen sensitif dari Scribd.',
    features: ['Dokumen Pribadi', 'Dokumen Perusahaan', 'Dokumen Negatif'],
    badge: 'HOT SALE',
    category: 'web'
  },
  {
    id: 'getcontact',
    title: 'Hapus Data GetContact',
    price: '500rb',
    description: 'Hapus data pribadimu dari GetContact.',
    features: ['Tag Caller', 'Komentar', 'Informasi Kontak', 'Privacy 100%'],
    badge: 'NEW',
    category: 'web'
  },
  {
    id: 'hapus-google',
    title: 'Hapus Pencarian Google',
    price: '6jt',
    originalPrice: '9jt',
    description: 'Hapus artikel atau situs dari hasil pencarian Google.',
    features: ['Situs Berita', 'Situs Pengadilan', 'Privacy 100%', 'Tim Legal'],
    badge: 'TERLARIS',
    category: 'web'
  },
  {
    id: 'hapus-situs',
    title: 'Hapus Situs Blog',
    price: '400rb',
    description: 'Hapus situs blog yang mengganggu.',
    features: ['Blog Pribadi', 'Blog Berita', 'Company Blog', 'Portofolio'],
    badge: 'HOT SALE',
    category: 'web'
  },
  {
    id: 'hapus-wordpress',
    title: 'Hapus Situs WordPress',
    price: '400rb',
    description: 'Hapus situs WordPress secara permanen.',
    features: ['Situs Pribadi', 'Company', 'Berita', 'Portofolio'],
    badge: 'TERPOPULER',
    category: 'web'
  },

  // ================= SEO =================
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    price: '550rb',
    description: 'Optimasi website agar tampil di halaman pertama Google.',
    features: ['SEO Web', 'SEO Artikel', 'Technical SEO', 'SEO Lokal'],
    badge: 'TERLARIS',
    category: 'seo'
  },
  {
    id: 'backlink',
    title: 'Backlink',
    price: '700rb',
    originalPrice: '1jt',
    description: 'Backlink berkualitas untuk menaikkan ranking.',
    features: ['Blog', 'Retail', 'Teknologi', 'Berita'],
    badge: 'TERMURAH',
    category: 'seo'
  },

  // ================= SUPPORT =================
  {
    id: 'recovery',
    title: 'Recovery File',
    price: '250rb',
    description: 'Pemulihan data yang terhapus.',
    features: ['Flashdisk / SD Card', 'JPG, PNG', 'PDF, DOCX', 'MP4'],
    badge: 'TERLARIS',
    category: 'support'
  },
  {
    id: 'it-consultant',
    title: 'IT Consultant',
    price: 'N/A',
    description: 'Konsultasi masalah IT & cyber crime.',
    features: ['Penipuan', 'Scamming', 'Pemerasan', 'Cyber Crime'],
    badge: 'HOT SALE',
    category: 'support'
  },

  // ================= AI =================
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    price: '250rb',
    description: 'Layanan AI untuk kebutuhan digital.',
    features: ['Buat Gambar', 'Coding', 'Dokumen', 'Artikel'],
    badge: 'NEW',
    category: 'ai'
  }
];
