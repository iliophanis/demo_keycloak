import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAnswerKey = ({
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
    <path d="M16 0a16 16 0 1 0 0 32 16 16 0 0 0 0-32Z" fill="currentColor" />
    <path
      d="M16 1.69a14.32 14.32 0 1 1 0 28.64 14.32 14.32 0 0 1 0-28.64Z"
      fill="#fff"
    />
    <path
      d="M18.41 6.59a5.86 5.86 0 0 1 3.8 10.31 4.48 4.48 0 0 0-.94-1.4 4.18 4.18 0 1 0-7-3.05 4.23 4.23 0 0 0 .64 2.22L9.2 20.32v1.33h1.33l2.86-2.86c.008.665.161 1.32.45 1.92l-2.37 2.36a.88.88 0 0 1-.48.24H8.37a.84.84 0 0 1-.84-.74v-2.6a.82.82 0 0 1 .17-.51l.07-.08 5.08-5.08a5.86 5.86 0 0 1 5.56-7.71ZM18 14.12a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.68a2.93 2.93 0 1 0-.02 5.86A2.93 2.93 0 0 0 18 15.8Zm1.86 1.5a.831.831 0 0 1 0 1.18l-1.67 1.67a.84.84 0 0 1-1.19 0l-.83-.8a.84.84 0 0 1 1.19-1.18l.24.21 1.08-1.08a.83.83 0 0 1 1.17 0h.01Zm-.19-7.36a1.26 1.26 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.24-1.25h.01Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAnswerKey;
