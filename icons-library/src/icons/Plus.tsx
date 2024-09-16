import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPlus = ({
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
      d="M12 19a1 1 0 0 0 1-1v-5h5a1 1 0 1 0 0-2h-5V6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 0 0 1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPlus;
