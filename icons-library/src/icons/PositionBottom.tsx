import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPositionBottom = ({
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
      d="m14.448 6.54-2.084 3.273A.43.43 0 0 1 12 10a.43.43 0 0 1-.364-.187L9.553 6.54a.333.333 0 0 1-.053-.176c0-.064.02-.128.058-.185A.43.43 0 0 1 9.917 6h4.167a.43.43 0 0 1 .359.18.328.328 0 0 1 .005.36ZM5 16a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPositionBottom;
