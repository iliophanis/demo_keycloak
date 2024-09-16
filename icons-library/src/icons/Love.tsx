import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLove = ({
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
      d="M7.55 5.002c-.844 0-2.396.32-3.218 2.49-1.425 3.763 1.972 6.729 5.888 9.685.685.518 1.286.97 1.76 1.389.476-.418 1.077-.871 1.762-1.388 3.916-2.957 7.314-5.923 5.889-9.685-.915-2.417-2.738-2.54-3.478-2.481-1.571.126-2.884 1.265-3.192 2.77a1 1 0 0 1-1.96 0c-.308-1.505-1.62-2.644-3.191-2.77a3.28 3.28 0 0 0-.26-.01m4.43 16a1 1 0 0 1-.81-.416c-.293-.407-1.198-1.09-2.155-1.813C5.788 16.337.388 12.26 2.462 6.785c.953-2.52 3.055-3.966 5.508-3.766a5.592 5.592 0 0 1 4.01 2.2 5.596 5.596 0 0 1 4.013-2.2c2.44-.2 4.554 1.247 5.508 3.766 2.074 5.475-3.327 9.552-6.554 11.989-.957.723-1.861 1.406-2.155 1.812a1 1 0 0 1-.811.416"
      fill="currentColor"
    />
  </svg>
);

export default SvgLove;
