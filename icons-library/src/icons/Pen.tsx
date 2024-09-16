import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPen = ({
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
      d="m10.949 15.709-.122.043-2.116-2.117 4.178-4.18 2.158 2.157-4.098 4.097Zm-2.796-1.218 1.626 1.627-2.303.806.677-2.433Zm11.055-5.626-3.572-3.572a.996.996 0 0 0-1.414 0l-7.554 7.556c-.122.122-.21.273-.257.439l-1.374 4.944a1.001 1.001 0 0 0 1.294 1.212l5.494-1.923a.989.989 0 0 0 .377-.237l7.006-7.005a1 1 0 0 0 0-1.414Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPen;
