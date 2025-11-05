const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }


  return (
    <footer className="bg-gray-900 text-white py-14 px-6 sm:px-10 lg:px-16 scroll-smooth">
      <div className="max-w-7xl mx-auto">
        {/* Grid utama */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          {/* Kolom 1 - Logo & Deskripsi */}
          <div className="flex flex-col sm:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dr5pehdsw/image/upload/v1762140493/Logo_Gudang_Jasa_-_Lakal_Basyar-01_okmuvs.png"
                  alt="GudangJasa Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">GudangJasa</h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Solusi jasa pembuatan website dengan desain modern dan kreatif
            </p>
          </div>

          {/* Kolom 2 - Navigasi Cepat */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Navigasi Cepat</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                { name: "Beranda", id: "#home" },
                { name: "Tentang", id: "#tentang" },
                { name: "Layanan", id: "#layanan" },
                { name: "Benefit", id: "#benefit" },
                { name: "Harga", id: "#harga" },
                { name: "FAQ", id: "#faq" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.id}
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className="hover:text-blue-400 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3 - Tentang Proyek */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Tentang Proyek</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-sm">
              Website ini dikembangkan sebagai platform penyedia jasa digital
              modern untuk membantu individu dan bisnis dalam membangun citra
              online profesional. Seluruh layanan kami berfokus pada desain,
              performa, dan keamanan.
            </p>
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className="inline-block text-blue-400 font-medium hover:text-blue-500 transition-all duration-300"
            >
              Kembali ke atas ↑
            </a>
          </div>

          {/* Kolom 4 - Ikuti Kami (Sejajar) */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Ikuti Kami</h3>
            <div className="flex space-x-5 mt-2">
              <a
                href="https://github.com/Rakha999888/gudangJasa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition transform hover:scale-110"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 007.869 10.931c.575.106.787-.25.787-.556 0-.275-.01-1.003-.015-1.968-3.201.695-3.877-1.542-3.877-1.542-.523-1.33-1.277-1.685-1.277-1.685-1.043-.713.079-.698.079-.698 1.153.081 1.76 1.184 1.76 1.184 1.025 1.755 2.689 1.248 3.345.954.104-.743.4-1.248.727-1.534-2.556-.291-5.242-1.278-5.242-5.69 0-1.258.449-2.287 1.184-3.093-.119-.29-.513-1.465.112-3.056 0 0 .965-.309 3.165 1.183a10.9 10.9 0 012.881-.387c.977.005 1.962.132 2.881.387 2.199-1.492 3.163-1.183 3.163-1.183.627 1.591.233 2.766.114 3.056.737.806 1.183 1.835 1.183 3.093 0 4.423-2.69 5.395-5.255 5.68.409.352.774 1.045.774 2.106 0 1.52-.014 2.743-.014 3.116 0 .308.21.667.792.553A11.505 11.505 0 0023.5 12c0-6.352-5.148-11.5-11.5-11.5z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.25a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.875a.875.875 0 110 1.75.875.875 0 010-1.75z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Garis bawah */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm tracking-wide">
            © {currentYear} GudangJasa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
