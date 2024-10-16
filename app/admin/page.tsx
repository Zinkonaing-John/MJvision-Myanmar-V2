'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/src/lib/supabaseClient'

export default function Home() {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const { data, error } = await supabase.from('posts').select('*')

    if (error) console.log('Error fetching posts:', error)
    else {
      setPosts(data || [])
    }
  }

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
    </div>
  )
}
