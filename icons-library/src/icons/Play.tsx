import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPlay = ({
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
      d="M7.892 4.167a1.223 1.223 0 0 0-1.264.016C6.24 4.423 6 4.86 6 5.332v13.333c0 .473.24.91.628 1.15a1.225 1.225 0 0 0 1.263.016l11.455-6.667c.404-.234.654-.68.654-1.164 0-.485-.25-.932-.654-1.166L7.892 4.167Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPlay;
