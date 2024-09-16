import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgInvert = ({
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
      d="M15 8.828v2l.013-.012a1 1 0 0 0 1.694.548l2.828-2.828a1 1 0 0 0 0-1.415l-2.828-2.828a1 1 0 0 0-1.694.548L15 4.828v2H6a1 1 0 1 0 0 2h9ZM9.828 15.657v-2l-.012.012a1 1 0 0 0-1.694-.548l-2.83 2.829a1 1 0 0 0 0 1.414l2.83 2.828a1 1 0 0 0 1.694-.548l.012.013v-2h9a1 1 0 0 0 0-2h-9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgInvert;
