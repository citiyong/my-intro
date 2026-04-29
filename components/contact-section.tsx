"use client"

import { MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="bg-background">
      {/* Map placeholder - styled like sangsang canvas */}
      <div className="relative w-full h-[400px] bg-muted flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <div className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium">
            서울특별시 강남구 테헤란로 123
          </div>
        </div>
      </div>
    </section>
  )
}
