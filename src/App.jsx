import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import { Heart, Cake, Gift, Music } from 'lucide-react'

export default function App() {
  const [showWish, setShowWish] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null) // Reference to the audio element

  useEffect(() => {
    const timer = setTimeout(() => setShowWish(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleHeartClick = (e) => {
    e.stopPropagation();
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000)
  }

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 flex flex-col items-center justify-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-white mb-8 text-center"
      >
        Happy Birthday, Devika!
      </motion.h1>

      {showWish && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full"
          aria-label="Birthday wish card. Click to show love."
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-lg p-6 shadow-xl col-span-2 row-span-2 relative cursor-pointer"
            onClick={handleHeartClick}
          >
            <motion.div
              className="absolute -top-2 -right-2 bg-pink-500 text-white px-2 py-1 rounded-full text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Click me!
            </motion.div>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">My Wish for You</h2>
            <p className="text-lg text-gray-800 mb-4">
              Happy Birthday to someone so rare and real! 🎉✨ I've met a lot of people, but vibing with you is next level. Your positivity lights up everything, and your energy and passion (especially for programming 👩‍💻) are just wow. So lucky to have you in my life. Here's to you—stay amazing and keep shining! 💖🎂
            </p>
            <p className="text-lg text-gray-800 mb-6">
              May this year bring you all the happiness, success, and love you deserve. I&apos;m so grateful to have you in my life.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleHeartClick}
              className="text-3xl"
            >
              <Heart className="text-red-500 w-12 h-12" />
            </motion.button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-lg p-6 shadow-xl flex flex-col items-center justify-center"
          >
            <img
              src="/devika.jpg" // Image reference from the public directory
              width={150}
              height={150}
              alt="The Mystery"
              className="rounded-full mb-4"
            />
            <p className="text-lg font-semibold text-pink-600">The Mystery girl </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-lg p-6 shadow-xl flex flex-col items-center justify-center"
          >
            <Cake className="w-12 h-12 text-pink-500 mb-2" />
            <p className="text-lg font-semibold">Wishing You the Best</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-lg p-6 shadow-xl flex flex-col items-center justify-center"
          >
            <Gift className="w-12 h-12 text-purple-500 mb-2" />
            <p className="text-lg font-semibold">Lots of Love and Gifts</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-lg p-6 shadow-xl flex flex-col items-center justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMusic}
              className="text-3xl"
            >
              <Music className={`w-12 h-12 ${isPlaying ? 'text-green-500' : 'text-gray-500'}`} />
            </motion.button>
            <p className="text-lg font-semibold mt-2">{isPlaying ? 'Pause Music' : 'Play Music'}</p>
          </motion.div>
        </motion.div>
      )}

      {showConfetti && <Confetti recycle={false} numberOfPieces={300} />}

      {/* Audio element */}
      <audio ref={audioRef} src={import.meta.env.PUBLIC_URL + "/assets/birthdaySong.mp3"} preload="auto" />
    </div>
  )
}
