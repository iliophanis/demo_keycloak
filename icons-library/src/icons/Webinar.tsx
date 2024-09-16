import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWebinar = ({
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
      d="M14 8.062H7.5a.5.5 0 0 1-.5-.5V1.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v6a.502.502 0 0 1-.144.351l-2 2.031A.501.501 0 0 1 14 9.531V8.062ZM16 2H8v5.062h6.5a.5.5 0 0 1 .5.5v.749l1-1.016V2ZM9.5 4h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm0 1h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Zm3.502 16h-4c.589-.688 1.541-1 3-1l.002-.001V20c1.459 0 2.411.312 3 1h-2.002ZM23 5h-5v2h4v14h-4.496c-1.496-2.015-3.439-3-5.5-3v.003L12.002 18c-2.062 0-4.003.985-5.5 3H2V7h4V5H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Zm-11.996 8.355c0 .83.495 1.645 1 1.645s1-.815 1-1.645c0-1.251-.494-1.355-1-1.355s-1 .104-1 1.355Zm-2 0c0-2.101 1.122-3.355 3-3.355s3 1.254 3 3.355c0 1.753-1.147 3.645-3 3.645s-3-1.892-3-3.645Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWebinar;
