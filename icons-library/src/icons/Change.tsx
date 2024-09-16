import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgChange = ({
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
      d="M17 13V9c0-1.654-1.346-3-3-3s-3 1.346-3 3v6c0 .551-.449 1-1 1-.551 0-1-.449-1-1v-4h2L8 8l-3 3h2v4c0 1.654 1.346 3 3 3s3-1.346 3-3V9c0-.551.449-1 1-1 .551 0 1 .449 1 1v4h-2l3 3 3-3h-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChange;
