import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSelectAnArea = ({
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
      d="M4 6a.5.5 0 0 0 1 0 .5.5 0 0 0 0-1h-.5a.5.5 0 0 0-.5.5V6Zm.5 4.136a.5.5 0 0 1-.5-.5v-.91a.5.5 0 1 1 1 0v.91a.5.5 0 0 1-.5.5Zm0 3.637a.5.5 0 0 1-.5-.5v-.91a.5.5 0 1 1 1 0v.91a.5.5 0 0 1-.5.5ZM4.5 17H5a.5.5 0 0 0 0-1 .5.5 0 0 0-1 0v.5a.5.5 0 0 0 .5.5Zm2.987 0h.5a.5.5 0 0 0 0-1h-.5a.5.5 0 0 0 0 1Zm.786-11h-.818a.5.5 0 1 1 0-1h.818a.5.5 0 0 1 0 1Zm3.272 0h-.818a.5.5 0 0 1 0-1h.818a.5.5 0 1 1 0 1ZM14 6a.5.5 0 0 0 1 0v-.5a.5.5 0 0 0-.5-.5H14a.5.5 0 0 0 0 1Zm.5 3.395a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 1 0v.5a.5.5 0 0 1-.5.5Zm-3.265 6.708V10.6L15.265 14h-1.633c-.277 0-.542.116-.73.318l-1.667 1.785ZM9.868 19.57a1 1 0 0 0 1.098-.248L14.067 16H18a1 1 0 0 0 .644-1.764L10.88 7.684a1 1 0 0 0-1.645.765v10.19c0 .412.251.78.633.932Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSelectAnArea;
