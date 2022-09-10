import { BlogPostAuthor, BlogPostAuthorProps } from './BlogPostAuthor';
import { TagsCloud, TagsCloudProps } from './TagsCloud';

type BlogPostSideBarProps = {
  author?: BlogPostAuthorProps;
  tags?: TagsCloudProps;
}

export function BlogPostSideBar({ author, tags }: BlogPostSideBarProps) {
  return (
    <div className={'lg:col-span-4 md:col-span-6'}>
      <div className={'sticky top-20'}>
        <BlogPostAuthor name={author?.name} pictureUrl={author?.pictureUrl} />

        <TagsCloud tags={tags?.tags} />
      </div>
    </div>
  );
}