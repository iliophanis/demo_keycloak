import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEraser = ({
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
      d="m10.278 10.563 3.446 3.447-3.467 3.468-3.447-3.447 3.468-3.468Zm8.717-.409-4.861-4.862a.999.999 0 0 0-1.414 0l-8.031 8.032a1 1 0 0 0 0 1.414L8.9 18.95H4.5a.499.499 0 1 0 0 1h11.955a.5.5 0 0 0 0-1h-4.842l7.382-7.382a1 1 0 0 0 0-1.414Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEraser;
