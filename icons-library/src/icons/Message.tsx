import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMessage = ({
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
      d="m6.879 14.284-.522 2.853 9.536-5.123L6.37 6.869l.515 2.854 4.408 1.33a1 1 0 0 1-.002 1.915l-4.412 1.317ZM4.999 20a.998.998 0 0 1-.983-1.18l1.008-5.498a.997.997 0 0 1 .696-.778l1.807-.54-1.806-.544a.999.999 0 0 1-.694-.78l-.993-5.501A1 1 0 0 1 5.492 4.12l12.983 7.018a1 1 0 0 1-.002 1.76l-13 6.982a.996.996 0 0 1-.473.12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMessage;
