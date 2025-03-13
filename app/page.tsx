"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Hotel } from "lucide-react"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/NYBACKGROUND2.png')",
          filter: "brightness(0.4)",
        }}
      />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/40 to-black/60 opacity-70" />

      {/* Logo in top-left corner */}
      <div className="absolute top-6 left-6 z-30 flex items-center">
        <Hotel className="h-5 w-5 text-white-300" />
        <span className="ml-2 text-xs font-light tracking-widest text-white/90">301W</span>
      </div>

      {/* Content - Just One Line of Text */}
      <div className="relative z-20 w-full max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Link
            href="https://tally.so/r/n0aaYP"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1.2, ease: "easeOut" },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                animate={{
                  y: [0, -3, 0],
                  transition: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 5,
                    ease: "easeInOut",
                  },
                }}
                className="text-xl font-light tracking-[0.3em] text-white sm:text-2xl"
              >
                BOOK NOW
              </motion.span>
            </motion.div>
            <motion.span
              className="mt-1 block h-[0.5px] w-0 bg-amber-300 transition-all duration-300 group-hover:w-full"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
            />
          </Link>
        </motion.div>
      </div>

      {/* Copyright and Address */}
      <div className="absolute bottom-4 left-0 right-0 z-30 flex items-center justify-center space-x-2 text-[10px] text-white/70">
        <span>© 2025 </span>
        <span className="text-amber-300/70">•</span>
        <span>301W 19TH STREET, NEW YORK, NY</span>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-amber-300/5 blur-3xl"
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-amber-300/3 blur-2xl"
          animate={{
            x: [0, -8, 0],
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 18,
            ease: "easeInOut",
          }}
        />
      </div>
    </main>
  )
}

