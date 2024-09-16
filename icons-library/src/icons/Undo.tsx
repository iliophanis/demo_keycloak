import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUndo = ({
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
      d="M15.583 10H10V8a.999.999 0 0 0-1.707-.706l-3 3a.999.999 0 0 0 0 1.414l3 3A1 1 0 0 0 10 14v-2h5.583a1.92 1.92 0 0 1 1.917 1.917 1.92 1.92 0 0 1-1.917 1.917 1 1 0 1 0 0 2 3.921 3.921 0 0 0 3.917-3.917A3.921 3.921 0 0 0 15.583 10Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUndo;
