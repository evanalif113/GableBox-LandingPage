import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Gift, GraduationCap, Heart, Package, Truck, Shield, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-rose-600" />
            <span className="text-2xl font-bold text-gray-900">KotakHadiah Co.</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#products" className="text-gray-600 hover:text-gray-900">
              Produk
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-gray-900">
              Ulasan
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900">
              Tentang
            </Link>
            <Button variant="outline">Kontak</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-rose-100 text-rose-800 hover:bg-rose-100">Kemasan Hadiah Premium</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Kotak Gable Cantik untuk
            <span className="text-rose-600"> Setiap Acara</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ubah hadiah Anda menjadi pengalaman yang tak terlupakan dengan kotak gable premium kami. Sempurna untuk
            wisuda, ulang tahun, dan perayaan istimewa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
              Belanja Sekarang
            </Button>
            <Button size="lg" variant="outline">
              Jelajahi Koleksi
            </Button>
          </div>
          <div className="mt-12">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Beautiful gable boxes arrangement"
              width={600}
              height={400}
              className="mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600">Pengiriman kilat agar hadiah Anda tiba tepat waktu</p>
            </div>
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kualitas Premium</h3>
              <p className="text-gray-600">Bahan tahan lama dan ramah lingkungan yang terlihat dan terasa premium</p>
            </div>
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Opsi Kustom</h3>
              <p className="text-gray-600">Personalisasi kotak Anda dengan warna dan desain khusus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sempurna untuk Setiap Acara</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temukan berbagai macam kotak gable kami yang dirancang untuk berbagai perayaan dan momen pemberian hadiah
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Graduation gable boxes"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <GraduationCap className="h-8 w-8 text-white bg-blue-600 p-1 rounded" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kotak Wisuda</h3>
                <p className="text-gray-600 mb-4">
                  Rayakan pencapaian akademik dengan kotak elegan yang sempurna untuk ijazah, hadiah, dan
                  kenang-kenangan.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Belanja Wisuda</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Birthday gable boxes"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Gift className="h-8 w-8 text-white bg-pink-600 p-1 rounded" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kotak Ulang Tahun</h3>
                <p className="text-gray-600 mb-4">
                  Buat ulang tahun lebih istimewa dengan desain berwarna-warni dan menyenangkan yang membawa
                  kegembiraan.
                </p>
                <Button className="w-full bg-pink-600 hover:bg-pink-700">Belanja Ulang Tahun</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Special occasion gable boxes"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Heart className="h-8 w-8 text-white bg-red-600 p-1 rounded" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Acara Khusus</h3>
                <p className="text-gray-600 mb-4">
                  Dari pernikahan hingga anniversary, temukan kotak sempurna untuk momen-momen berharga dalam hidup.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">Belanja Khusus</Button>
              </CardContent>
            </Card>
          </div>

          {/* Size Options */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Ukuran Tersedia</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Small gable box"
                    width={120}
                    height={120}
                    className="mx-auto"
                  />
                </div>
                <h4 className="font-semibold">Kecil</h4>
                <p className="text-gray-600 text-sm">4" x 4" x 4"</p>
                <p className="text-rose-600 font-semibold">$2.99</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
                  <Image
                    src="/placeholder.svg?height=140&width=140"
                    alt="Medium gable box"
                    width={140}
                    height={140}
                    className="mx-auto"
                  />
                </div>
                <h4 className="font-semibold">Sedang</h4>
                <p className="text-gray-600 text-sm">6" x 6" x 6"</p>
                <p className="text-rose-600 font-semibold">$4.99</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="Large gable box"
                    width={160}
                    height={160}
                    className="mx-auto"
                  />
                </div>
                <h4 className="font-semibold">Besar</h4>
                <p className="text-gray-600 text-sm">8" x 8" x 8"</p>
                <p className="text-rose-600 font-semibold">$6.99</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
                  <Image
                    src="/placeholder.svg?height=180&width=180"
                    alt="Extra large gable box"
                    width={180}
                    height={180}
                    className="mx-auto"
                  />
                </div>
                <h4 className="font-semibold">Sangat Besar</h4>
                <p className="text-gray-600 text-sm">10" x 10" x 10"</p>
                <p className="text-rose-600 font-semibold">$8.99</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kata Pelanggan Kami</h2>
            <p className="text-xl text-gray-600">
              Bergabunglah dengan ribuan pelanggan puas yang mempercayai kami untuk momen-momen istimewa mereka
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Sempurna untuk pesta wisuda putri saya! Kotaknya cantik dan bisa menampung semua hadiah kecil dengan
                sempurna. Kualitas bagus!"
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Pembeli Terverifikasi</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Saya pesan ini untuk souvenir pesta ulang tahun anak saya. Tiba dengan cepat dan persis seperti di
                foto. Sangat direkomendasikan!"
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Mike Chen</p>
                  <p className="text-sm text-gray-500">Pembeli Terverifikasi</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Layanan pelanggan luar biasa dan kemasan yang indah. Kotak-kotak ini membuat souvenir pernikahan kami
                terlihat sangat profesional dan elegan."
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Emily Rodriguez</p>
                  <p className="text-sm text-gray-500">Pembeli Terverifikasi</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-rose-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Siap Membuat Hadiah Anda Istimewa?</h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Jelajahi koleksi lengkap kotak gable premium kami dan temukan kemasan sempurna untuk perayaan Anda
            selanjutnya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
              Belanja Semua Produk
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-rose-600 bg-transparent"
            >
              Dapatkan Penawaran Khusus
            </Button>
          </div>
          <div className="mt-8 text-rose-100">
            <p>Gratis ongkir untuk pembelian di atas Rp 500.000 • Garansi uang kembali 30 hari</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Package className="h-6 w-6 text-rose-600" />
                <span className="text-xl font-bold">KotakHadiah Co.</span>
              </div>
              <p className="text-gray-400">
                Kotak gable premium untuk setiap acara istimewa. Membuat hadiah Anda berkesan sejak 2020.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Kotak Wisuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Kotak Ulang Tahun
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Souvenir Pernikahan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Desain Kustom
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Dukungan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Hubungi Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Info Pengiriman
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pengembalian
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Keberlanjutan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Karir
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KotakHadiah Co. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
