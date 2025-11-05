"use client"

import { useState, useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    question: "Berapa lama pengerjaan di GudangJasa?",
    answer:
      "Waktu pembuatan website bervariasi tergantung dari kompleksitas fitur dan desain. Untuk website sederhana, biasanya memakan waktu sekitar 3 hingga 6 hari. Untuk website yang kompleks, bisa memakan waktu 3 hingga 4 minggu.",
  },
  {
    question: "Apakah harus punya gambar & teks?",
    answer:
      "Kami bisa membantu dalam menyediakan konten jika dibutuhkan. Namun, jika kamu sudah punya konten seperti teks atau gambar, itu akan sangat membantu untuk proses pembuatan.",
  },
  {
    question: "Gimana proses pembuatan di GudangJasa?",
    answer:
      "Prosesnya terdiri dari beberapa tahap: konsultasi, perancangan desain, pengembangan, pengujian, dan peluncuran. Kami akan terus berkomunikasi dengan klien selama proses ini untuk memastikan hasil akhir sesuai dengan keinginan.",
  },
  {
    question: "Apakah ada layanan maintenance?",
    answer:
      "Ya, kami menyediakan layanan maintenance untuk memastikan website kamu tetap berjalan dengan baik dan aman. Layanan ini mencakup pembaruan sistem, backup, dan perbaikan jika ada masalah.",
  },
  {
    question: "Jika project selesai tapi ada revisi?",
    answer:
      "Kami memberikan revisi gratis sesuai dengan paket yang dipilih. Jika revisi melebihi batas yang ditentukan, akan ada tambahan biaya per-revisi.",
  },
  {
    question: "Bagaimana dengan sistem pembayaran?",
    answer:
      "Kami menerima pembayaran melalui Paypal, OVO, Dana, ShopeePay, Mandiri, dan BRI. Pembayaran dapat dilakukan dengan dua opsi yaitu Full Payment, DP 50% dan kekurangan dapat dibayar ketika project sudah selesai",
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionRef = useRef(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const items = itemsRef.current.filter((item): item is HTMLDivElement => item !== null)

    items.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: index * 0.1,
        ease: "power3.out",
      })
    })
  }, [])

  return (
    <section ref={sectionRef} id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">FAQ</span> - Pertanyaan Umum
          </h2>
          <p className="text-xl text-gray-600">Temukan jawaban untuk pertanyaan yang sering ditanyakan</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el
              }}
              className="border-2 border-gray-100 rounded-lg overflow-hidden hover:border-blue-200 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
              >
                <h3 className="text-left font-semibold text-gray-900">{faq.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t-2 border-gray-100">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
