import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Gift,
  GraduationCap,
  Heart,
  Package,
  Truck,
  Shield,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-rose-600" />
            <span className="text-2xl font-bold text-gray-900">GableBox12</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#produk" className="text-gray-600 hover:text-gray-900 transition-colors">
              Produk
            </Link>
            <Link href="#tentang" className="text-gray-600 hover:text-gray-900 transition-colors">
              Tentang Kami
            </Link>
            <Link href="#testimoni" className="text-gray-600 hover:text-gray-900 transition-colors">
              Testimoni
            </Link>
            {/* Add href to Kontak button */}
            <Button variant="outline" asChild>
              <Link href="#kontak">Kontak</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-rose-100 text-rose-800 hover:bg-rose-100">
                GableBox No.1 di Kebumen
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Kotak Gable Cantik untuk
                <span className="text-rose-600"> Setiap Momen Istimewa</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ubah hadiah biasa menjadi pengalaman yang tak terlupakan dengan kotak gable premium kami. Sempurna untuk
                wisuda, ulang tahun, pernikahan, dan perayaan istimewa lainnya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/* Add href to Belanja Sekarang button */}
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-lg px-8" asChild>
                  <Link href="#produk">
                    Belanja Sekarang
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                {/* Add href to Jelajahi Koleksi button */}
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                  <Link href="#produk">
                    Jelajahi Koleksi
                  </Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Gratis Ongkir
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Garansi Kualitas
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Desain Kustom
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-3xl transform rotate-3"></div>
              <Image
                src="/images/gable_box_modal.jpg"
                alt="Koleksi kotak gable premium"
                width={600}
                height={500}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600 text-sm">Pengiriman kilat ke seluruh Indonesia</p>
            </div>
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Kualitas Premium</h3>
              <p className="text-gray-600 text-sm">Kemasan berkualitas tinggi dan ramah lingkungan</p>
            </div>
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Desain Kustom</h3>
              <p className="text-gray-600 text-sm">Personalisasi sesuai keinginan dan tema acara Anda</p>
            </div>
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Terpercaya</h3>
              <p className="text-gray-600 text-sm">Dipercaya 10,000+ pelanggan di seluruh Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">Tentang Kami</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Cerita di balik GableBox12</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Berawal dari sebuah tugas kelompok kuliah, GableBox12 lahir dari semangat kami untuk menciptakan solusi
                  kemasan yang inovatif dan ramah lingkungan. Kami tidak menyangka bahwa proyek yang kami kerjakan
                  dengan penuh semangat ini akan menjadi awal dari sebuah perjalanan bisnis yang luar biasa.
                </p>
                <p>
                  Kami percaya bahwa kemasan bukan hanya sekedar pembungkus, tetapi bagian integral dari pengalaman
                  memberikan dan menerima hadiah. Setiap kotak gable yang kami produksi adalah wujud dari ide-ide
                  kreatif kami saat di bangku kuliah, yang kini kami sempurnakan dengan perhatian terhadap detail dan
                  kualitas terbaik.
                </p>
                <p>
                  Dari ruang kelas hingga melayani lebih dari 10,000 pelanggan di seluruh Indonesia, kami terus
                  berinovasi untuk menghadirkan produk-produk berkualitas yang tidak hanya cantik, tetapi juga
                  terjangkau dan berkelanjutan.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600">50+</div>
                  <div className="text-sm text-gray-600">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600">5+</div>
                  <div className="text-sm text-gray-600">Desain Tersedia</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600">4.7</div>
                  <div className="text-sm text-gray-600">Rating Pelanggan</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/box_mini.jpg"
                  alt="GableBox."
                  width={300}
                  height={250}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/images/box_besar.jpg"
                  alt="Isi"
                  width={300}
                  height={250}
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produk - Complete Product Section */}
      <section id="produk" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-800">Koleksi Lengkap</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Semua Produk Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temukan kotak gable sempurna untuk setiap acara dan kebutuhan Anda
            </p>
          </div>

          {/* Size Options with Details */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Pilihan Ukuran & Spesifikasi</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Ukuran Kecil */}
              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow justify-self-center">
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <Image
                    src="\images\box_mini.jpg"
                    alt="Kotak Gable Kecil"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg mb-2">Ukuran Mini</h4>
                <p className="text-gray-600 text-sm mb-2">20cm x 20cm x 15cm</p>
                <p className="text-rose-600 font-bold text-xl mb-3">Rp 15.000</p>
                {/* Add placeholder href to Pilih Ukuran button */}
                <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="#">Pilih Ukuran</Link>
                </Button>
              </div>

              {/* Ukuran Sedang */}
              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow border-rose-200 bg-rose-50 justify-self-center">
                <Badge className="mb-2 bg-rose-600 text-white">Terpopuler</Badge>
                <div className="bg-white rounded-lg p-6 mb-4">
                  <Image
                    src="\images\gable_box_modal.jpg"
                    alt="Kotak Gable Sedang"
                    width={140}
                    height={140}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg mb-2">Ukuran Sedang</h4>
                <p className="text-gray-600 text-sm mb-2">15cm x 15cm x 18cm</p>
                <p className="text-rose-600 font-bold text-xl mb-3">Rp 25.000</p>
                <Button size="sm" className="w-full bg-rose-600 hover:bg-rose-700" asChild>
                  <Link href="#">Pilih Ukuran</Link>
                </Button>
              </div>

              {/* Ukuran Besar */}
              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow justify-self-center">
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <Image
                    src="\images\box_besar.jpg"
                    alt="Kotak Gable Besar"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg mb-2">Ukuran Besar</h4>
                <p className="text-gray-600 text-sm mb-2">20cm x 20cm x 24cm</p>
                <p className="text-rose-600 font-bold text-xl mb-3">Rp 35.000</p>
                <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="#">Pilih Ukuran</Link>
                </Button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Butuh ukuran khusus atau desain kustom?</p>
              {/* Add href to Konsultasi Gratis button */}
              <Button variant="outline" size="lg" asChild>
                <Link href="#kontak">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section id="testimoni" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800">Testimoni Pelanggan</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kata Pelanggan Kami</h2>
            <p className="text-xl text-gray-600">
              Bergabunglah dengan ribuan pelanggan puas yang mempercayai kami untuk momen-momen istimewa mereka
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <Badge className="ml-2 bg-green-100 text-green-800 text-xs">Verified</Badge>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Kotak gable untuk wisuda anak saya sangat cantik dan berkualitas! Tamu-tamu pun memuji kemasan souvenir
                yang elegan. Pasti akan pesan lagi untuk acara selanjutnya."
              </p>
              <div className="flex items-center">
                <Image
                  src="/images/akun.png"
                  alt="Sarah Wijaya"
                  width={50}
                  height={50}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Sarah Wijaya</p>
                  <p className="text-sm text-gray-500">Jakarta</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <Badge className="ml-2 bg-green-100 text-green-800 text-xs">Verified</Badge>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Pelayanan cepat dan hasil memuaskan! Pesan 100 kotak untuk acara perusahaan, semua tiba tepat waktu dan
                sesuai ekspektasi. Highly recommended!"
              </p>
              <div className="flex items-center">
                <Image
                  src="/images/akun.png"
                  alt="Budi Santoso"
                  width={50}
                  height={50}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Budi Santoso</p>
                  <p className="text-sm text-gray-500">Surabaya</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <Badge className="ml-2 bg-green-100 text-green-800 text-xs">Verified</Badge>
              </div>
                <p className="text-gray-600 mb-4 italic">
                "Desain kustomnya luar biasa! benar-benar mewujudkan ide kemasan untuk pesta ulang tahun anak saya. Hasilnya melebihi ekspektasi dan membuat pestanya makin meriah!"
                </p>
              <div className="flex items-center">
                <Image
                  src="/images/akun.png"
                  alt="user3"
                  width={50}
                  height={50}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Rani</p>
                  <p className="text-sm text-gray-500">Bandung</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">4.9/5</div>
                <p className="text-gray-600">Rating Rata-rata</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">100+</div>
                <p className="text-gray-600">Pelanggan Puas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">90%</div>
                <p className="text-gray-600">Repeat Order</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Siap Membuat Hadiah Anda Lebih Istimewa?</h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Jangan biarkan momen berharga berlalu begitu saja. Wujudkan pengalaman pemberian hadiah yang tak terlupakan
            dengan kotak gable premium kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/* Add href to Mulai Belanja Sekarang button */}
            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8" asChild>
              <Link href="#produk">
                Mulai Belanja Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {/* Add href to Konsultasi Gratis button */}
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-rose-600 bg-transparent text-lg px-8"
              asChild
            >
              <Link href="#kontak">
                Konsultasi Gratis
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Package className="h-6 w-6 text-rose-600" />
                <span className="text-xl font-bold">GableBox12</span>
              </div>
              <p className="text-gray-400 mb-4">
                Kotak gable premium untuk setiap acara istimewa. Membuat kenangan Anda berkesan sejak 2025.
              </p>
              <div className="flex space-x-4">
                {/* Add placeholder hrefs to social icons */}
                <Link href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors cursor-pointer">
                  <span className="text-xs">FB</span>
                </Link>
                <Link href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors cursor-pointer">
                  <span className="text-xs">IG</span>
                </Link>
                <Link href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors cursor-pointer">
                  <span className="text-xs">WA</span>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-gray-400">
                {/* Add placeholder hrefs to product links */}
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Kotak Wisuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Kotak Ulang Tahun
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Souvenir Pernikahan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Desain Kustom
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Paket Hemat
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                {/* Add placeholder hrefs to service links */}
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Konsultasi Gratis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Desain Kustom
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pengiriman Express
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Garansi Kualitas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    After Sales Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                {/* Add placeholder hrefs to contact links */}
                <li><Link href="#">📱 +62 812-3456-7890</Link></li>
                <li><Link href="#">🏢 Kebumen, Indonesia</Link></li>
                <li><Link href="#">🕒 Senin - Sabtu: 08:00 - 17:00</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            {/* Add placeholder hrefs to policy links */}
            <p>&copy; 2025 GableBox12. Hak Cipta dilindungi Undang-undang. | <Link href="#">Syarat & Ketentuan</Link> | <Link href="#">Kebijakan Privasi</Link></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
