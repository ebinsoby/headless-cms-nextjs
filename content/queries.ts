import 'server-only';
import {
  CustomerPostQuery,
  HeaderNavQuery,
  HeroQuery,
  LogoWallQuery,
} from '../types';
import { contentGqlFetcher } from './fetch';

export const getSlugsForPosts = async () => {
  const query = `#graphql
  query SlugsForPost{
  customerPostCollection {
    items {
      slug
    }
  }
  }
  `;
  const data = await contentGqlFetcher<{
    customerPostCollection: { items: { slug: string }[] };
  }>({
    query,
  });
  if (!data) {
    throw new Error('Failed to fetch slugs for posts');
  }
  return data;
};

export const getContentForCustomerPost = async (slug: string) => {
  const query = `#graphql
  query CustomerPostCollection($where: CustomerPostFilter) {
  customerPostCollection(where: $where) {
    items {
      title
      slug
      customer {
        logo {
          url
          width
          height
          title
        }
        name
      }
      body {
        json
      }
    }
  }
}`;
  const data = await contentGqlFetcher<CustomerPostQuery>({
    query,
    variables: {
      where: {
        slug,
      },
    },
  });
  if (!data) {
    throw new Error('Failed to fetch customer post content');
  }
  return data;
};

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
