import { path, text, defineSymbol } from "../drawing"

export const boxresistor = defineSymbol({
  primitives: [
    path({
      points: [
        { x: 0, y: 0 },
        { x: 0.2, y: 0 },
        { x: 0.2, y: -0.3 },
        { x: 0.8, y: -0.3 },
        { x: 0.8, y: 0.3 },
        { x: 0.2, y: 0.3 },
        { x: 0.2, y: 0 },
        { x: 1, y: 0 },
      ],
      color: "primary",
    }),
    text("{REF}", { x: 0.5, y: -0.4, anchor: "middle_bottom" }),
  ],
  center: { x: 0.5, y: 0 },
  size: { width: 1, height: 0.6 },
})