import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgProductBuild = ({
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
      d="M9 2.5a1 1 0 0 0-1 1C8 2.673 7.327 2 6.5 2S5 2.673 5 3.5a1 1 0 0 1-2 0v9.283c-1.89.985-3 2.846-3 5.273a6.537 6.537 0 0 0 3.541 5.832.994.994 0 0 0 .979-.034A1 1 0 0 0 5 23v-2.924C5 19.14 5.94 19 6.5 19s1.5.14 1.5 1.076V23a1 1 0 0 0 1.459.888A6.537 6.537 0 0 0 13 18.056c0-2.427-1.11-4.288-3-5.273V3.501a1 1 0 0 0-1-1ZM8 6.407v5.718A8.82 8.82 0 0 0 6.5 12a8.82 8.82 0 0 0-1.5.124L6.177 9.88A.5.5 0 0 0 7 9.5V8.312l1-1.906ZM6.5 17c2.093 0 3.5 1.236 3.5 3.076v.843a4.57 4.57 0 0 0 1-2.863C11 15.478 9.36 14 6.5 14 3.64 14 2 15.478 2 18.056c0 1.065.363 2.068 1 2.862v-.842C3 18.236 4.407 17 6.5 17Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 7h-3V4.924c2.143-.341 3.27-1.759 3.743-2.924H22v5h-6Zm-1 2h-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1C14.623 3 14.999.924 15.014.835A1 1 0 0 1 16 0h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9Zm2 0v13h2V9h-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgProductBuild;
