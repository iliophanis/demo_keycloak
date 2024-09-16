import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDoublePage = ({
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
      d="M0 6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6Zm13 0h9v12h-9a1 1 0 0 0-2 0H2V6h9a1 1 0 0 0 2 0Zm-2 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-1-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm5 4a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2h-3ZM5 16a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2H5Zm11-6a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2h-3Zm0 6a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2h-1ZM4 9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9Zm3 1H6v1h1v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDoublePage;
