export type HeaderNavQuery = {
    navigationCollection:{
    items: {
      name: string;
      linksCollection: {
        items: {
          label: string;
          link: string;
        }[];
      };
    }[];
  };
};

export type LogoWallQuery = {
  assetCollection: {
    items: {
      width: number;
      url: string;
      title: string;
      height: number;
    }[];
  };
};

export type HeroQuery = {
  heroCollection: {
    items: {
      title: string;
      subtitle: string;
      preTitle: string;
      callToActionsCollection: {
        items: {
          label: string;
          link: string;
        }[];
      };
    }[];
  };
};
