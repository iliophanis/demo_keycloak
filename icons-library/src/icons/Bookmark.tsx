import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBookmark = ({
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
      d="m17 18.442-4.266-4.62a.998.998 0 0 0-1.468 0L7 18.441V4h10v14.442ZM18 2H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1.734.678L12 15.974l5.266 5.704A1 1 0 0 0 19 21V3a1 1 0 0 0-1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBookmark;
