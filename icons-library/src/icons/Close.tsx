import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgClose = ({
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
      d="M16.293 17.707a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L13.414 12l4.293-4.293a.999.999 0 1 0-1.414-1.414L12 10.586 7.707 6.293a.999.999 0 1 0-1.414 1.414L10.586 12l-4.293 4.293a.999.999 0 1 0 1.414 1.414L12 13.414l4.293 4.293Z"
      fill="currentColor"
    />
    <mask
      id="Close_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={6}
      y={6}
      width={13}
      height={13}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.293 17.707a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L13.414 12l4.293-4.293a.999.999 0 1 0-1.414-1.414L12 10.586 7.707 6.293a.999.999 0 1 0-1.414 1.414L10.586 12l-4.293 4.293a.999.999 0 1 0 1.414 1.414L12 13.414l4.293 4.293Z"
        fill="#fff"
      />
    </mask>
  </svg>
);

export default SvgClose;
