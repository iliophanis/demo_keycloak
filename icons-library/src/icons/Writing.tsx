import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWriting = ({
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
      d="M31.297 8.857a1.556 1.556 0 0 0-1.549-2.692l-2.785 1.39h-13.63l-.204.014a1.556 1.556 0 0 0-.896.443l-1.522.912-.596-1.752-.055-.173a1.556 1.556 0 0 0-2.96.94l.888 2.619-3.532 2.12-.135.154c-.207.27-.321.602-.321.946v10.889l.013.204c.045.337.2.653.443.896l2.953 2.957.022.028.12.137.695.705a4.645 4.645 0 0 0 6.335.262l.308 1.033L17.993 34c-.007-3.111-.007-4.667 0-4.667l-.748-2.146a4.661 4.661 0 0 0 4.11-1.296c.46-.459.774-.853.945-1.224h2.535c1.958 0 3.794-.921 4.966-2.472l.211-.299 1.499-2.246 2.74-1.369a1.556 1.556 0 0 0 .767-1.92l-.072-.167a1.556 1.556 0 0 0-1.92-.767l-.167.071-3.11 1.556c-.182.09-.344.216-.477.368l-.122.16-1.726 2.588a3.11 3.11 0 0 1-2.33 1.375l-.259.01H13.333a1.556 1.556 0 0 1-.181-3.1l.18-.01H18c.18 0 .36-.032.53-.093l.165-.072 3.111-1.555a1.556 1.556 0 0 0-1.224-2.855l-.167.072-2.784 1.392h-4.298l-.274.008a4.87 4.87 0 0 0-.164.012L11.722 11.9l2.255-1.233h13.356l.18-.01c.18-.021.354-.073.516-.154l3.11-1.556.158-.09ZM7.111 14.422l1.846-1.01 1.107 3.258a4.652 4.652 0 0 0-1.39 3.056L8.666 20a4.669 4.669 0 0 0 3.184 4.426l.05.053.738.739c.564.564.604 1.454.121 2.064l-.12.136a1.537 1.537 0 0 1-2.044.112l-.133-.12-.54-.55a1.567 1.567 0 0 0-.155-.182L7.11 24.02v-9.599Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWriting;
