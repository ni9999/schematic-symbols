import svgJson from "assets/generated/crystal_4pin.json"
import { modifySymbol } from "drawing/modify-symbol/modify-symbol"

export default modifySymbol(svgJson)
  .labelPort("top1", ["gnd1"])
  .labelPort("bottom1", ["gnd2"])
  .labelPort("left1", ["1"])
  .labelPort("right1", ["3"])
  .changeTextAnchor("{REF}", "bottom_right")
  .changeTextAnchor("{VAL}", "top_left")
  .build()
