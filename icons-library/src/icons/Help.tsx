import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHelp = ({
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
      d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-.126-4c.538 0 1 .428 1 .986s-.45 1.013-1 1.013c-.524 0-1-.429-1-.987s.451-1.012 1-1.012Zm-.812-1c0-.709.313-.994.813-1.494.5-.5 1.165-.749 1.165-1.254 0-.546-.4-.758-1.165-.758-.757 0-1.177.079-1.177 1.006H9C9 8.784 10.16 8 11.874 8c1.512 0 2.824.776 2.824 2.235 0 1.624-2.014 1.773-2.014 2.765h-1.621Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgHelp;
