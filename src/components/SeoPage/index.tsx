import { NextSeo } from 'next-seo';

type SeoPageProps = {
  title: string;
  description?: string;
};

export default function SeoPage({ title, description }: SeoPageProps) {
  const url = typeof window !== 'undefined'? window.location.protocol + '//' + window.location.host + window.location.pathname : '';

  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        url, title
      }}
    />
  );
}