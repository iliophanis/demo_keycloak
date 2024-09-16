import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRemove = ({
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
      d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-2 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-2-1H8v2h8v-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRemove;
