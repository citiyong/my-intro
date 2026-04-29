"use client"

export function Footer() {
  return (
    <footer className="py-16 lg:py-20 bg-[#2d2d2d] text-[#e5e5e5]">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          {/* Left side - Company info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white">
              AX 컨설턴트 홍길동
            </h3>
            <div className="space-y-2 text-sm text-[#999]">
              <p>l 서울특별시 강남구 테헤란로 123</p>
              <p>l 02-1234-5678 (상담시간 : 평일 10시 ~17시)</p>
              <p>l contact@axconsulting.com</p>
            </div>
          </div>

          {/* Center - Links */}
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              이용약관
            </a>
            <a href="#" className="text-[#999] hover:text-white transition-colors">
              개인정보처리방침
            </a>
          </div>

          {/* Right side - Family site */}
          <div className="text-sm">
            <span className="text-primary font-medium">FAMILY SITE</span>
            <div className="flex items-center gap-4 mt-3">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                AI 교육 플랫폼
              </a>
              <span className="text-[#666]">l</span>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                블로그
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#444] mt-12 pt-8">
          <p className="text-xs text-[#666]">
            Copyright © {new Date().getFullYear()} 홍길동 AX 컨설팅. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
