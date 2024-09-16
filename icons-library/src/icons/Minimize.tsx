import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMinimize = ({
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
      d="M8.688 2c-.725 0-1.313.588-1.313 1.313v4.062H3.312a1.313 1.313 0 0 0 0 2.625h4.063A2.625 2.625 0 0 0 10 7.375V3.312C10 2.588 9.412 2 8.687 2Zm6.624 0c.725 0 1.313.588 1.313 1.313v4.062h4.063a1.312 1.312 0 1 1 0 2.625h-4.063A2.625 2.625 0 0 1 14 7.375V3.312C14 2.588 14.588 2 15.313 2Zm5.376 14.625a1.312 1.312 0 1 0 0-2.625h-4.063A2.625 2.625 0 0 0 14 16.625v4.063a1.312 1.312 0 1 0 2.625 0v-4.063h4.063ZM2 15.312c0 .725.588 1.313 1.313 1.313h4.062v4.063a1.312 1.312 0 1 0 2.625 0v-4.063A2.625 2.625 0 0 0 7.375 14H3.312C2.588 14 2 14.588 2 15.313Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMinimize;
