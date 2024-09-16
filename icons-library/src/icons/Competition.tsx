import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCompetition = ({
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
      d="M14.5 19.96a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5M9.5 19.96a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5 20.96a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5M4.5 20.96a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5"
      fill="#666"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.793 11.254a1.001 1.001 0 0 0-.28.871l.663 3.974-3.696-2.016a.995.995 0 0 0-.958 0L7.825 16.1l.662-3.974a1.001 1.001 0 0 0-.28-.87L5.083 8.122l4.082-.676a.998.998 0 0 0 .714-.507L12 3.05l2.122 3.89c.147.27.41.457.714.507l4.082.676-3.126 3.131Zm6.16-4.106a1 1 0 0 0-.79-.68l-5.518-.914L12.878.482c-.35-.643-1.405-.643-1.755 0L8.356 5.554l-5.52.914a1 1 0 0 0-.543 1.693l4.137 4.142-.916 5.493a.999.999 0 0 0 1.466 1.042L12 16.1l5.022 2.738a.993.993 0 0 0 1.058-.063.999.999 0 0 0 .407-.979l-.916-5.493 4.137-4.142c.265-.265.359-.656.245-1.013Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCompetition;
