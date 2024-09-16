import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMusic = ({
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
      d="M16.5 21c.271 0 .5-.229.5-.5v-5c0-.271-.229-.5-.5-.5s-.5.229-.5.5v5c0 .271.229.5.5.5Zm-9-6c-.271 0-.5.229-.5.5v5c0 .271.229.5.5.5s.5-.229.5-.5v-5c0-.271-.229-.5-.5-.5ZM2 11C2 5.486 6.486 1 12 1s10 4.486 10 10v5c0 1.542-1.458 3-3 3v1.5c0 1.378-1.122 2.5-2.5 2.5a2.503 2.503 0 0 1-2.5-2.5v-5c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5V17c.449 0 1-.551 1-1v-5c0-4.411-3.589-8-8-8s-8 3.589-8 8v5c0 .449.551 1 1 1v-1.5C5 14.122 6.122 13 7.5 13s2.5 1.122 2.5 2.5v5c0 1.378-1.122 2.5-2.5 2.5A2.503 2.503 0 0 1 5 20.5V19c-1.542 0-3-1.458-3-3v-5Zm15.5-1a.499.499 0 0 1-.485-.379c-.436-1.744-2.19-3.62-5.015-3.62-2.824 0-4.579 1.876-5.015 3.62a.5.5 0 0 1-.97-.242C6.542 7.27 8.64 5 12 5c3.36 0 5.458 2.27 5.985 4.38a.5.5 0 0 1-.486.62Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMusic;
