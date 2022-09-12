import { LastestPostsQuery } from '../../generated/graphql';
import PostCard from '../PostCard';

interface LatestPostsProps {
  data?: LastestPostsQuery
}

export function LatestPosts({ data }: LatestPostsProps) {
  return (
    <>
      <div className="grid grid-cols-1 pb-8 text-center">
        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Blogs</h6>
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Latest posts</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
        {data?.posts.map((post) => (
          <PostCard key={post.slug} post={{
            title: post.title,
            description: post.excerpt,
            href: `/blog/${post.slug}`,
            imageUrl: post.coverImage?.url,
            tags: post.tags,
            date: new Date(post.date).toLocaleString('en-UK', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            }),
            author: {
              name: post.author?.name,
              imageUrl: post.author?.picture?.url
            }
          }} />
        ))}
      </div>
    </>
  );
}