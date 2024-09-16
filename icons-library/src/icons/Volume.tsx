import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgVolume = ({
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
      d="M13.725 3.319a.992.992 0 0 0-1.407-.051 1.002 1.002 0 0 0-.051 1.413c3.619 3.906 3.619 10.745 0 14.637a1.004 1.004 0 0 0 .049 1.413.992.992 0 0 0 1.408-.048c4.368-4.699 4.369-12.651 0-17.364ZM10.71 6.302a.995.995 0 0 0-1.41-.019 1.004 1.004 0 0 0-.018 1.415c2.266 2.336 2.267 6.276 0 8.603a1.003 1.003 0 0 0 .017 1.414.994.994 0 0 0 1.41-.016c3.054-3.136 3.054-8.249 0-11.397Zm-4.392 4.405a.942.942 0 0 1 0-1.414 1.16 1.16 0 0 1 1.543 0c1.518 1.392 1.518 4.022 0 5.414A1.139 1.139 0 0 1 7.09 15a1.14 1.14 0 0 1-.77-.293.942.942 0 0 1 0-1.414c.659-.604.659-1.982 0-2.586Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgVolume;
