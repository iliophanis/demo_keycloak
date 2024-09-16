import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCollaborativeLine = ({
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
      d="M8 6c1.878 0 3 1.254 3 3.355C11 11.108 9.853 13 8 13s-3-1.892-3-3.645C5 7.254 6.122 6 8 6Zm0 2c-.506 0-1 .105-1 1.355C7 10.185 7.495 11 8 11s1-.815 1-1.645C9 8.105 8.506 8 8 8Zm18 5.355C26 11.254 24.878 10 23 10s-3 1.254-3 3.355C20 15.108 21.147 17 23 17s3-1.892 3-3.645Zm-4 0c0-1.25.494-1.355 1-1.355s1 .105 1 1.355c0 .83-.495 1.645-1 1.645s-1-.815-1-1.645ZM23 20c1.103 0 2 .897 2 2a1 1 0 0 0 2 0c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0 2 0c0-1.103.897-2 2-2ZM16 6c1.878 0 3 1.254 3 3.355C19 11.108 17.853 13 16 13s-3-1.892-3-3.645C13 7.254 14.122 6 16 6Zm0 2c-.506 0-1 .105-1 1.355 0 .83.495 1.645 1 1.645s1-.815 1-1.645C17 8.105 16.506 8 16 8Zm2 10c0-1.103-.897-2-2-2s-2 .897-2 2a1 1 0 0 1-2 0c0-2.206 1.794-4 4-4s4 1.794 4 4a1 1 0 0 1-2 0ZM8 14c2.206 0 4 1.794 4 4a1 1 0 0 1-2 0c0-1.103-.897-2-2-2s-2 .897-2 2a1 1 0 0 1-2 0c0-2.206 1.794-4 4-4ZM5 24a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2H5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCollaborativeLine;
