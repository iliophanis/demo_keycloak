import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPrepare = ({
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
      d="M18.28 7h-.365A1.5 1.5 0 0 0 16.5 6h-1a1.5 1.5 0 0 0-1.415 1h-.364a1 1 0 0 0-.949.684L12.334 9H11l1-2H9a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-3l1 2h-1.333l-.44-1.316A1 1 0 0 0 18.28 7Zm1.387 2H22v15l-12-.003V9h2.333L12 10h8l-.333-1Zm1.186 6.853a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5Zm0 5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5Zm-8.353-3.5a.498.498 0 0 1-.354-.146l-1-1.147a.5.5 0 0 1 .707-.707l.647.793 1.793-2a.5.5 0 0 1 .707.707l-2.147 2.354a.497.497 0 0 1-.353.146Zm0 5a.498.498 0 0 1-.354-.146l-1-1.147a.5.5 0 0 1 .707-.707l.647.793 1.793-2a.5.5 0 0 1 .707.707l-2.147 2.354a.497.497 0 0 1-.353.146Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPrepare;
