import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgJoinClassWithoutCode = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 72 56"
    fill="none"
    data-testid="svg-element"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M56 0H2a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h28.15s2-2 6-4H4V4h54V2a2 2 0 0 0-2-2Zm.012 8c-4.73 0-7.626 3.224-7.938 8.634 1.596.494 2.972 1.286 4.11 2.362a8.997 8.997 0 0 1-.16-1.576c0-5.002 1.976-5.42 4-5.42s4 .418 4 5.42c0 3.32-1.98 6.58-4 6.58a2.1 2.1 0 0 1-.836-.196c.404 1.25.612 2.672.712 4.18.02 0 .038.004.056.008.018.004.036.008.056.008 4.942 0 8-5.406 8-10.414 0-6.002-2.99-9.586-8-9.586ZM44.023 24c2.024 0 4 .418 4 5.42 0 3.32-1.98 6.58-4 6.58s-4-3.26-4-6.58c0-5.002 1.976-5.42 4-5.42Zm-.012 16c4.942 0 8-5.406 8-10.414 0-6.002-2.99-9.586-8-9.586-5.008 0-8 3.584-8 9.586 0 5.008 3.058 10.414 8 10.414Zm12.14 16c7.29 0 2.43-6 0-8-3.53-2.906-7.29-4-12.13-4v.012L44.01 44c-4.87 0-8.59 1.124-12.159 4-2.456 1.978-7.29 8 0 8H56.15Zm-12.13-4H53.74c-1.843-3.312-7.049-4-9.72-4v-.004l-.01.004c-2.8 0-7.83.75-9.72 4h9.73Zm12-20c4.84 0 8.597 1.094 12.13 4 2.43 2 7.29 8 0 8H58s-2-2-6-4H65.737c-1.84-3.312-7.046-4-9.718-4v-.004l-.01.004a18.7 18.7 0 0 0-1.422.066c.55-1.298.984-2.656 1.204-4.052.038 0 .074-.004.11-.007.035-.003.07-.007.108-.007l.01.012V32ZM20 26c1.076 0 2 .858 2 1.974S21.1 30 20 30c-1.05 0-2-.858-2-1.974 0-1.118.902-2.026 2-2.026Zm-.055-6.885c-.99.938-1.601 1.517-1.601 2.885v2h3.412v-2c0-.87.817-1.417 1.734-2.03 1.173-.784 2.51-1.678 2.51-3.5 0-2.918-2.762-4.47-5.946-4.47C16.44 12 14 13.568 14 17h3.576c0-1.856.886-2.012 2.478-2.012 1.61 0 2.452.424 2.452 1.518 0 .673-.625 1.119-1.353 1.639-.362.258-.75.535-1.099.867l-.109.103Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgJoinClassWithoutCode;
