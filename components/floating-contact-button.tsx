"use client"

import { MessageCircle } from "lucide-react"

export function FloatingContactButton() {
  return (
    <a
      href="#contact"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-5 py-3.5 bg-accent text-accent-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium"
    >
      <MessageCircle className="w-5 h-5" />
      <span>문의</span>
    </a>
  )
}
