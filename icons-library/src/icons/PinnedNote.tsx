import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPinnedNote = ({
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
      d="M15.26 3c.3 0 .585.064.841.177L14.241 5H4.04v14h11.22v-1l2.04-2v3c0 1.105-.913 2-2.04 2H4.04C2.913 21 2 20.105 2 19V5c0-1.105.913-2 2.04-2h11.22ZM8.12 15v2H7.1a1.01 1.01 0 0 1-1.02-1c0-.552.457-1 1.02-1h1.02ZM18.339 4.3l3.755 3.682c.408.4.408 1.05 0 1.451L14.681 16.7c-.196.192-.462.3-.74.3h-3.755c-.578 0-1.047-.46-1.047-1.027v-3.68c0-.273.11-.534.306-.727L16.857 4.3c.409-.401 1.072-.401 1.48 0h.002Zm-.784 2.2-6.375 6.25V15h2.295l6.375-6.25-2.295-2.25ZM8.12 11v2H7.1a1.01 1.01 0 0 1-1.02-1c0-.552.457-1 1.02-1h1.02Zm4.08-4-2.04 2H7.1a1.01 1.01 0 0 1-1.02-1c0-.552.457-1 1.02-1h5.1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPinnedNote;
