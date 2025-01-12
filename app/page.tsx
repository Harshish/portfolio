import Loading from "@/components/Loading";
import Overlay from "@/components/Overlay";
import Scene from "@/components/Scene";
import { ControlsContextProvider } from "@/store/controls";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <ControlsContextProvider>
        <div className="h-screen w-screen">
          <Scene />
          <Overlay />
        </div>
      </ControlsContextProvider>
    </Suspense>
  );
}
