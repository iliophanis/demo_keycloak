import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCopy = ({
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
      d="M8 19.997 18 20V6H8v13.997ZM19 22l-12-.003a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a.997.997 0 0 1-1 1Zm3 3-12-.004a1 1 0 1 1 0-2L21 23V8a1 1 0 0 1 2 0v16a.997.997 0 0 1-1 1Zm-10 1.996a1 1 0 0 0 1 1L25 28a.997.997 0 0 0 1-1V11a1 1 0 0 0-2 0v15l-11-.004a1 1 0 0 0-1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCopy;
