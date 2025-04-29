import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import profileImage from '../assets/new.jpg'

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen w-full bg-gradient-to-br from-primary-50 to-secondary-50 p-4 md:p-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          About Me
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 aspect-[4/5]" // Tambahkan aspect ratio
          >
            <div className="relative w-full h-full"> {/* Ubah menjadi full height */}
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-opacity-90 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
                  Muhamad Dzaky Maulana
                </h2>
                <div className="h-1.5 w-32 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
              </motion.div>

              <motion.div 
                className="space-y-6 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="hover:transform hover:scale-105 transition-all duration-300 p-4 rounded-lg hover:bg-gray-50">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary-600 mb-2">Education</h3>
                  <p className="text-lg">University of Indonesia</p>
                </div>

                <div className="hover:transform hover:scale-105 transition-all duration-300 p-4 rounded-lg hover:bg-gray-50">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary-600 mb-2">Faculty</h3>
                  <p className="text-lg">Engineering</p>
                </div>

                <div className="hover:transform hover:scale-105 transition-all duration-300 p-4 rounded-lg hover:bg-gray-50">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary-600 mb-2">Major</h3>
                  <p className="text-lg">Computer Engineering</p>
                </div>
              </motion.div>

              <motion.div
                className="pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <Link
                  to="/"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Back to Home
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutMe