import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRedo = ({
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
      d="m19.207 10.293-3-3A1 1 0 0 0 14.5 8v2H8.917A3.921 3.921 0 0 0 5 13.917a3.921 3.921 0 0 0 3.917 3.917 1 1 0 1 0 0-2A1.92 1.92 0 0 1 7 13.917 1.92 1.92 0 0 1 8.917 12H14.5v2a.999.999 0 0 0 1.707.707l3-3a.999.999 0 0 0 0-1.414Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRedo;
