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
            <span className="text-2xl font-bold text-gray-900">KotakHadiah Co.</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#etalase" className="text-gray-600 hover:text-gray-900 transition-colors">
              Etalase
            </Link>
            <Link href="#produk" className="text-gray-600 hover:text-gray-900 transition-colors">
              Produk
            </Link>
            <Link href="#tentang" className="text-gray-600 hover:text-gray-900 transition-colors">
              Tentang Kami
            </Link>
            <Link href="#testimoni" className="text-gray-600 hover:text-gray-900 transition-colors">
              Testimoni
            </Link>
            <Button variant="outline">Kontak</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-rose-100 text-rose-800 hover:bg-rose-100">
                Kemasan Hadiah Premium #1 di Indonesia
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
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-lg px-8">
                  Belanja Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  Jelajahi Koleksi
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
                src="/placeholder.svg?height=500&width=600"
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
              <p className="text-gray-600 text-sm">Pengiriman kilat ke seluruh Indonesia dalam 1-3 hari kerja</p>
            </div>
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Kualitas Premium</h3>
              <p className="text-gray-600 text-sm">Bahan berkualitas tinggi dan ramah lingkungan</p>
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

      {/* Etalase - Featured Products */}
      <section id="etalase" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Produk Unggulan</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Etalase Produk Terlaris</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Koleksi kotak gable pilihan yang paling disukai pelanggan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Product 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Kotak Gable Wisuda Premium"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Terlaris</Badge>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kotak Gable Wisuda Premium</h3>
                <p className="text-gray-600 mb-4">
                  Kotak elegan dengan desain akademik, sempurna untuk hadiah wisuda dan pencapaian akademik.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">(127 ulasan)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-rose-600">Rp 45.000</span>
                    <span className="text-sm text-gray-500 line-through ml-2">Rp 60.000</span>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Beli Sekarang
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Product 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Kotak Gable Ulang Tahun Colorful"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-pink-600 text-white">Favorit</Badge>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Gift className="h-5 w-5 text-pink-600" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kotak Gable Ulang Tahun Colorful</h3>
                <p className="text-gray-600 mb-4">
                  Desain berwarna-warni yang ceria, cocok untuk pesta ulang tahun anak dan dewasa.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">(89 ulasan)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-rose-600">Rp 35.000</span>
                    <span className="text-sm text-gray-500 line-through ml-2">Rp 45.000</span>
                  </div>
                  <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                    Beli Sekarang
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Product 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Kotak Gable Wedding Elegant"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-purple-600 text-white">Premium</Badge>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Heart className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kotak Gable Wedding Elegant</h3>
                <p className="text-gray-600 mb-4">
                  Kemasan mewah untuk souvenir pernikahan dengan sentuhan elegan dan romantis.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">(156 ulasan)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-rose-600">Rp 65.000</span>
                    <span className="text-sm text-gray-500 line-through ml-2">Rp 80.000</span>
                  </div>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Beli Sekarang
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8 bg-transparent">
              Lihat Semua Produk Unggulan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">Tentang Kami</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Kisah di Balik KotakHadiah Co.</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Dimulai dari sebuah ide sederhana pada tahun 2020, KotakHadiah Co. lahir dari keinginan untuk membuat
                  setiap momen pemberian hadiah menjadi lebih istimewa dan berkesan.
                </p>
                <p>
                  Kami percaya bahwa kemasan bukan hanya sekedar pembungkus, tetapi bagian integral dari pengalaman
                  memberikan dan menerima hadiah. Setiap kotak gable yang kami produksi dibuat dengan perhatian detail
                  dan kualitas terbaik.
                </p>
                <p>
                  Dengan lebih dari 10,000 pelanggan puas di seluruh Indonesia, kami terus berinovasi untuk menghadirkan
                  produk-produk berkualitas yang ramah lingkungan dan terjangkau.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600">10K+</div>
                  <div className="text-sm text-gray-600">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600">50+</div>
                  <div className="text-sm text-gray-600">Desain Tersedia</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600">4.9</div>
                  <div className="text-sm text-gray-600">Rating Pelanggan</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/placeholder.svg?height=250&width=300"
                  alt="Tim KotakHadiah Co."
                  width={300}
                  height={250}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/placeholder.svg?height=250&width=300"
                  alt="Proses produksi"
                  width={300}
                  height={250}
                  className="rounded-lg shadow-lg mt-8"
                />
                <Image
                  src="/placeholder.svg?height=250&width=300"
                  alt="Quality control"
                  width={300}
                  height={250}
                  className="rounded-lg shadow-lg -mt-8"
                />
                <Image
                  src="/placeholder.svg?height=250&width=300"
                  alt="Packaging process"
                  width={300}
                  height={250}
                  className="rounded-lg shadow-lg"
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

          {/* Product Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Kategori Wisuda"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <GraduationCap className="h-8 w-8 mb-2" />
                  <h3 className="text-xl font-semibold">Kotak Wisuda</h3>
                  <p className="text-sm opacity-90">15+ desain tersedia</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Rayakan pencapaian akademik dengan kotak elegan yang sempurna untuk ijazah, hadiah, dan
                  kenang-kenangan wisuda.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-rose-600 font-semibold">Mulai dari Rp 25.000</span>
                  <Button className="bg-blue-600 hover:bg-blue-700">Lihat Koleksi</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Kategori Ulang Tahun"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Gift className="h-8 w-8 mb-2" />
                  <h3 className="text-xl font-semibold">Kotak Ulang Tahun</h3>
                  <p className="text-sm opacity-90">20+ desain tersedia</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Buat ulang tahun lebih istimewa dengan desain berwarna-warni dan menyenangkan untuk segala usia.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-rose-600 font-semibold">Mulai dari Rp 20.000</span>
                  <Button className="bg-pink-600 hover:bg-pink-700">Lihat Koleksi</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Kategori Acara Khusus"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Heart className="h-8 w-8 mb-2" />
                  <h3 className="text-xl font-semibold">Acara Khusus</h3>
                  <p className="text-sm opacity-90">25+ desain tersedia</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Dari pernikahan hingga anniversary, temukan kotak sempurna untuk momen-momen berharga dalam hidup.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-rose-600 font-semibold">Mulai dari Rp 30.000</span>
                  <Button className="bg-purple-600 hover:bg-purple-700">Lihat Koleksi</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Size Options with Details */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Pilihan Ukuran & Spesifikasi</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Kotak Gable Kecil"
                    width={120}
                    height={120}
                    className="mx-auto"
                  />
                </div>
                <h4 className="font-semibold text-lg mb-2">Ukuran Kecil</h4>
                <p className="text-gray-600 text-sm mb-2">10cm x 10cm x 12cm</p>
                <p className="text-gray-600 text-xs mb-3">Cocok untuk: Souvenir kecil, permen, aksesoris</p>
                <p className="text-rose-600 font-bold text-xl mb-3">Rp 15.000</p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  Pilih Ukuran
                </Button>
              </div>

              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow border-rose-200 bg-rose-50">
                <Badge className="mb-2 bg-rose-600 text-white">Terpopuler</Badge>
                <div className="bg-white rounded-lg p-6 mb-4">
                  <Image
                    src="/placeholder.svg?height=140&width=140"
                    alt="Kotak Gable Sedang"
                    width={140}
                    height={140}
                    className="mx-auto"
                  />
                </div>
                <h4 className="font-semibold text-lg mb-2">Ukuran Sedang</h4>
                <p className="text-gray-600 text-sm mb-2">15cm x 15cm x 18cm</p>
                <p className="text-gray-600 text-xs mb-3">Cocok untuk: Hadiah sedang, makanan, buku</p>
                <p className="text-rose-600 font-bold text-xl mb-3">Rp 25.000</p>
                <Button size="sm" className="w-full bg-rose-600 hover:bg-rose-700">
                  Pilih Ukuran
                </Button>
              </div>

              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="Kotak Gable Besar"
                    width={160}
                    height={160}
                    className="mx-auto"
                  />
                </div>
                <h4 className="font-semibold text-lg mb-2">Ukuran Besar</h4>
                <p className="text-gray-600 text-sm mb-2">20cm x 20cm x 24cm</p>
                <p className="text-gray-600 text-xs mb-3">Cocok untuk: Hadiah besar, pakaian, elektronik</p>
                <p className="text-rose-600 font-bold text-xl mb-3">Rp 35.000</p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  Pilih Ukuran
                </Button>
              </div>

              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <Image
                    src="/placeholder.svg?height=180&width=180"
                    alt="Kotak Gable Jumbo"
                    width={180}
                    height={180}
                    className="mx-auto"
                  />
                </div>
                <h4 className="font-semibold text-lg mb-2">Ukuran Jumbo</h4>
                <p className="text-gray-600 text-sm mb-2">25cm x 25cm x 30cm</p>
                <p className="text-gray-600 text-xs mb-3">Cocok untuk: Hadiah jumbo, hampers, set produk</p>
                <p className="text-rose-600 font-bold text-xl mb-3">Rp 45.000</p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  Pilih Ukuran
                </Button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Butuh ukuran khusus atau desain kustom?</p>
              <Button variant="outline" size="lg">
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
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
                  src="/placeholder.svg?height=50&width=50"
                  alt="Sarah Wijaya"
                  width={50}
                  height={50}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Sarah Wijaya</p>
                  <p className="text-sm text-gray-500">Jakarta • Wisuda S1</p>
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
                  src="/placeholder.svg?height=50&width=50"
                  alt="Budi Santoso"
                  width={50}
                  height={50}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Budi Santoso</p>
                  <p className="text-sm text-gray-500">Surabaya • Corporate Event</p>
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
                "Desain kustomnya luar biasa! Tim KotakHadiah Co. sangat membantu mewujudkan ide kemasan pernikahan
                impian kami. Hasilnya melebihi ekspektasi!"
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Rina & Andi"
                  width={50}
                  height={50}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Rina & Andi</p>
                  <p className="text-sm text-gray-500">Bandung • Wedding</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">4.9/5</div>
                <p className="text-gray-600">Rating Rata-rata</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">10,000+</div>
                <p className="text-gray-600">Pelanggan Puas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">98%</div>
                <p className="text-gray-600">Repeat Order</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">24/7</div>
                <p className="text-gray-600">Customer Support</p>
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
            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8">
              Mulai Belanja Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-rose-600 bg-transparent text-lg px-8"
            >
              Konsultasi Gratis
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-rose-100 text-sm">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Gratis ongkir untuk pembelian di atas Rp 500.000
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Garansi uang kembali 100% dalam 30 hari
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Customer support 24/7 siap membantu
            </div>
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
                <span className="text-xl font-bold">KotakHadiah Co.</span>
              </div>
              <p className="text-gray-400 mb-4">
                Kotak gable premium untuk setiap acara istimewa. Membuat hadiah Anda berkesan sejak 2020.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors cursor-pointer">
                  <span className="text-xs">FB</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors cursor-pointer">
                  <span className="text-xs">IG</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors cursor-pointer">
                  <span className="text-xs">WA</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-gray-400">
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
                <li>📧 info@kotakhadiah.co.id</li>
                <li>📱 +62 812-3456-7890</li>
                <li>🏢 Jakarta, Indonesia</li>
                <li>🕒 Senin - Sabtu: 08:00 - 17:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KotakHadiah Co. Semua hak dilindungi. | Syarat & Ketentuan | Kebijakan Privasi</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
