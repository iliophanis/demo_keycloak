import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUser = ({
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
      d="M12 1C5.934 1 1 5.934 1 12s4.934 11 11 11 11-4.934 11-11S18.066 1 12 1ZM5.774 19.926A10.071 10.071 0 0 1 1.917 12C1.917 6.44 6.44 1.917 12 1.917c5.56 0 10.083 4.523 10.083 10.083 0 3.212-1.51 6.078-3.857 7.926-.573-.896-2.482-3.343-6.226-3.343-3.744 0-5.653 2.447-6.226 3.343Zm1.573 1.018A10.022 10.022 0 0 0 12 22.084c1.677 0 3.26-.412 4.653-1.14-.628-.942-2.067-2.527-4.653-2.527-2.587 0-4.025 1.585-4.653 2.527Zm8.37-10.05c0 2.295-1.402 4.773-3.667 4.773-2.265 0-3.667-2.478-3.667-4.773 0-2.751 1.371-4.394 3.667-4.394s3.666 1.643 3.666 4.394Zm-3.662-2.56c.928 0 1.833.19 1.833 2.484 0 1.521-.907 3.015-1.833 3.015-.926 0-1.833-1.494-1.833-3.015 0-2.293.905-2.485 1.833-2.485Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUser;
