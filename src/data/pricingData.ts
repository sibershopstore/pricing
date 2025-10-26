import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  // Social Media Category
  {
    id: 'fb-ig',
    title: 'FB & IG',
    price: '300rb',
    description: 'Hapus Akun TerkenaHack Sekarang!',
    features: ['Proses cepat', 'Privacy 100%', 'legal'],
    category: 'social',
    badge: 'TERPOPULER'
  },
  {
    id: 'fb-ig-x',
    title: 'FB / IG / X',
    price: '100rb',
    description: 'Hapus Akunmu Sekarang!',
    features: ['Proses cepat', 'Privacy 100%', 'Legal'],
    category: 'social',
    badge: 'TERLARIS'
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    price: '200rb',
    description: 'Hapus Akunmu Sekarang!',
    features: ['Proses cepat', 'Privacy 100%', 'Legal'],
    badge: 'TERPOPULER',
    category: 'social'
  },
  {
    id: 'soundcloud-pinterest',
    title: 'SoundCloud / Pinterest',
    price: '150rb',
    description: 'Hapus Akunmu Sekarang!',
    features: ['Proses cepat', 'Privacy 100%', 'Legal'],
    badge: 'NEW',
    category: 'social'
  },
  {
    id: 'Tiktok',
    title: 'Tiktok',
    price: '350rb',
    description: 'Hapus Akunmu Sekarang!',
    features: ['Proses cepat', 'Privacy 100%', 'Legal'],
    badge: 'NEW',
    category: 'social'
  },
  {
    id: 'hapus-data-getcontact',
    title: 'Hapus Data Getcontact',
    price: '500rb',
    description: 'Hapus datamu Sekarang!',
    features: ['Tag Pager', 'Komentar', 'Privacy 100&'],
    badge: 'NEW',
    category: 'social'
  },
  {
    id: 'hapus-pencarian-google',
    title: 'Hapus Situs di Google',
    price: '800rb',
    originalPrice: '1jt',
    description: 'Hapus situs yang menganggu di pencarian google!',
    features: ['Situs Berita', 'Situs Pengadilan', 'Privacy 100%'],
    badge: 'NEW',
    category: 'social'
  },
  // Web Development Category
  {
    id: 'blog-pribadi',
    title: 'Blog Pribadi',
    price: '4jt',
    originalPrice: '5jt',
    description: '',
    features: ['CMS (Blogger/Wordpress)', 'Domain com/id', 'Template Premium', 'SEO One Page'],
    badge: 'TERLARIS',
    category: 'web'
  },
  {
    id: 'toko-online',
    title: 'Toko Online',
    price: '10jt',
    originalPrice: '15jt',
    description: '',
    features: ['CMS (Blogger/Wordpress)', 'Domain com/id', 'Template Premium', 'SEO One Page'],
    badge: 'HOT SALE',
    category: 'web'
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    price: '20jt',
    originalPrice: '25jt',
    description: '',
    features: ['Cloud Hosting', 'Domain com/id', 'Template Premium', 'SEO One Page'],
    badge: 'TERMURAH',
    category: 'web'
  },
  {
    id: 'hapus-situs-blog',
    title: 'Hapus Situs Blog',
    price: '350rb',
    description: '',
    features: ['Blog Pribadi', 'Blog Berita', 'Blog Company', 'Blog Portofolio'],
    badge: 'HOT SALE',
    category: 'web'
  },
  {
    id: 'hapus-situs-wordpress',
    title: 'Hapus Situs Wordpress',
    price: '400rb',
    description: '',
    features: ['Situs Berita', 'Situs Pribadi', 'Situs Company', 'Situs Portofolio'],
    badge: 'TERPOPULER',
    category: 'web'
  },
  {
    id: 'presentation',
    title: 'Presentation',
    price: '250rb',
    description: '',
    features: ['Buat Pekerjaan', 'Buat Sekolah', 'Buat Kuliah', 'Buat Meeting'],
    badge: 'NEW',
    category: 'web'
  },
  
  // SEO Category
  {
    id: 'search-engine-optimization',
    title: 'Search Engine Optimization',
    price: '550rb',
    description: '',
    features: ['SEO Web', 'SEO Artikel', 'Technical SEO', 'SEO Lokal'],
    badge: 'TERLARIS',
    category: 'seo'
  },
  {
    id: 'backlink',
    title: 'Backlink',
    price: '700rb',
    originalPrice: '1jt',
    description: '',
    features: ['Blog Pribadi', 'Situs Retail', 'Situs Teknologi', 'Situs Berita'],
    badge: 'TERMURAH',
    category: 'seo'
  },
  {
    id: 'remove-search-engine',
    title: 'Remove Search Engine',
    price: '350rb',
    originalPrice:'500rb',
    description: '',
    features: [
      'Hapus Identitas di Google', 
      'Hapus Akun Sosmed di Google', 
      'Hapus Konten/Web Kriminal/Porn', 
      'Situs Judi Online'
    ],
    badge: 'TERPOPULER',
    category: 'seo'
  },
  
  // Support Category
  {
    id: 'recovery-files',
    title: 'Recovery Files',
    price: '250rb',
    description: '',
    features: ['Flashdisk / Sd Card', 'JPG,PNG', 'Pdf,Docx', 'MP4 All Format'],
    badge: 'TERLARIS',
    category: 'support'
  },
  {
    id: 'it-consultant',
    title: 'IT Consultant',
    price: 'N/A',
    description: '',
    features: ['Cyber Crime', 'Penipuan', 'Pemerasan', 'Scamming'],
    badge: 'HOT SALE',
    category: 'support'
  },
  {
    id: 'trouble-software',
    title: 'Trouble Software',
    price: '250rb',
    description: '',
    features: ['Instalasi OS', 'Upgrade OS', 'Activasi Office', 'Activasi Windows 11'],
    badge: 'TERMURAH',
    category: 'support'
  },
  
  // Digital Marketing Category
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    price: '250rb',
    description: '',
    features: ['Email Marketing', 'SEM Sosial Media', 'SEO Sosial Media', 'Press Release'],
    badge: 'TERMURAH',
    category: 'marketing'
  },
  
  // AI Category
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence (AI)',
    price: '250rb',
    description: '',
    features: ['Buat Gambar Custom', 'Coding Website', 'Buat Dokumen', 'Buat Artikel'],
    badge: 'NEW',
    category: 'ai'
  }
];
