import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgExams = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    data-testid="svg-element"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.906 14.518a.984.984 0 0 0-.43.151L16 16.94l-6.475-2.27a.984.984 0 0 0-.43-.15l-1.45-.508L16 10.104l8.355 3.907-1.449.508ZM22 20c0 .588-1.727 2-6 2-4.274 0-6-1.412-6-2v-3.044l5.67 1.988a1.014 1.014 0 0 0 .661 0l5.67-1.988V20Zm5.423-6.764-11-5.142a.996.996 0 0 0-.847 0l-11 5.143a1 1 0 0 0 .093 1.85L8 16.255V20c0 2.355 3.29 4 8 4s8-1.645 8-4v-3.745l1.5-.526v1.924a.986.986 0 0 0-.5.847 1 1 0 1 0 2 0 .986.986 0 0 0-.5-.848v-2.275l.831-.29a1 1 0 0 0 .092-1.85Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgExams;
