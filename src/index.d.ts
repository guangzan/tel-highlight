type Tel = string | number
type Highlight = string | number | undefined | null
type Separator = string | number | undefined
type Separat = boolean | undefined // division
type HighlightList = HighlightListItem[]
type HighlightListItem = {
  num: string
  isHighlight: boolean
}
type Options = {
  tel: Tel
  highlight?: Highlight
  separator?: Separator
  separat?: Separat
}
export declare function telHighlight(options: Options): HighlightList
