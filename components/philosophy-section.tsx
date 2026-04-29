"use client"

export function PhilosophySection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Philosophy Quote - Clean, prominent typography */}
          <blockquote>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed tracking-tight">
              &ldquo;기술은 도구일 뿐입니다.
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed tracking-tight mt-4">
              <span className="text-primary">중요한 것은 그 도구를 다루는</span>
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed tracking-tight mt-4">
              <span className="text-primary">사람의 경험입니다.</span>&rdquo;
            </p>
          </blockquote>

          {/* Author attribution - subtle */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="w-8 h-px bg-border" />
            <span className="text-muted-foreground text-sm tracking-wide">홍길동</span>
            <div className="w-8 h-px bg-border" />
          </div>
        </div>
      </div>
    </section>
  )
}
