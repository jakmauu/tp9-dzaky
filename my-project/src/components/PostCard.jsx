import { motion } from 'framer-motion'

const PostCard = ({ name, role, joinDate, location, description, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="flex justify-center mb-3">
          <img 
            src={image} 
            alt={name} 
            className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
            {name}
          </h3>
          <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mt-1">
            <span className="px-2 py-0.5 bg-primary-100 text-primary-700 rounded-full">{role}</span>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-3 text-xs text-gray-500">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Joined: {joinDate}
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
        
        <div className="mt-4 flex justify-center">
          <button className="px-4 py-2 text-sm bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md">
            View Profile
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default PostCard