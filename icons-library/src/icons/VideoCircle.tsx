import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgVideoCircle = ({
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
      d="M16 1.68a14.32 14.32 0 1 1 0 28.64 14.32 14.32 0 0 1 0-28.64Z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 9.26c2.5-.055 4.99.355 7.34 1.21a1.7 1.7 0 0 1 1.08 1.61v7.91a1.69 1.69 0 0 1-1.08 1.57A20.158 20.158 0 0 1 16 22.77a20.18 20.18 0 0 1-7.35-1.21 1.69 1.69 0 0 1-1.08-1.57v-7.91a1.7 1.7 0 0 1 1.08-1.57A20.18 20.18 0 0 1 16 9.26Zm0 1.68a19.088 19.088 0 0 0-6.39 1l-.35.14v7.91l.35.09a19.09 19.09 0 0 0 6.39 1 19.07 19.07 0 0 0 6.38-1l.35-.13v-7.87A18.5 18.5 0 0 0 16 10.94Zm-1.9 1.77a.719.719 0 0 1 .32.08l4.54 2.66a.621.621 0 0 1 .22.86.54.54 0 0 1-.22.23l-4.54 2.66a.63.63 0 0 1-.86-.23.57.57 0 0 1-.09-.32v-5.31a.63.63 0 0 1 .63-.63Zm1.05 2.46v1.65l1.41-.82-1.41-.83Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgVideoCircle;
