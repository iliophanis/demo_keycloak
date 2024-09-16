import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEmptyMedal = ({
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
      d="M20.083 18.583H11.75c-.575 0-1.042.467-1.042 1.042v8.333l.007.12c.079.705.845 1.14 1.5.812l3.702-1.85 3.7 1.85a1.042 1.042 0 0 0 1.508-.932v-8.333c0-.575-.466-1.042-1.042-1.042Z"
      fill="#CFCFCF"
    />
    <path
      d="M20.083 18.583H11.75c-.575 0-1.042.467-1.042 1.042v8.333l.007.12c.079.705.845 1.14 1.5.812l3.702-1.85 3.7 1.85a1.042 1.042 0 0 0 1.508-.932v-8.333c0-.575-.466-1.042-1.042-1.042Zm-1.041 2.084v5.606l-2.66-1.33-.128-.053a1.042 1.042 0 0 0-.803.053l-2.66 1.329v-5.605h6.25Z"
      fill="#B4B4B4"
    />
    <path
      d="M15.917 4c5.753 0 10.416 4.664 10.416 10.417S21.67 24.833 15.917 24.833 5.5 20.17 5.5 14.417 10.164 4 15.917 4Z"
      fill="#DEDEDE"
    />
    <path
      d="M26.333 14.417c0 5.753-4.663 10.416-10.416 10.416-2.477 0-4.752-.864-6.54-2.308.768.148 1.561.225 2.373.225 6.904 0 12.5-5.596 12.5-12.5 0-.812-.077-1.606-.225-2.374a10.377 10.377 0 0 1 2.308 6.54Z"
      fill="#CFCFCF"
    />
    <path
      d="M15.917 4c1.245 0 2.44.219 3.547.62.4 1.107.62 2.301.62 3.547 0 5.753-4.664 10.416-10.417 10.416-1.246 0-2.44-.218-3.547-.62a10.393 10.393 0 0 1-.62-3.546C5.5 8.664 10.164 4 15.917 4Z"
      fill="#EAEAEA"
    />
    <path
      d="M15.917 4c5.753 0 10.416 4.664 10.416 10.417S21.67 24.833 15.917 24.833 5.5 20.17 5.5 14.417 10.164 4 15.917 4Zm0 2.083a8.333 8.333 0 1 0 0 16.667 8.333 8.333 0 0 0 0-16.667Z"
      fill="#B4B4B4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m15.917 17.02-3.062 1.61.585-3.409-2.477-2.414 3.423-.497 1.53-3.102 1.531 3.102 3.423.497-2.477 2.414.585 3.41-3.061-1.61Z"
      fill="#B4B4B4"
    />
    <path
      d="M14.322 8.167c2.57 0-4.655 7.226-4.655 4.655a4.655 4.655 0 0 1 4.655-4.655Z"
      fill="#fff"
    />
    <path
      d="M15.917 4c5.753 0 10.416 4.664 10.416 10.417 0 3.855-2.094 7.222-5.208 9.023v4.518c0 .775-.815 1.278-1.508.932l-3.7-1.85-3.701 1.85a1.042 1.042 0 0 1-1.501-.812l-.007-.12V23.44A10.413 10.413 0 0 1 5.5 14.417C5.5 8.664 10.164 4 15.917 4Z"
      fill="#fff"
      style={{
        mixBlendMode: "overlay",
      }}
      opacity={0.35}
    />
  </svg>
);

export default SvgEmptyMedal;
