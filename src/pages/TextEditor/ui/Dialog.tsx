import type { JSX } from "react";

import "./Dialog.css";

import { ReactNode } from "react";

type Props = {
  "data-test-id"?: string;
  children: ReactNode;
};

export function DialogButtonsList({ children }: Props) {
  return <div className="DialogButtonsList">{children}</div>;
}

export function DialogActions({
  "data-test-id": dataTestId,
  children,
}: Props): JSX.Element {
  return (
    <div className="DialogActions" data-test-id={dataTestId}>
      {children}
    </div>
  );
}
