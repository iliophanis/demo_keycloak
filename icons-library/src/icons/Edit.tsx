import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEdit = ({
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
      d="M10.147 18.44 5.56 13.852l5.793-5.793 4.586 4.586-5.793 5.793ZM4 20l.863-5.43 4.566 4.566L4 20ZM21.708 8.293l-6-6a1 1 0 0 0-1.415 0l-11 11a1 1 0 0 0-.241.39l-1 7a1 1 0 0 0 1.265 1.265l7-1a1.01 1.01 0 0 0 .39-.24l11-11a1 1 0 0 0 0-1.415Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEdit;
