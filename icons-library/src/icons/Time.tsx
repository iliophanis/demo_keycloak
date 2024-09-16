import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTime = ({
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
      d="M12 6c-3.308 0-6 2.691-6 6s2.692 6 6 6 6-2.691 6-6-2.692-6-6-6Zm-8 6c0-4.411 3.588-8 8-8s8 3.589 8 8-3.588 8-8 8-8-3.589-8-8Zm10.5 3a.998.998 0 0 1-.624-.219l-2.731-2.185-1.093-3.28a1 1 0 1 1 1.896-.632l.907 2.72 2.27 1.815A1 1 0 0 1 14.498 15Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTime;
