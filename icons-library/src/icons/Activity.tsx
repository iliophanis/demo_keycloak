import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActivity = ({
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
      d="M16 1.68a14.32 14.32 0 0 1 0 28.64 14.32 14.32 0 1 1 0-28.64Z"
      fill="#fff"
    />
    <path
      d="M11.15 9.91a2 2 0 0 1 3.43-1.34l7.57 7.2a1.9 1.9 0 0 1-1.38 3.3h-.53l.6 1.31a1.849 1.849 0 0 1 0 1.46 2 2 0 0 1-1.09 1.06l-1.33.53a2 2 0 0 1-2.61-1l-.55-1.23-.76.71a2 2 0 0 1-3.35-1.39V9.91Zm2.4-.18a.47.47 0 0 0-.8.31v10.27a.47.47 0 0 0 .8.3l2.26-2.13 1.34 3.09a.47.47 0 0 0 .61.23l1.29-.51a.43.43 0 0 0 .25-.57l-1.46-3.25h2.75a.439.439 0 0 0 .32-.75l-7.36-6.99Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.1}
    />
  </svg>
);

export default SvgActivity;
