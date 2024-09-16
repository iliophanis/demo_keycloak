import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTemplates = ({
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
      d="M4 5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H5v1a1 1 0 0 1-1 1ZM3 19a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H5v-1a1 1 0 0 0-2 0v2Zm10 0a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0-1 1Zm2-15a1 1 0 0 0 2 0V2a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h1v1ZM9 20a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2H9ZM9 3h2a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2ZM4 15a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1ZM3 9a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0v2Zm13 6a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1Zm-1-6a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0v2Zm-2.5-3h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1Zm-2 2h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1Zm2 3h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1Zm-5 2h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm2 3h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1ZM7 23h13a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v16H7a1 1 0 0 0 0 2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTemplates;
