import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgStopWatchMid = ({
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
      d="M12.032 18.494c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Zm6.707-10.293a.999.999 0 1 0-1.414-1.414l-1.108 1.108a6.961 6.961 0 0 0-4.185-1.401c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7c0-1.57-.526-3.016-1.401-4.185l1.108-1.108Zm-6.707 5.293s.018 4 0 4c2.194 0 4-1.806 4-4s-1.806-4-4-4v4Zm-2-8h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgStopWatchMid;
