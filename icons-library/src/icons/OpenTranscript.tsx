import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgOpenTranscript = ({
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
      d="m15.197 10.556 1.747 1.748a.62.62 0 0 0 1.055-.406V6.65a.624.624 0 0 0-.18-.469.624.624 0 0 0-.47-.18l-5.243.005a.612.612 0 0 0-.544.397.617.617 0 0 0 .138.658l1.748 1.748-7.086 7.081a1.235 1.235 0 1 0 1.748 1.747l7.087-7.08Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgOpenTranscript;
