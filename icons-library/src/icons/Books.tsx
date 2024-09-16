import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBooks = ({
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
      d="M14.667 7.997h2.666V6.665h-2.666v1.332ZM23.3 9.496l.363 1.295-2.847.794-.362-1.294 2.846-.795Zm1.695 17.016-.39-1.39 2.846-.794.39 1.388-2.846.796Zm2.097-3.467-2.845.795-3.072-10.972 2.847-.794 3.07 10.971Zm-12.426 3.604h2.666v-1.332h-2.666v1.332Zm0-2.665h2.666V9.33h-2.666v14.655Zm-.668 5.33H18A2 2 0 0 0 20 27.315v-8.758l2.608 9.315c.143.513.479.94.945 1.202a1.973 1.973 0 0 0 1.516.183l4.135-1.156a1.986 1.986 0 0 0 1.201-.943 1.98 1.98 0 0 0 .184-1.517l-4.9-17.508a1.979 1.979 0 0 0-.945-1.203 1.987 1.987 0 0 0-1.517-.183L20 7.65V5.997A2 2 0 0 0 18.001 4H14A2 2 0 0 0 12 5.997v21.32a2 2 0 0 0 1.999 1.996ZM5.333 10.66H8V9.33H5.333v1.332Zm0 15.988H8v-1.332H5.333v1.332Zm0-2.665H8v-11.99H5.333v11.99Zm-.668 5.33h4.003a2 2 0 0 0 1.999-1.998V8.662a2 2 0 0 0-1.999-1.997H4.665a2 2 0 0 0-1.998 1.997v18.654a2 2 0 0 0 1.998 1.997Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBooks;
