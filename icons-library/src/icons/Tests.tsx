import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTests = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 14H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6.98l-2 2H6v5h5v-2l2-2v5a1 1 0 0 1-1 1ZM7.854 9.146a.5.5 0 0 0-.707.707l1 1a.498.498 0 0 0 .707 0l4-4a.5.5 0 0 0-.707-.707L8.5 9.793l-.646-.646Zm13.301 7.806-2.582-2.582 2.936-2.947 2.583 2.582-2.937 2.947Zm-4.542 1.968 1.272-3.824 2.548 2.547-3.82 1.277Zm11.095-7.128-3.989-4a.996.996 0 0 0-1.41 0l-.96.964a.141.141 0 0 1-.027.017c-.01.006-.02.011-.029.02-.008.008-.014.018-.02.028a.155.155 0 0 1-.018.029l-.4.403-.029.017a.134.134 0 0 0-.033.023c-.01.01-.016.021-.022.033-.005.01-.01.02-.018.028l-4.427 4.44c-.108.11-.192.244-.24.39l-2.046 6c-.12.359.025.756.292 1.023a.994.994 0 0 0 1.021.242l5.983-2a.998.998 0 0 0 .39-.241l5.982-6.002c.39-.39.39-1.023 0-1.414ZM7.854 22.146a.5.5 0 0 0-.707.707l1 1a.498.498 0 0 0 .707 0l4-4a.5.5 0 0 0-.707-.707L8.5 22.793l-.646-.646ZM12 27H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h6.98l-2 2H6v5h5v-2l2-2v5a1 1 0 0 1-1 1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTests;
