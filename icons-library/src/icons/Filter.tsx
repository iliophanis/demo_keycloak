import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFilter = ({
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
      d="M8 13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H8ZM5 9a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2H5Zm6 8a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2h-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFilter;
