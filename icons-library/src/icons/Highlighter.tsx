import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHighlighter = ({
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
      d="m16.85 5.292 2.49 2.49c.316.316.384.8.17 1.19l-4.428 8.026a1.003 1.003 0 0 1-.876.516h-3.32a.996.996 0 0 1-.707-.293L7.41 14.454a1.003 1.003 0 0 1-.293-.707v-3.32a1 1 0 0 1 .517-.876l8.025-4.428a1.004 1.004 0 0 1 1.19.169Zm-5.594 4.546 3.614 3.402 2.524-4.575-1.426-1.427-4.712 2.6Zm-4.902 4.946c.286-.012.563.085.768.284l1.965 1.93a1.002 1.002 0 0 1-.701 1.714h-.032l-3.384-.105a1.002 1.002 0 0 1-.758-1.614l1.42-1.825a.998.998 0 0 1 .722-.384Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgHighlighter;
