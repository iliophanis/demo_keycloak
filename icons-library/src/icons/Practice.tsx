import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPractice = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    data-testid="svg-element"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25 5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v6H9V6h14v5a1 1 0 0 0 2 0V5ZM15 24a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm2-14.498a.5.5 0 0 1 .854-.354l6.998 6.997a.5.5 0 0 1-.353.854h-3.79l-2.855 2.855A.5.5 0 0 1 17 19.5V9.502Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPractice;
