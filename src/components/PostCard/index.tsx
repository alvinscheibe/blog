import { ArrowRightIcon } from '@heroicons/react/solid';
import PostTags from './PostTags';

type PostCardProps = {
  post: {
    title: string;
    imageUrl: string | undefined;
    href: string;
    description: string | undefined | null;
    author: {
      name: string | undefined | null;
      imageUrl: string | undefined;
    }
    date: string,
    tags: Array<string>
  }
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className={'blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden'}>
      <img src={post.imageUrl?? ''} />

      <div className={'content p-6'}>
        <PostTags tags={post.tags} />
        <a href={post.href} className={'title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'}>
          {post.title}
        </a>
        <p className={'text-slate-400 mt-3'}>
          {post.description}
        </p>
        <div className={'mt-4'}>
          <a href={post.href} className={'btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out'}>
            Read More <ArrowRightIcon className={'h-5 w-5 inline'} />
          </a>
        </div>
      </div>
    </div>
  );
}