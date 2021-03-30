import * as React from "react";
import _ from "lodash";
import useSWR from "swr";

import { ISanitize } from "../assets/typing";

const URI = "https://gateway.marvel.com";

const fetcher = (u: string) => fetch(u).then((res) => res.json());

const getURL = (end: string) =>
  `${URI}/${end}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`;

const getImgUrl = (path: string, ext: string): string =>
  `${path}/landscape_xlarge.${ext}`;

const listSanatizer = (result: any): ISanitize => ({
  pagInfo: _.omit(result.data, ["results"]),
  list: _.map(result.data.results, (o) => ({
    ..._.pick(o, ["name", "description", "id", "comics", "urls"]),
    thumbnail: getImgUrl(o.thumbnail.path, o.thumbnail.extension),
  })),
});

export const useHeroList = () => {
  const [sanitized, setSanitized] = React.useState<ISanitize>();

  const _handleSanitizer = (data) => setSanitized(listSanatizer(data));

  const { data, error } = useSWR(getURL("v1/public/characters"), fetcher, {
    onSuccess: _handleSanitizer,
  });

  return {
    data: sanitized,
    isLoading: !error && !data,
    isError: error,
  };
};
