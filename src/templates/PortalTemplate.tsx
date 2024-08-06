import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

function PortalTemplate({ children }: PropsWithChildren) {
  const backdropNode = document.getElementById("backdrop-root");
  return (
    <div>
      {backdropNode
        ? createPortal(
            <div className="w-screen h-screen bg-black opacity-70 z-50 left-0 right-0 fixed">
              {children}
            </div>,
            backdropNode
          )
        : null}
    </div>
  );
}

export default PortalTemplate;
