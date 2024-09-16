import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDelivery = ({
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
      d="M15 18h-4c0 1.103-.897 2-2 2s-2-.897-2-2H3a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v2h10V6H3a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1v1h4a1 1 0 0 1 .97.757l.888 3.554 1.589.794c.339.17.553.516.553.895v5a1 1 0 0 1-1 1h-.5a2 2 0 1 1-4 0H15Zm6-2h1v-3.382l-1.447-.723a1.003 1.003 0 0 1-.523-.652L19.219 8H16v8h5ZM4 9H3a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm5 2a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1ZM7 9h2a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDelivery;
