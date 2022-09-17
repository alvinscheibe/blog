type PostTagsProps = {
  tags: Array<string>
}

export default function PostTags({ tags }: PostTagsProps) {
  return (
    <ul>
      {tags.map((tag) => {
        return (
          <li key={tag} style={{display: 'inline-block'}} className={'mr-4'}>
            <a href={`/tag/${tag}`} className={'text-xs text-indigo-600'}>{tag}</a>
          </li>
        );
      })}
    </ul>
  );
}