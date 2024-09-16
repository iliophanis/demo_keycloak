import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFacebook = ({
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
      d="M16 7.49h-1.45c-1.137 0-1.358.526-1.358 1.3v1.701h2.712l-.352 2.667h-2.36V20h-2.828v-6.842H8V10.49h2.364V8.525C10.364 6.243 11.796 5 13.887 5c1.002 0 1.862.073 2.113.105V7.49Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFacebook;
