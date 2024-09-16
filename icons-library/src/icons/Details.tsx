import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDetails = ({
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
      d="M4 22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14Zm22-1H6V9h20v12Zm-13 5a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2h-6Zm2-11H8v-4h7v4Zm-7 2h3.001v-1H8v1Zm16-4h-7v-2h7v2Zm-7 2h5v-1h-5v1Zm7 0h-1v-1h1v1Zm-7 2h5v-1h-5v1Zm3.001 2H17v-1h3.001v1ZM23 17h1v-1h-1v1Zm-11.999 2H8v-1h3.001v1ZM12 17h3v-1h-3v1Zm3 2h-3v-1h3v1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDetails;
