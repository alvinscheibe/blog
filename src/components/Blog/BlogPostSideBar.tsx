import { BlogPostAuthor, BlogPostAuthorProps } from './BlogPostAuthor';
import { TagsCloud, TagsCloudProps } from './TagsCloud';

type BlogPostSideBarProps = {
  author?: BlogPostAuthorProps;
  dataTags?: TagsCloudProps;
}

export function BlogPostSideBar({ author, dataTags }: BlogPostSideBarProps) {
  return (
    <div className={'lg:col-span-4 md:col-span-6'}>
      <div className={'sticky top-20'}>
        <BlogPostAuthor name={author?.name} pictureUrl={author?.pictureUrl} />

        <TagsCloud tags={dataTags?.tags} />
      </div>
    </div>
  );
}