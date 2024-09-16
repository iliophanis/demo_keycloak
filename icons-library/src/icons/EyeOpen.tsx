import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEyeOpen = ({
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
      d="M12 17c-4.382 0-7.045-3.697-7.848-5C4.956 10.696 7.619 7 12 7c4.38 0 7.044 3.695 7.848 5-.804 1.305-3.468 5-7.848 5Zm9.895-5.447C21.761 11.285 18.543 5 12 5c-6.543 0-9.761 6.285-9.895 6.553-.14.281-.14.613 0 .894C2.239 12.715 5.457 19 12 19c6.543 0 9.761-6.285 9.895-6.553.14-.281.14-.613 0-.894ZM11 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEyeOpen;
