import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen w-full bg-gradient-to-br from-primary-50 to-secondary-50 p-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          How to Use This App
        </motion.h1>
        
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-opacity-90"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          {/* Counter Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary-600">Counter Feature Guide</h2>
            <div className="space-y-6 text-gray-600">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-4 text-secondary-600">Basic Operations</h3>
                <ul className="list-disc list-inside space-y-3">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Click the "+" button to increment the counter by 1
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Click the "-" button to decrement the counter by 1
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    Use the "Reset" button to set the counter back to 0
                  </motion.li>
                </ul>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-4 text-primary-600">Special Features</h3>
                <ul className="list-disc list-inside space-y-3">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    Every time the counter reaches a multiple of 10 (10, 20, 30...), a special alert will appear!
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation Guide */}
          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-primary-700">Navigation Guide</h3>
            <ul className="space-y-3 text-gray-700">
              <li>🏠 <span className="font-semibold">Home:</span> Main page with Counter Demo and community members</li>
              <li>ℹ️ <span className="font-semibold">About:</span> This guide and documentation page</li>
              <li>👤 <span className="font-semibold">About Me:</span> Developer profile</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Link
              to="/"
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Try It Now!
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About