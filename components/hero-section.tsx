"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section id="about" className="relative pt-20 min-h-[90vh]">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 top-20">
        <Image
          src="/hero-image.jpg"
          alt="AI 컨설팅 공간"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text Overlay - Left aligned like sangsang canvas */}
      <div className="relative z-10 container mx-auto px-8 lg:px-16 pt-16 lg:pt-24">
        <div className="max-w-2xl">
          {/* Small intro text */}
          <p className="text-foreground/80 text-lg md:text-xl mb-6">
            홍길동은 생각했습니다.
          </p>

          {/* Large coral/red colored quote */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-snug tracking-tight mb-10">
            {'"AI는 미래가 아닌 현재입니다.'}
            <br />
            {'지금 변화하지 않으면, 변화에 밀려납니다."'}
          </h1>

          {/* Body text */}
          <div className="space-y-2 text-base md:text-lg text-foreground/90 leading-relaxed mb-4">
            <p>30년의 현장 경험과 최신 AI 기술을 결합하여,</p>
            <p>당신의 비즈니스와 삶에 가장 현실적인 AX(AI 전환) 솔루션을 제안합니다.</p>
          </div>

          {/* Call to action text */}
          <div className="text-base md:text-lg text-foreground mb-12">
            <p className="font-medium">바로 여기</p>
            <p className="font-medium">홍길동 AX 컨설팅에서 만나요</p>
          </div>

          {/* CTA Button - coral/pink like sangsang canvas */}
          <a 
            href="#contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground text-base font-medium rounded-full hover:bg-primary/90 transition-colors shadow-lg"
          >
            상담예약 바로가기
          </a>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        <span className="w-2.5 h-2.5 rounded-full bg-foreground" />
        <span className="w-2.5 h-2.5 rounded-full bg-foreground/30" />
        <span className="w-2.5 h-2.5 rounded-full bg-foreground/30" />
      </div>
    </section>
  )
}
