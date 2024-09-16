import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgResources = ({
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
      d="M10 13.5V7.453A3.91 3.91 0 0 0 12 8a1 1 0 1 0 0-2c-1.342 0-2.102-1.438-2.105-1.447A1 1 0 0 0 8 5v5.992a3.404 3.404 0 0 0-1-.16c-1.654 0-3 1.16-3 2.585C4 14.84 5.346 16 7 16c1.575 0 2.856-1.054 2.977-2.384.002-.018.006-.035.011-.051A.236.236 0 0 0 10 13.5Zm8.58 8.771-7.364-4.167a.808.808 0 0 0-.813.011.835.835 0 0 0-.403.718v8.333c0 .295.153.57.403.718a.806.806 0 0 0 .813.011l7.363-4.167A.836.836 0 0 0 19 23a.836.836 0 0 0-.42-.729ZM17 6h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm5.707 6L26 8.707v6.586L22.707 12Zm2.586 4L22 12.707 18.707 16h6.586Zm-6.586-8h6.586L22 11.293 18.707 8Zm2.586 4L18 8.707v6.586L21.293 12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgResources;
