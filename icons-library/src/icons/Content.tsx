import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgContent = ({
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
      d="M23 7H11a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2Zm-12 4h12a1 1 0 1 0 0-2H11a1 1 0 1 0 0 2Zm-5.404 0L4.5 8.495 3.404 11h2.192ZM2.53 13l-.613 1.4A1 1 0 1 1 .084 13.6l3.5-8a1 1 0 0 1 1.832 0l3.5 8a1 1 0 1 1-1.832.801L6.471 13H2.53ZM11 15h12a1 1 0 1 0 0-2H11a1 1 0 1 0 0 2ZM1 19a1 1 0 1 1 0-2h20a1 1 0 1 1 0 2H1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgContent;
