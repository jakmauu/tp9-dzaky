import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Counter from '../components/Counter'
import PostList from '../components/PostList'
import { mockPosts } from '../data/mockData'

const Home = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setPosts(mockPosts.results)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer) // Cleanup timer
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Counter Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Counter />
        </motion.div>

        {/* Posts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
            Our Community Members
          </h2>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
            </div>
          ) : (
            <PostList posts={posts || []} />
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Home