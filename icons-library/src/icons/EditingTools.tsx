import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEditingTools = ({
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
      d="M6.434 22.7 23.699 5.433c.401-.401.401-1.051 0-1.452L20.02.3C19.616-.1 18.966-.1 18.565.3l-6.425 6.425L5.707.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 0 1.414l6.433 6.434-5.425 5.425c-.193.193-.301.454-.301.726v3.681C1 22.54 1.46 23 2.027 23h3.68c.273 0 .534-.108.727-.3ZM8.14 10.726l2.586-2.586L9.5 6.915l-.793.792a1 1 0 0 1-1.497-1.32l.083-.094.792-.793-.585-.585-.793.792a1 1 0 0 1-1.497-1.32l.083-.094.792-.793L5 2.414 2.413 5l5.727 5.727Zm-5.087 7.99L16.178 5.593l2.23 2.23L5.281 20.947H3.053v-2.23Zm16.769-12.31-2.23-2.229 1.7-1.7 2.23 2.23-1.7 1.7Zm-2.743 8.087 1.414-1.415 5.214 5.214a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-5.214-5.214 1.414-1.413 4.506 4.506L21.585 19 20.5 17.915l-.793.792a1 1 0 0 1-1.497-1.32l.083-.094.793-.793-.586-.585-.793.792a1 1 0 0 1-1.497-1.32l.083-.094.793-.793-.007-.006Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEditingTools;
