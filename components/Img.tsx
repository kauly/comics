import * as React from "react";
import Image from "next/image";

import { IImgProps } from "../assets/typing";

const getUrl = (path: string, ext: string): string =>
  `${path}/landscape_xlarge.${ext}`;

const Img: React.FunctionComponent<IImgProps> = ({ path, ext }) => (
  <Image src={getUrl(path, ext)} alt="Hero Image" height="350px" width="100%" />
);

export default React.memo(Img);
