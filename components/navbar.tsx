"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#tentang", label: "Tentang" },
    { href: "#layanan", label: "Layanan" },
    { href: "#benefit", label: "Benefit" },
    { href: "#harga", label: "Harga" },
    { href: "#faq", label: "FAQ" },
    { href: "#kontak", label: "Kontak" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    if (href) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
      }
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dr5pehdsw/image/upload/v1762140493/Logo_Gudang_Jasa_-_Lakal_Basyar-01_okmuvs.png"
                alt="GudangJasa Logo"
                className="object-contain w-full h-full"
              />
            </div>
            <span className="hidden sm:inline font-bold text-xl text-gray-900">
              GudangJasa
            </span>
          </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleScroll}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-900">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleScroll}
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
