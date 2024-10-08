import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBronzeMedal = ({
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
      d="M20.25 18.583h-8.333c-.576 0-1.042.467-1.042 1.042v8.333l.007.12c.078.705.844 1.14 1.5.812l3.701-1.85 3.701 1.85a1.042 1.042 0 0 0 1.508-.932v-8.333c0-.575-.467-1.042-1.042-1.042Z"
      fill="#CAAF8D"
    />
    <path
      d="M20.25 18.583h-8.333c-.576 0-1.042.467-1.042 1.042v8.333l.007.12c.078.705.844 1.14 1.5.812l3.701-1.85 3.701 1.85a1.042 1.042 0 0 0 1.508-.932v-8.333c0-.575-.467-1.042-1.042-1.042Zm-1.042 2.084v5.606l-2.659-1.33-.128-.053a1.042 1.042 0 0 0-.803.053l-2.66 1.329v-5.605h6.25Z"
      fill="#B09573"
    />
    <path
      d="M16.083 4C21.836 4 26.5 8.664 26.5 14.417s-4.664 10.416-10.417 10.416S5.667 20.17 5.667 14.417 10.33 4 16.083 4Z"
      fill="#D6BB99"
    />
    <path
      d="M26.5 14.417c0 5.753-4.664 10.416-10.417 10.416-2.477 0-4.752-.864-6.54-2.308.769.148 1.562.225 2.374.225 6.903 0 12.5-5.596 12.5-12.5 0-.812-.078-1.606-.226-2.374a10.377 10.377 0 0 1 2.309 6.54Z"
      fill="#CAAF8C"
    />
    <path
      d="M16.083 4c1.246 0 2.44.219 3.547.62.401 1.107.62 2.301.62 3.547 0 5.753-4.664 10.416-10.417 10.416-1.245 0-2.44-.218-3.547-.62a10.393 10.393 0 0 1-.62-3.546C5.667 8.664 10.33 4 16.084 4Z"
      fill="#E7CCAA"
    />
    <path
      d="M16.083 4C21.836 4 26.5 8.664 26.5 14.417s-4.664 10.416-10.417 10.416S5.667 20.17 5.667 14.417 10.33 4 16.083 4Zm0 2.083a8.333 8.333 0 1 0 0 16.667 8.333 8.333 0 0 0 0-16.667Z"
      fill="#B09573"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m16.083 17.02-3.061 1.61.585-3.409-2.477-2.414 3.423-.497 1.53-3.102 1.531 3.102 3.423.497-2.477 2.414.585 3.41-3.062-1.61Z"
      fill="#A38866"
    />
    <path
      d="M14.489 8.167c2.57 0-4.656 7.226-4.656 4.655a4.655 4.655 0 0 1 4.655-4.655Z"
      fill="#fff"
    />
  </svg>
);

export default SvgBronzeMedal;
