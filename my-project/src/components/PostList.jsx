import { motion } from 'framer-motion'
import PostCard from './PostCard'

const PostList = ({ posts }) => {
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <PostCard
            name={post.name}
            role={post.role}
            joinDate={post.joinDate}
            location={post.location}
            description={post.description}
            image={post.image}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default PostList