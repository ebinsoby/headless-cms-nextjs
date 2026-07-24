import "server-only"
import { HeroQuery, LogoWallQuery, HeaderNavQuery } from '../types';
import { contentGqlFetcher } from './fetch';

export const getContentForHeaderNav = async (preview = false) => {
  const query = `#graphql
  query NavigationCollection($where: NavigationFilter) {
  navigationCollection(where: $where) {
    items {
      name
      linksCollection {
        items {
          label
          link
        }
      }
    }
  }
}
`;
  const data = await contentGqlFetcher<HeaderNavQuery>({
    query,
    variables: {
      where: {
        name: 'Header',
      },
    },
  });
  if (!data) {
    throw new Error('Failed to fetch header nav content');
  }
  return data;
  };

export const getContentForLogoWall = async (preview = false) => {
  const query = `#graphql
  query Asset($where: AssetFilter) {
  assetCollection(where: $where) {
    items {
      width
      url
      title
      height
    }
  }
}`;

  const data = await contentGqlFetcher<LogoWallQuery>({
    query,
    variables: {
      where: {
        title_contains: 'client',
      },
    },
  });
  if (!data) {
    throw new Error('Failed to fetch logo wall content');
  }
  return data;
};

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
  const data = await contentGqlFetcher<HeroQuery>({
    query,
  });
  if (!data) {
    throw new Error('Failed to fetch hero content');
  }
  return data;
};
