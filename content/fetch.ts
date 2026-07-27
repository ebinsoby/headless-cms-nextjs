export const contentGqlFetcher = async <T>({
  query,
  variables = {},
  preview = false,
}: {
  query: string;
  variables?: any;
  preview?: boolean;
}): Promise<T | undefined> => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      // Always fetch the latest content from Contentful instead of using
      // Next.js's default build-time cache, so CMS changes (new slugs, edited
      // copy) are reflected immediately without a redeploy.
      cache: 'no-store',
    }
  );
  const { data, errors } = await res.json();
  if (errors) {
    console.error(errors);
    throw new Error('Failed to fetch data from Contentful');
  }
  return data as T;
};
