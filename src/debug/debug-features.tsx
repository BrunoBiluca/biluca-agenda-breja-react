import {
  ArrowDownLeftIcon,
  ArrowsOutSimpleIcon,
  BugIcon,
  DotsSixVerticalIcon,
  MinusIcon,
  XIcon,
} from "@phosphor-icons/react";
import { FloatingPanel } from "@ark-ui/react/floating-panel";
import { Portal } from "@ark-ui/react/portal";
import { useState } from "react";

export function DebugFeatures() {
  const [size, setSize] = useState({ width: 320, height: 240 });

  return (
    <FloatingPanel.Root
      getAnchorPosition={({ triggerRect }) => {
        if (!triggerRect) return { x: 0, y: 0 };
        return {
          x: triggerRect.x - size.width + triggerRect.width,
          y: triggerRect.y - size.height - 32,
        };
      }}
      size={size}
      onSizeChange={(e) => setSize(e.size)}
    >
      <FloatingPanel.Trigger className="absolute right-4 bottom-4 flex flex-col items-end md:right-8 md:bottom-8">
        <div className="bg-orange-base group flex h-12 cursor-pointer items-center rounded-full px-3 text-black">
          <BugIcon className="h-6 w-6" />
          <span className="max-w-0 overflow-hidden transition-all duration-300 ease-linear group-hover:max-w-xs">
            <span className="pl-2">Debug</span>
          </span>
        </div>
      </FloatingPanel.Trigger>
      <Portal>
        <FloatingPanel.Positioner className="z-10">
          <FloatingPanel.Content className="rounded-sm border bg-gray-100 outline-0">
            <FloatingPanel.DragTrigger>
              <FloatingPanel.Header className="flex cursor-grab items-center justify-between rounded-tl-sm rounded-tr-sm border-b border-b-gray-500 bg-gray-200 px-2 py-1 active:cursor-grabbing">
                <FloatingPanel.Title className="flex items-center gap-2">
                  <DotsSixVerticalIcon /> Debug
                </FloatingPanel.Title>
                <FloatingPanel.Control className="flex items-center gap-1.5">
                  <FloatingPanel.StageTrigger
                    stage="minimized"
                    className="bg-gray-500 p-1 text-white hover:bg-gray-200 hover:text-black"
                  >
                    <MinusIcon />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger
                    stage="maximized"
                    className="bg-gray-500 p-1 text-white hover:bg-gray-200 hover:text-black"
                  >
                    <ArrowsOutSimpleIcon />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger
                    stage="default"
                    className="bg-gray-500 p-1 text-white hover:bg-gray-200 hover:text-black"
                  >
                    <ArrowDownLeftIcon />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.CloseTrigger className="bg-gray-500 p-1 text-white hover:bg-gray-200 hover:text-black">
                    <XIcon />
                  </FloatingPanel.CloseTrigger>
                </FloatingPanel.Control>
              </FloatingPanel.Header>
            </FloatingPanel.DragTrigger>
            <FloatingPanel.Body className="px-2 py-1">
              <p>Some content</p>
            </FloatingPanel.Body>

            <FloatingPanel.ResizeTrigger axis="n" />
            <FloatingPanel.ResizeTrigger axis="e" />
            <FloatingPanel.ResizeTrigger axis="w" />
            <FloatingPanel.ResizeTrigger axis="s" />
            <FloatingPanel.ResizeTrigger axis="ne" />
            <FloatingPanel.ResizeTrigger axis="se" />
            <FloatingPanel.ResizeTrigger axis="sw" />
            <FloatingPanel.ResizeTrigger axis="nw" />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  );
}
