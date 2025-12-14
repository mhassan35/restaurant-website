"use client"

import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-[450px] sm:min-h-[550px] md:min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-restaurant-dining.jpg"
          alt="Fine dining restaurant"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </div>

      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative h-full min-h-[450px] sm:min-h-[550px] md:min-h-[600px] flex items-center justify-center text-center px-3 sm:px-4 py-12 sm:py-20">
        <div className="max-w-3xl w-full">
          <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/30 border border-primary/60 rounded-full backdrop-blur-sm">
            <p className="text-xs sm:text-sm font-semibold text-primary-foreground">Premium Food Delivery</p>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight transition-smooth drop-shadow-lg">
            Culinary{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-orange-300">
              Excellence
            </span>{" "}
            Delivered
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty mb-6 sm:mb-8 leading-relaxed px-2 drop-shadow-md">
            Discover extraordinary dining experiences from the world's finest restaurants. Fast delivery, premium
            quality, guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Link href="/restaurants">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-smooth hover:shadow-lg active:scale-95 shadow-lg">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
