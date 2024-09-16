import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSound = ({
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
      d="m12 14 4 3V7l-4 3v4Zm5 6c-.212 0-.423-.068-.6-.2l-6-4.5a1 1 0 0 1-.4-.8v-5a1 1 0 0 1 .4-.8l6-4.5A1 1 0 0 1 18 5v14a1.001 1.001 0 0 1-1 1Zm-8.5-5h-2a.501.501 0 0 1-.5-.5v-5c0-.275.225-.5.5-.5h2c.275 0 .5.225.5.5v5c0 .275-.225.5-.5.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSound;
