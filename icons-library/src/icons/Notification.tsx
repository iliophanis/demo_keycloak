import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNotification = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    data-testid="svg-element"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.449 20.25H2.833C1.786 20.25 1 19.46 1 18.415c0-1.045.788-1.832 1.832-1.832h.002c.19 0 .424-.116.612-.304.187-.188.304-.422.304-.612v-4.584c0-4.238 3.214-7.741 7.333-8.199v-.967a.917.917 0 0 1 1.833 0v.967c4.12.457 7.334 3.96 7.334 8.2v4.583c0 .19.116.424.304.612.187.188.422.304.61.304h.002c1.046 0 1.833.787 1.834 1.832 0 1.045-.787 1.834-1.833 1.835H15.55A3.673 3.673 0 0 1 12 23a3.673 3.673 0 0 1-3.551-2.75Zm1.963 0a1.834 1.834 0 0 0 3.175 0h-3.175ZM12 4.667a6.424 6.424 0 0 0-6.417 6.416v4.584c0 .678-.307 1.374-.841 1.91-.535.533-1.23.84-1.907.84h18.328c-.677 0-1.371-.307-1.905-.84-.535-.536-.841-1.232-.841-1.91v-4.584A6.424 6.424 0 0 0 12 4.667Zm4.125 11a.459.459 0 0 1-.459-.459v-5.041c0-.724-.278-1.407-.785-1.924a.459.459 0 0 1 .654-.642c.676.69 1.048 1.6 1.048 2.566v5.041a.459.459 0 0 1-.458.459Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNotification;
