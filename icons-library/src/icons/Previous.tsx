import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPrevious = ({
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
      d="M12 19c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7Zm0-16c4.963 0 9 4.038 9 9s-4.037 9-9 9-9-4.038-9-9 4.037-9 9-9Zm.293 5.293a.999.999 0 1 1 1.414 1.414L11.414 12l2.293 2.293a.999.999 0 1 1-1.414 1.414l-3-3a.999.999 0 0 1 0-1.414l3-3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPrevious;
