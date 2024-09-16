import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMaterials = ({
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
      d="M6 22.997 26 23V9H6v13.997ZM27 25l-22-.003a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v16a.997.997 0 0 1-1 1Zm-12.5-5a.498.498 0 0 1-.459-.303L13.313 18H9.688l-.728 1.697a.5.5 0 0 1-.918-.394l3-7c.157-.367.761-.367.918 0l3 7A.5.5 0 0 1 14.5 20Zm-3-6.23L12.885 17h-2.77l1.385-3.23Zm9 6.23h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1ZM17 19c-.542 0-1-.687-1-1.5s.458-1.5 1-1.5 1 .687 1 1.5-.458 1.5-1 1.5Zm2 0v-3.5a.5.5 0 0 0-.5-.5.492.492 0 0 0-.473.366A1.7 1.7 0 0 0 17 15c-1.103 0-2 1.121-2 2.5s.897 2.5 2 2.5c.407 0 .784-.154 1.1-.416.124.298.382.416.9.416a.5.5 0 0 0 0-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMaterials;
