import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCloudOff = ({
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
      d="M4.707 3.293 7.97 6.555a5.991 5.991 0 0 1 3.78-1.55L12 5a6.002 6.002 0 0 1 5.899 4.898l.034.212.038.009a4.002 4.002 0 0 1 3.024 3.681L21 14a3.99 3.99 0 0 1-2.08 3.505l1.787 1.788a1 1 0 0 1-1.414 1.414l-16-16a1 1 0 0 1 1.414-1.414ZM4.755 9l1.411 1.451a3.095 3.095 0 0 0-1.182 2.445c0 1.691 1.332 3.062 2.976 3.062h3.556L13.5 18H7.96c-2.667 0-4.843-2.166-4.955-4.883L3 12.896C3 11.344 3.676 9.94 4.755 9ZM9 7.725a4.075 4.075 0 0 1 2.65-.975c2.241 0 4.057 1.798 4.057 4.016a1.01 1.01 0 0 0 1.014 1.004c1.12 0 2.029.899 2.029 2.008 0 .975-.705 1.794-1.644 1.972L9 7.725Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCloudOff;
