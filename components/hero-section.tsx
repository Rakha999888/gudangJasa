"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

const HeroSection = () => {
  const headlineRef = useRef(null)
  const subheadlineRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(headlineRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        subheadlineRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        buttonRef.current,
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.4"
      )
  }, [])

  const handleCTA = () => {
    const element = document.querySelector("#harga")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1
          ref={headlineRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 text-balance"
        >
          Temukan Jasa Terbaik di{" "}
          <span className="text-blue-600">GudangJasa</span>
        </h1>

        <p
          ref={subheadlineRef}
          className="text-xl md:text-2xl text-gray-600 mb-8 text-balance"
        >
          Solusi praktis untuk kebutuhan profesional Anda. Mudah, cepat, dan aman.
        </p>

        <div
          ref={buttonRef}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            id="#harga"
            onClick={handleCTA}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
