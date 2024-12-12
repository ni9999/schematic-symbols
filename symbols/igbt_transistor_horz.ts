import svgJson from "assets/generated/igbt_transistor.json"
import { modifySymbol } from "drawing/modify-symbol/modify-symbol"

export default modifySymbol(svgJson)
  .changeTextAnchor("{VAL}", "middle_right")
  .labelPort("left1", ["3"])
  .labelPort("top1", ["2"])
  .labelPort("bottom1", ["1"])
  .changeTextAnchor("{REF}", "middle_right")
  .build()
