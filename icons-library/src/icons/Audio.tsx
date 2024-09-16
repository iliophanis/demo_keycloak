import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAudio = ({
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
      d="M16 1.69a14.32 14.32 0 1 1 0 28.64 14.32 14.32 0 0 1 0-28.64Z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.58 9.087a.84.84 0 0 1 .46.75v11.71a.84.84 0 0 1-.84.84.86.86 0 0 1-.5-.17l-5-3.76a.839.839 0 0 1-.33-.67v-4.18a.82.82 0 0 1 .33-.67l5-3.77a.85.85 0 0 1 .88-.08Zm5.81 1.43a.8.8 0 0 1 .79.7v8.85a.8.8 0 0 1-1.59.1v-8.85a.8.8 0 0 1 .8-.8Zm-7 1-3.35 2.51v3.35l3.35 2.51v-8.37Zm4.2.47a.8.8 0 0 1 .79.7v5.93a.801.801 0 1 1-1.6.1v-5.93a.8.8 0 0 1 .79-.81l.02.01Zm-10.5 1.2a.42.42 0 0 1 .42.42v4.18a.42.42 0 0 1-.42.42H7.42a.42.42 0 0 1-.42-.42v-4.18a.42.42 0 0 1 .42-.42h1.67Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAudio;
