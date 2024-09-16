import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPredefinedZoom = ({
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
      d="M16 1.68a14.32 14.32 0 1 1 0 28.64 14.32 14.32 0 0 1 0-28.64Z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.56 13.02a4.18 4.18 0 0 1 3.49 6.49l2.13 2.12a.84.84 0 0 1-1.19 1.15l-2.12-2.12a4.14 4.14 0 0 1-2.31.7 4.19 4.19 0 0 1 0-8.37v.03ZM9.4 17.31a.82.82 0 0 1 .81.72v2.65h2.6a.821.821 0 1 1 .1 1.64h-2.69a1.65 1.65 0 0 1-1.64-1.54v-2.65a.83.83 0 0 1 .82-.82Zm8.16-2.62a2.51 2.51 0 1 0 0 5.02 2.51 2.51 0 0 0 0-5.02Zm-4.75-5.75a.821.821 0 0 1 .1 1.64h-2.69v2.55a.822.822 0 0 1-1.64.1v-2.64a1.65 1.65 0 0 1 1.51-1.64h2.72v-.01Zm9 0a1.65 1.65 0 0 1 1.65 1.65v2.55a.83.83 0 0 1-1.65 0v-2.55h-2.58a.83.83 0 1 1 0-1.65h2.58Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPredefinedZoom;
