import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEnlarge = ({
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
      d="m9.707 6.707-.793.793 1.793 1.793a.999.999 0 1 1-1.414 1.414L7.5 8.914l-.793.793A1 1 0 0 1 5 9V6a1 1 0 0 1 1-1h3a1.002 1.002 0 0 1 .707 1.707Zm7.586 7.586A1 1 0 0 1 19 15v3a1 1 0 0 1-1 1h-3a1.002 1.002 0 0 1-.707-1.707l.793-.793-1.793-1.793a1 1 0 0 1 1.414-1.414l1.793 1.793.793-.793ZM18 5h-3a1.002 1.002 0 0 0-.707 1.707l.793.793-1.793 1.793a.999.999 0 1 0 1.414 1.414L16.5 8.914l.793.793A1 1 0 0 0 19 9V6a1 1 0 0 0-1-1ZM7.5 15.086l1.793-1.793a.999.999 0 1 1 1.414 1.414L8.914 16.5l.793.793A1 1 0 0 1 9 19H6a1 1 0 0 1-1-1v-3a1.002 1.002 0 0 1 1.707-.707l.793.793Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEnlarge;
