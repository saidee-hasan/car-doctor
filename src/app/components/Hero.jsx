import React from 'react'
import Banner from "../../../public/assets/images/banner/5.jpg"
import Image from 'next/image'
import Link from 'next/link'
export default function 


() {
  return (
    <div>
   {/* Hero Section */}
   <div className="relative min-h-[700px] container mx-auto">
        {/* Background Image with Elegant Gradients */}
        <div className="absolute inset-0">
          <Image
            src={Banner}
            alt="Luxury Car Service Banner"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            placeholder="blur"
          />
          {/* Sophisticated multi-layer gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800/60 via-gray-700/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-transparent to-gray-800/40" />
          {/* Elegant accent overlays */}
          <div className="absolute inset-0 bg-white/5 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent mix-blend-soft-light" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content with Elegant Typography */}
              <div className="text-white space-y-8">
                <div className="inline-block">
                  <span className="text-white/50 font-semibold text-lg mb-4 block tracking-wider uppercase">
                    Premium Auto Care Services
                  </span>
                  <div className="h-0.5 w-32 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent rounded-full"></div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
                    Professional Car Care & Maintenance
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200/90 leading-relaxed font-light">
                  Expert service for your vehicle. Trust our certified mechanics
                  for all your automotive needs. We provide comprehensive car
                  maintenance and repair services.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 pt-8">
                  <Link
                    href="/appointment"
                    className="btn btn-primary btn-lg text-white hover:bg-primary-focus/90 transition-all transform hover:scale-105 duration-300 shadow-xl hover:shadow-primary/20 backdrop-blur-sm"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    href="/services"
                    className="btn btn-ghost btn-lg text-white hover:bg-white/10 border-2 border-white/20 hover:border-primary/30 transition-all transform hover:scale-105 duration-300 backdrop-blur-sm"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
