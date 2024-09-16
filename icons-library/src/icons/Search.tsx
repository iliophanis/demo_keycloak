import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSearch = ({
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
      d="M15.1 15.087a.979.979 0 0 0-.339.24c-.042.046-.06.102-.092.154A6.474 6.474 0 0 1 10.5 17 6.508 6.508 0 0 1 4 10.5C4 6.916 6.916 4 10.5 4S17 6.916 17 10.5a6.478 6.478 0 0 1-1.9 4.587m6.573 5.173-4.696-4.269A8.457 8.457 0 0 0 19 10.5C19 5.813 15.187 2 10.5 2 5.813 2 2 5.813 2 10.5c0 4.687 3.813 8.5 8.5 8.5a8.446 8.446 0 0 0 5.005-1.645l4.823 4.384a.997.997 0 0 0 1.412-.067.998.998 0 0 0-.067-1.412M10.5 6A4.505 4.505 0 0 0 6 10.5a.5.5 0 0 0 1 0C7 8.57 8.57 7 10.5 7a.5.5 0 0 0 0-1"
      fill="currentColor"
    />
  </svg>
);

export default SvgSearch;
