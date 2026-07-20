"use client";

import { useEffect } from "react";

/**
 * Site-wide image download deterrents.
 *
 * Blocks the casual save paths — right-click "Save image as…",
 * drag-to-desktop, and mobile long-press callout — for <img> elements
 * and elements painted with a CSS background image.
 *
 * This is a deterrent only. It cannot stop screenshots, the DevTools
 * Network tab, or a "view source" download. Anything a browser renders
 * has already been delivered to the visitor's device.
 */
export default function ImageProtect() {
  useEffect(() => {
    const isImageTarget = (el: EventTarget | null): boolean => {
      if (!(el instanceof Element)) return false;
      // Direct <img> (covers next/image output too)
      if (el.closest("img, picture")) return true;
      // Elements using a CSS background-image
      const node = el as HTMLElement;
      const bg = getComputedStyle(node).backgroundImage;
      return !!bg && bg !== "none" && bg.includes("url(");
    };

    const onContextMenu = (e: MouseEvent) => {
      if (isImageTarget(e.target)) e.preventDefault();
    };
    const onDragStart = (e: DragEvent) => {
      if (e.target instanceof Element && e.target.closest("img, picture")) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return null;
}
