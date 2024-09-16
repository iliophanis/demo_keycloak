import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDone = ({
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
      d="M17.709 7.343a1.082 1.082 0 0 0-1.552 0l-5.825 5.995-2.489-2.562a1.082 1.082 0 0 0-1.552 1.508l3.277 3.373a1.082 1.082 0 0 0 1.675-.151l.003-.003 6.463-6.651a1.082 1.082 0 0 0 0-1.509Z"
      fill="#00AF41"
    />
  </svg>
);

export default SvgDone;
