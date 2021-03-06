import React, { HTMLAttributes } from "react"
import { Editor } from "slate"
import {
  formatVoidToString,
  isSlateTypeElement,
  TSlatePlugin,
  TSlateTypeElement,
  getAttributes,
} from "slate-pen"

export const BR_TAG = "br"
export type THtmlBrSlateElement = TSlateTypeElement & {
  attributes: HTMLAttributes<any>
}

export const createBrPlugin = (): TSlatePlugin<THtmlBrSlateElement> => ({
  toHtml: slateElement => {
    if (isHtmlBrElement(slateElement)) {
      return formatVoidToString(slateElement.type, slateElement.attributes)
    }
    return null
  },
  fromHtmlElement: el => {
    const tag = el.nodeName.toLowerCase()
    const attributes = getAttributes(el as Element)
    if (tag === BR_TAG) {
      return { text: "\n", type: BR_TAG, attributes }
    }
    return null
  },
  extendEditor: editor => {
    const { isVoid } = editor
    editor.isVoid = element => {
      return isSlateTypeElement(element) && element.type === BR_TAG ? true : isVoid(element)
    }
  },
  RenderElement: props => {
    if (isHtmlBrElement(props.element)) {
      return <br {...props.attributes} />
    }
    return null
  },
})

export const insertBr = (editor: Editor) => editor.insertText("\n")
export const isHtmlBrElement = (node: any): node is THtmlBrSlateElement => {
  return isSlateTypeElement(node) && node.type === BR_TAG
}
