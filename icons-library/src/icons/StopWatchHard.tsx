import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgStopWatchHard = ({
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
      d="M12.003 18.526c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5ZM18.71 8.233a.999.999 0 1 0-1.414-1.414l-1.108 1.108a6.961 6.961 0 0 0-4.185-1.4c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7c0-1.57-.526-3.017-1.401-4.186l1.108-1.108Zm-6.707 5.293s4 .013 4 0c0-2.194-1.806-4-4-4v4Zm-2-8h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgStopWatchHard;
