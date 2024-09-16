import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGoogle = ({
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
      d="M6.016 11.7c.053-3.091 2.952-5.798 6.105-5.695 1.51-.069 2.93.576 4.088 1.481a21.52 21.52 0 0 1-1.552 1.576c-1.39-.943-3.369-1.212-4.76-.123-1.99 1.349-2.08 4.534-.167 5.986 1.862 1.656 5.38.834 5.895-1.701-1.166-.017-2.335 0-3.501-.037-.003-.682-.006-1.364-.003-2.046a570.54 570.54 0 0 1 5.85.006c.117 1.604-.099 3.311-1.104 4.638-1.523 2.1-4.58 2.713-6.964 1.813-2.393-.894-4.088-3.372-3.887-5.898"
      fill="currentColor"
    />
  </svg>
);

export default SvgGoogle;
