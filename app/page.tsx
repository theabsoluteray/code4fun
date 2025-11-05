"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function Home() {
  const [showTeam, setShowTeam] = useState(false)



  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            code4fun
          </h1>
        
          </div>
        
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">code4fun</span>
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed max-w-lg">
                Explore innovative projects, creative tools, and awesome resources. This is your space for discovery and
                innovation.
              </p>
            </div>

            {/* CTA Buttons */}
            <button type="button" className="inline-block px-6 py-3 bg-primary/40 hover:bg-primary/100 text-white font-semibold rounded-lg shadow-md transition-colors">
              Get Started
            </button>
            <button type="button" className="ml-10 pl-4 inline-block px-6 py-3 bg-accent/40 hover:bg-accent/100 text-white font-semibold rounded-lg shadow-md transition-colors">
              Learn More
            </button>
            <div className="flex gap-4 pt-4">
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-[500px] hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-2xl blur-3xl" />
            <div className="absolute inset-4 border border-border/40 rounded-2xl backdrop-blur-sm flex items-center justify-center">
              <div className="space-y-6 text-center">
                <div className="text-6xl">✨</div>
                <p className="text-lg font-semibold text-foreground/80">Creative Projects</p>
                <p className="text-sm text-foreground/60">Discover amazing content</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-24 pt-24 border-t border-border/40">
          <div className="space-y-3 p-6 rounded-xl border border-white/10 bg-card/50 hover:border-white/100 transition-colors">
            <div className="text-3xl">🚀</div>
            <h3 className="font-semibold text-lg">Innovative</h3>
            <p className="text-sm text-foreground/60">Cutting-edge projects and ideas</p>
          </div>
          <div className="space-y-3 p-6 rounded-xl border border-border/40 bg-card/50 hover:border-border/80 transition-colors">
            <div className="text-3xl">🎨</div>
            <h3 className="font-semibold text-lg">Creative</h3>
            <p className="text-sm text-foreground/60">Beautiful design and user experience</p>
          </div>
          <div className="space-y-3 p-6 rounded-xl border border-border/40 bg-card/50 hover:border-border/80 transition-colors">
            <div className="text-3xl">⚡</div>
            <h3 className="font-semibold text-lg">Fast & Reliable</h3>
            <p className="text-sm text-foreground/60">Built for performance and scale</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-24 py-12 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto text-center text-foreground/60 text-sm">
          <p>© 2025 code4fun. All rights reserved.</p>
        </div>
      </footer>

      {showTeam && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-card border border-border/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-card border-b border-border/40 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Meet the Team</h2>
              <button
                onClick={() => setShowTeam(false)}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}
