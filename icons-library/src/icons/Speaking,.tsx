import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSpeaking = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 40 40"
    fill="none"
    data-testid="svg-element"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.799 7.144C18.99 6.408 18.234 6.037 17.053 6L15.25 6a1.75 1.75 0 1 0 0 3.5h1.727l.065.005c.174.018.26.084.55.368l.345.332c.77.701 1.468 1.045 2.563 1.045 1.204 0 1.93-.416 2.796-1.267l.241-.235c.184-.173.27-.224.404-.241l.084-.007h1.725a1.75 1.75 0 1 0 0-3.5h-1.803c-1.3.04-2.084.486-2.99 1.375l-.287.28c-.082.078-.106.092-.14.094h-.06c-.034-.002-.058-.016-.14-.093l-.286-.28-.245-.232ZM38 18.867c0-3.108-6.523-4.08-16.862-4.117l-1.904.004C9.259 14.828 3 15.823 3 18.867c0 4.85 8.709 9.883 17.5 9.883S38 23.717 38 18.867ZM12.121 23.14c2.323-.843 5.377-1.39 8.38-1.39 3.003 0 6.057.547 8.38 1.39l.369.14-.339.163c-.627.285-1.285.542-1.965.767a20.6 20.6 0 0 1-6.445 1.04c-2.213 0-4.4-.364-6.445-1.04l-.672-.236a19.536 19.536 0 0 1-1.293-.531l-.341-.164.371-.139Zm13.67 7.396c.754-.175 1.504.31 1.674 1.085.17.774-.303 1.543-1.057 1.718A26.22 26.22 0 0 1 20.5 34a26.22 26.22 0 0 1-5.908-.66c-.754-.176-1.228-.945-1.057-1.72.17-.774.92-1.26 1.674-1.084 1.674.388 3.459.664 5.291.664 1.832 0 3.617-.276 5.291-.664Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSpeaking;
