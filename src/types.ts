export type Tel = string | number
export type Highlight = string | number | undefined | null
export type Separator = string | number | undefined
export type Separat = boolean | undefined // division
export type HighlightList = HighlightListItem[]
export type HighlightListItem = {
  num: string
  isHighlight: boolean
}
export type Options = {
  tel: Tel
  highlight?: Highlight
  separator?: Separator
  separat?: Separat
}
