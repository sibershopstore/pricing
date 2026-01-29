import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  // ================= SOCIAL =================
  {
    id: 'hapus-review-negatif',
    title: 'Hapus Review Negatif',
    price: '500rb',
    description: 'Hapus ulasan merugikan',
    features: ['Google Maps', 'Marketplace', 'Facebook', 'Privacy'],
    badge: 'TERLARIS',
    category: 'social'
  },
  {
    id: 'hapus-konten-viral',
    title: 'Hapus Konten Viral',
    price: 'N/A',
    description: 'Hapus konten merugikan',
    features: ['Media Sosial', 'Portal Berita', 'Analisa Kasus', 'Privacy'],
    badge: 'HOT SALE',
    category: 'social'
  },
  {
    id: 'take-down-konten-palsu',
    title: 'Take Down Konten Palsu',
    price: '1,5jt',
    originalPrice: '5jt',
    description: 'Hapus konten penipuan',
    features: ['Akun Palsu', 'Konten bullying', 'Konten Penipuan', 'Privacy'],
    badge: 'TERLARIS',
    category: 'social'
  },
  {
    id: 'fb-ig',
    title: 'FB & Instagram',
    price: '300rb',
    description: 'Hapus akun terkena hack',
    features: ['Proses Cepat', 'Privacy 100%', 'Legal', 'Support'],
    badge: 'TERPOPULER',
    category: 'social'
  },
  {
    id: 'fb-ig-x',
    title: 'FB / IG / X',
    price: '100rb',
    description: 'Hapus akun sosial media',
    features: ['Proses Cepat', 'Privacy 100%', 'Legal', 'Support'],
    badge: 'TERLARIS',
    category: 'social'
  },
  {
    id: 'hapus-akun-negatif',
    title: 'Hapus Akun Negatif',
    price: '3,5jt',
    description: 'Penanganan akun bermasalah',
    features: ['Instagram', 'Facebook', 'Analisa Kasus', 'Privacy'],
    badge: 'HOT SALE',
    category: 'social'
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    price: '200rb',
    description: 'Hapus akun profesional',
    features: ['Proses Cepat', 'Privacy 100%', 'Legal', 'Support'],
    badge: 'TERPOPULER',
    category: 'social'
  },
  {
    id: 'soundcloud-pinterest',
    title: 'SoundCloud / Pinterest',
    price: '150rb',
    description: 'Hapus akun kreator',
    features: ['Proses Cepat', 'Privacy 100%', 'Legal', 'Support'],
    badge: 'NEW',
    category: 'social'
  },
  {
    id: 'tiktok',
    title: 'TikTok',
    price: '250rb',
    description: 'Hapus akun tiktok aman',
    features: ['Proses Cepat', 'Privacy 100%', 'Legal', 'Support'],
    badge: 'NEW',
    category: 'social'
  },
  {
    id: 'hapus-komentar',
    title: 'Hapus Komentar',
    price: '150rb',
    originalPrice: '350rb',
    description: 'Hapus komentar negatif',
    features: ['Instagram', 'Facebook', 'X', 'Threads'],
    badge: 'TERMURAH',
    category: 'social'
  },

  // ================= WEB =================
  {
    id: 'blog-pribadi',
    title: 'Blog Pribadi',
    price: '4jt',
    originalPrice: '5jt',
    description: 'Website blog pribadi',
    features: ['WordPress', 'Domain', 'Template', 'SEO'],
    badge: 'TERLARIS',
    category: 'web'
  },
  {
    id: 'toko-online',
    title: 'Toko Online',
    price: '10jt',
    originalPrice: '15jt',
    description: 'Website jualan online',
    features: ['E-Commerce', 'Payment', 'Produk', 'SEO'],
    badge: 'HOT SALE',
    category: 'web'
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    price: '20jt',
    originalPrice: '25jt',
    description: 'Website perusahaan profesional',
    features: ['Company Page', 'Branding', 'Hosting', 'SEO'],
    badge: 'TERMURAH',
    category: 'web'
  },
  {
    id: 'presentation',
    title: 'Presentation',
    price: '250rb',
    description: 'Presentasi cepat profesional',
    features: ['Kerja', 'Sekolah', 'Kuliah', 'Meeting'],
    badge: 'NEW',
    category: 'web'
  },
  {
    id: 'scribd',
    title: 'Hapus Dokumen Scribd',
    price: '250rb',
    originalPrice: '350rb',
    description: 'Hapus dokumen sensitif',
    features: ['Dokumen Pribadi', 'Dokumen Perusahaan', 'Dokumen Negatif', 'Privacy'],
    badge: 'HOT SALE',
    category: 'web'
  },
  {
    id: 'getcontact',
    title: 'Hapus Data GetContact',
    price: '500rb',
    description: 'Hapus data pribadi',
    features: ['Tag Caller', 'Komentar', 'Info Kontak', 'Privacy'],
    badge: 'NEW',
    category: 'web'
  },
  {
    id: 'hapus-google',
    title: 'Hapus Pencarian Google',
    price: '6jt',
    originalPrice: '9jt',
    description: 'Hapus hasil pencarian',
    features: ['Situs Berita', 'Situs Pengadilan', 'Tim Legal', 'Privacy'],
    badge: 'TERLARIS',
    category: 'web'
  },
  {
    id: 'hapus-blog',
    title: 'Hapus Situs Blog',
    price: '400rb',
    description: 'Hapus situs blog',
    features: ['Blog Pribadi', 'Blog Berita', 'Company Blog', 'Portofolio'],
    badge: 'HOT SALE',
    category: 'web'
  },
  {
    id: 'hapus-wordpress',
    title: 'Hapus Situs WordPress',
    price: '400rb',
    description: 'Hapus situs wordpress',
    features: ['Situs Pribadi', 'Company', 'Berita', 'Portofolio'],
    badge: 'TERPOPULER',
    category: 'web'
  },

  // ================= SEO =================
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    price: '550rb',
    description: 'Optimasi website google',
    features: ['SEO Web', 'SEO Artikel', 'Technical SEO', 'SEO Lokal'],
    badge: 'TERLARIS',
    category: 'seo'
  },
  {
    id: 'backlink',
    title: 'Backlink',
    price: '700rb',
    originalPrice: '1jt',
    description: 'Backlink berkualitas aman',
    features: ['Blog', 'Retail', 'Teknologi', 'Berita'],
    badge: 'TERMURAH',
    category: 'seo'
  },

  // ================= SUPPORT =================
  {
    id: 'remove-search',
    title: 'Remove Search',
    price: '400rb',
    originalPrice: '700rb',
    description: 'Hapus Situs yang telah dihapus',
    features: ['Postingan Sosmed', 'Artikel Situs', 'Laporan', 'Support'],
    badge: 'HOT SALE',
    category: 'support'
  },
  {
    id: 'recovery-file',
    title: 'Recovery File',
    price: '450rb',
    description: 'Pulihkan data terhapus',
    features: ['Flashdisk', 'SD Card', 'Dokumen', 'Video'],
    badge: 'TERLARIS',
    category: 'support'
  },
  {
    id: 'trouble-software',
    title: 'Trouble Software',
    price: '250rb',
    description: 'Perbaikan software sistem',
    features: ['Install OS', 'Upgrade OS', 'Office', 'Windows 11'],
    badge: 'TERMURAH',
    category: 'support'
  },
  {
    id: 'it-consultant',
    title: 'IT Consultant',
    price: 'N/A',
    description: 'Konsultasi masalah IT',
    features: ['Penipuan', 'Scamming', 'Pemerasan', 'Cyber Crime'],
    badge: 'HOT SALE',
    category: 'support'
  },

  // ================= MARKETING =================
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    price: 'N/A',
    description: 'Promosi bisnis digital',
    features: ['Email', 'SEM', 'SEO Sosmed', 'Press Release'],
    badge: 'TERMURAH',
    category: 'marketing'
  },

  // ================= AI =================
  {
    id: 'ai-service',
    title: 'Artificial Intelligence',
    price: '250rb',
    description: 'Layanan AI digital',
    features: ['Gambar AI', 'Coding', 'Dokumen', 'Artikel'],
    badge: 'NEW',
    category: 'ai'
  }
];
