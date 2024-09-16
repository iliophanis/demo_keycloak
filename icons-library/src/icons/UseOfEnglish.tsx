import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUseOfEnglish = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 40 40"
    fill="none"
    data-testid="svg-element"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 7c.92 0 1.667.643 1.667 1.437v18.675c0 .794-.747 1.437-1.667 1.437H12l-.223-.001c-.813-.006-1.444-.01-1.444.717 0 .73.635.726 1.452.721H32c.92 0 1.667.643 1.667 1.436 0 .793-.747 1.437-1.667 1.437H12c-2.757 0-5-1.217-5-3.594V11.31C7 8.934 9.243 7 12 7h20Zm-1.666 2.873H12c-.918 0-1.666.644-1.666 1.437V25.92A5.743 5.743 0 0 1 12 25.675h18.334V9.873Zm-3.405 6.758c.244-.46-.143-1.012-.76-1.012h-3.334l-.15.012c-.389.06-.684.354-.684.707l.014.129c.07.335.41.589.82.589h1.773l-2.467 3.193-.067.104c-.244.461.143 1.013.76 1.013h3.334l.15-.012c.389-.06.683-.354.683-.707l-.013-.129c-.07-.335-.41-.589-.82-.589h-1.777l2.47-3.193.068-.105Zm-9.217-2.106.068.124 2.5 5.746c.162.372-.056.786-.487.925-.383.124-.805-.011-1.008-.303l-.065-.117-.422-.97h-2.597l-.42.97c-.144.33-.54.515-.929.455l-.145-.035c-.383-.124-.598-.465-.527-.8l.04-.125 2.5-5.746c.251-.577 1.148-.618 1.492-.124Zm-1.386 3.967L17 16.947l.673 1.546h-1.347Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUseOfEnglish;
