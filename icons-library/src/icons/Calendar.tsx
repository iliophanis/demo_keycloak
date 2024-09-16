import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCalendar = ({
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
      d="M3 22h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1Zm17-2H4V4h16v16ZM9 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-9 7H6a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Zm0 3H6a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Zm0 3H6a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Zm5-6h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Zm0 3h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Zm0 3h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Zm5-6h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2ZM8 10H6a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Zm5 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Zm5 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Zm0 6h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Zm0 3h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCalendar;
