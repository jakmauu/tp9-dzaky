import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'About Me', path: '/about-me' }
  ]

  return (
    <nav className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white animate-gradient bg-[length:200%_auto]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="font-bold text-xl tracking-tight cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Muhamad Dzaky Maulana
          </motion.div>
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group px-2 py-1"
              >
                <span className={`relative z-10 transition-colors ${
                  location.pathname === item.path ? 'text-white' : 'text-white/80 hover:text-white'
                }`}>
                  {item.name}
                </span>
                <motion.span 
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-white"
                  initial={{ scaleX: location.pathname === item.path ? 1 : 0 }}
                  animate={{ scaleX: location.pathname === item.path ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar