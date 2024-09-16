import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDownload2 = ({
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
      d="M12 11a.5.5 0 0 1 .5.5V18H16l-4 4-4-4h3.5v-6.5a.5.5 0 0 1 .5-.5Zm0-8c2.405 0 4.665.936 6.364 2.636 3.365 3.365 3.522 8.893.343 12.071a.997.997 0 0 1-1.414 0 1 1 0 0 1 0-1.414c2.15-2.149 2.524-6.376-.343-9.243A6.954 6.954 0 0 0 12 5c-1.87 0-3.628.728-4.95 2.05A6.92 6.92 0 0 0 5 11.858c-.025 1.71.597 3.325 1.707 4.435a1 1 0 0 1-1.414 1.414c-1.49-1.489-2.325-3.632-2.292-5.878a8.898 8.898 0 0 1 2.635-6.193A8.937 8.937 0 0 1 12 3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDownload2;
