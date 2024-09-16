import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgStudent = ({
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
      d="M22 8c1.878 0 3 1.254 3 3.355C25 13.108 23.853 15 22 15s-3-1.892-3-3.645C19 9.254 20.122 8 22 8Zm-2 13v-2c0-1.103.897-2 2-2s2 .897 2 2v4a1 1 0 0 0 2 0v-4c0-2.206-1.794-4-4-4a4.007 4.007 0 0 0-3.775 2.677A3.978 3.978 0 0 0 16 17c1.853 0 3-1.892 3-3.645C19 11.254 17.878 10 16 10s-3 1.254-3 3.355C13 15.108 14.147 17 16 17a4.007 4.007 0 0 0-3.775 2.677A3.978 3.978 0 0 0 10 19c1.853 0 3-1.892 3-3.645C13 13.254 11.878 12 10 12s-3 1.254-3 3.355C7 17.108 8.147 19 10 19c-2.206 0-4 1.794-4 4a1 1 0 0 0 2 0c0-1.103.897-2 2-2s2 .897 2 2a1 1 0 0 0 2 0v-2c0-1.103.897-2 2-2s2 .897 2 2v2a1 1 0 0 0 2 0v-2ZM9 15.355C9 14.105 9.494 14 10 14s1 .105 1 1.355c0 .83-.495 1.645-1 1.645s-1-.815-1-1.645ZM16 12c-.506 0-1 .105-1 1.355 0 .83.495 1.645 1 1.645s1-.815 1-1.645c0-1.25-.494-1.355-1-1.355Zm5-.645c0-1.25.494-1.355 1-1.355s1 .105 1 1.355c0 .83-.495 1.645-1 1.645s-1-.815-1-1.645Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgStudent;
