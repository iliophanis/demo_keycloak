import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShare = ({
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
      d="m20 11-6-5v3.197l-.867.157c-.668.158-1.317.351-1.931.612-1.231.506-2.353 1.174-3.314 1.998C5.95 13.606 4.694 15.782 4 18c.687-.967 1.515-1.79 2.356-2.51a11.483 11.483 0 0 1 2.745-1.68c.952-.417 1.949-.628 2.902-.728.476-.07.952-.038 1.411-.073l.586.011V16l6-5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgShare;
