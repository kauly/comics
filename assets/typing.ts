import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  TypographyProps,
  BackgroundProps,
  GridProps as gp,
  FlexboxProps as fp,
} from "styled-system";

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  PositionProps &
  BackgroundProps;
export type GridProps = BoxProps & gp;
export type FlexProps = BoxProps & fp;
export type TextProps = TypographyProps & ColorProps & SpaceProps;
interface IThumb {
  extension: string;
  path: string;
}
interface IURL {
  type: string;
  url: string;
}

interface IComicItem {
  name: string;
  resourceURI: string;
}

interface IComic {
  available: number;
  collectionURI: string;
  items: Array<IComicItem>;
}
export interface IHero {
  name: string;
  description: string;
  thumbnail: string;
  urls: Array<IURL>;
  comics: IComic;
  id: string;
}

export interface IHeroCard {
  hero: IHero;
}

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
  };
  space: Array<string>;
  breakpoints: Array<string>;
  fontSizes: Array<string>;
  fontWeights: {
    small: number;
    large: number;
  };
  shadows: {
    small: string;
    large: string;
  };
}

export interface IImgProps {
  path: string;
  ext: string;
}

export interface IHeroList {
  list: Array<IHero>;
}

export interface ISanitize {
  pagInfo: {
    total: number;
    count: number;
    limit: number;
    offset: number;
  };
  list: Array<IHero>;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IState {
  filtered: Array<IHero>;
  list: Array<IHero>;
  query: string;
  orderBy: string;
  favHeros: Array<string>;
  orderState: boolean;
}
