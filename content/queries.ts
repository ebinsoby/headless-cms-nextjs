import { contentGqlFetcher } from './fetch';

export const getContentForHero = async (preview = false) => {
  const query = `#graphql
    query HeroCollection {
  heroCollection {
    items {
      title
      subtitle
      preTitle
      callToActionsCollection {
        items {
          label
          link
        }
      }
    }
  }
}`;
  const data = await contentGqlFetcher(query, {}, preview);
};
