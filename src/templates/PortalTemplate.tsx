import { PropsWithChildren } from "react";

function PortalTemplate({ children }: PropsWithChildren) {
  const backdropNode = document.getElementById("backdrop-root");
  return (
    <div>
      {backdropNode ? (
        <div className="w-screen h-screen bg-black opacity-70 z-50 left-0 right-0 fixed">
          <div className="relative">{children}</div>
        </div>
      ) : null}
    </div>
  );
}

export default PortalTemplate;
