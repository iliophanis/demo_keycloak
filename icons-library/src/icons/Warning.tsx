import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWarning = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 25 25"
    fill="none"
    data-testid="svg-element"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m19.186 20.3-14.38.106 7.084-14.38 7.296 14.275Z"
      stroke="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.03 14.919 2-.015-.03-4-2 .015.03 4ZM11.051 17.92l2-.015-.014-2-2 .014.014 2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWarning;
