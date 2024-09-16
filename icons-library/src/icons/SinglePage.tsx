import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSinglePage = ({
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
      d="M17 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9Zm0 2H8v12h9V6Zm-6 7a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2h-3Zm0-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2h-3Zm0 6a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2h-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSinglePage;
