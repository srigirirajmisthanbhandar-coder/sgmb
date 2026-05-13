"use client";

import React, { useCallback, useEffect, useRef } from "react";

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  maxOpacity?: number;
  className?: string;
}

export default function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(255, 255, 255)",
  maxOpacity = 0.15,
  className = "",
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const gridStateRef = useRef<{
    dpr: number;
    cols: number;
    rows: number;
    opacities: Float32Array;
    rgb: [number, number, number];
  } | null>(null);

  const parseColor = useCallback(
    (colorStr: string): [number, number, number] => {
      const match = colorStr.match(/(\d+)/g);
      if (match && match.length >= 3) {
        return [parseInt(match[0]), parseInt(match[1]), parseInt(match[2])];
      }
      return [255, 255, 255];
    },
    []
  );

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, w: number, h: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      const cols = Math.ceil(w / (squareSize + gridGap));
      const rows = Math.ceil(h / (squareSize + gridGap));
      const total = cols * rows;

      const opacities = new Float32Array(total);
      for (let i = 0; i < total; i++) {
        opacities[i] = Math.random() * maxOpacity;
      }

      const rgb = parseColor(color);

      gridStateRef.current = { dpr, cols, rows, opacities, rgb };
    },
    [squareSize, gridGap, maxOpacity, color, parseColor]
  );

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let lastTime = 0;
    let isVisible = true;

    const handleResize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      setupCanvas(canvas, width, height);
    };

    // Pause animation when tab is hidden
    const handleVisibility = () => {
      isVisible = document.visibilityState === "visible";
    };

    // Pause animation when component is out of viewport
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting && document.visibilityState === "visible";
      },
      { threshold: 0 }
    );

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          setupCanvas(canvas, width, height);
        }
      }
    });

    // Initial setup
    handleResize();
    resizeObserver.observe(container);
    intersectionObserver.observe(container);
    document.addEventListener("visibilitychange", handleVisibility);

    const draw = (time: number) => {
      animationRef.current = requestAnimationFrame(draw);

      if (!isVisible) return;
      if (time - lastTime < 66) return; // ~15fps
      lastTime = time;

      const state = gridStateRef.current;
      if (!state) return;

      const { dpr, cols, rows, opacities, rgb } = state;
      const [r, g, b] = rgb;
      const step = squareSize + gridGap;
      const size = squareSize * dpr;
      const stepDpr = step * dpr;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < cols; i++) {
        const x = i * stepDpr;
        for (let j = 0; j < rows; j++) {
          const idx = i * rows + j;
          if (Math.random() < flickerChance) {
            opacities[idx] = Math.random() * maxOpacity;
          }
          ctx.fillStyle = `rgba(${r},${g},${b},${opacities[idx]})`;
          ctx.fillRect(x, j * stepDpr, size, size);
        }
      }
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [squareSize, gridGap, flickerChance, maxOpacity, color, setupCanvas]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
