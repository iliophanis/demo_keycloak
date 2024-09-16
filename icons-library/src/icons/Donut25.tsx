import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDonut25 = ({
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
    <circle
      r={12}
      transform="matrix(1 0 0 -1 16 16)"
      stroke="#F2F2F2"
      strokeWidth={8}
      style={{
        mixBlendMode: "multiply",
      }}
    />
    <path d="M28 16A12 12 0 0 0 16 4" stroke="currentColor" strokeWidth={8} />
  </svg>
);

export default SvgDonut25;
