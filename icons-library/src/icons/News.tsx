import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNews = ({
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
      d="M18 20H8.815c.113-.314.185-.647.185-1V4h10v14.5c0 .089.029.168.051.25-.022.082-.051.161-.051.25 0 .551-.448 1-1 1ZM5 14h2v5a1.001 1.001 0 0 1-2 0v-5ZM21 3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v9H4a1 1 0 0 0-1 1v6c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3 0-.089-.028-.168-.051-.25.023-.082.051-.161.051-.25V3Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5 6h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1Zm0 2h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1Zm-5 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm2 3h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1Zm2 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm-2 2h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1Zm2 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm-2 2h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1Zm2 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNews;
