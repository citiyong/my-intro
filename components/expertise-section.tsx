"use client"

import Image from "next/image"

export function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-background">
      {/* Image Gallery - Full width slider style like sangsang canvas */}
      <div className="relative w-full h-[50vh] min-h-[350px] max-h-[500px] overflow-hidden">
        <div className="flex h-full">
          <div className="relative flex-1 min-w-[50%]">
            <Image
              src="/expertise-1.jpg"
              alt="AI 전략 컨설팅"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex-1 min-w-[50%]">
            <Image
              src="/expertise-2.jpg"
              alt="디지털 교육"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/30" />
        </div>

        {/* Left/Right navigation arrows */}
        <button className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/50 transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/50 transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Services Content */}
      <div className="container mx-auto px-8 lg:px-16 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              전문 서비스
            </h2>
            <p className="text-lg text-muted-foreground">
              30년 현장 경험을 바탕으로 한 실용적인 AI 전환 서비스
            </p>
          </div>

          {/* Services Grid - Clean, minimal cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="group">
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                맞춤형 AX 전략
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                기업의 현황을 분석하여 최적의 AI 도입 로드맵을 제시합니다.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                시니어 디지털 리터러시
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                어려운 IT 용어 대신, 눈높이에 맞는 실전 교육을 진행합니다.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                생성형 AI 워크숍
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                챗GPT부터 업무 자동화까지, 바로 써먹는 AI 기술을 전수합니다.
              </p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                1:1 커리어 멘토링
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                AI 시대를 준비하는 신중년을 위한 든든한 기술 파트너가 되어드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
