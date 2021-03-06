import CodeTwoTone from "@material-ui/icons/CodeTwoTone"
import FormatBold from "@material-ui/icons/FormatBold"
import FormatItalicTwoTone from "@material-ui/icons/FormatItalicTwoTone"
import FormatListBulleted from "@material-ui/icons/FormatListBulleted"
import FormatListNumbered from "@material-ui/icons/FormatListNumbered"
import FormatQuote from "@material-ui/icons/FormatQuote"
import FormatUnderlinedTwoTone from "@material-ui/icons/FormatUnderlinedTwoTone"
import React, { FC } from "react"
import { Editor } from "slate"
import {
  BlockButton,
  EHtmlBlock,
  EHtmlMark,
  ImgButton,
  insertBr,
  LinkButton,
  MarkButton,
  PictureButton,
  RedoButton,
  ToolbarButton,
  UndoButton,
} from "../src"
import { ButtonLinkButton } from "./button-link"
import { CustomImgFormDialog } from "./custom-img"
import { CustomLinkFormDialog } from "./custom-link"

export const CustomToolbar: FC<JSX.IntrinsicElements["div"] & { editor: Editor }> = ({
  editor,
  ...rest
}) => {
  return (
    <div {...rest}>
      <UndoButton />
      <RedoButton />

      <MarkButton tooltipTitle="Bold" type={EHtmlMark.b} children={<FormatBold />} />
      <MarkButton tooltipTitle="Strong" type={EHtmlMark.strong} children={<strong>S</strong>} />
      <MarkButton
        tooltipTitle="Code (monospace)"
        type={EHtmlMark.code}
        children={<CodeTwoTone />}
      />
      <MarkButton
        tooltipTitle="Italic (emphasis)"
        type={EHtmlMark.em}
        children={<FormatItalicTwoTone />}
      />
      <MarkButton
        tooltipTitle="Code (monospace)"
        type={EHtmlMark.u}
        children={<FormatUnderlinedTwoTone />}
      />
      <LinkButton />
      <LinkButton
        LinkFormDialog={CustomLinkFormDialog}
        tooltipTitle="Custom Link"
        children={"CL"}
      />
      <ButtonLinkButton />

      <ImgButton ImgFormDialog={CustomImgFormDialog} />
      <PictureButton />

      <BlockButton
        tooltipTitle="Heading 1"
        type={EHtmlBlock.h1}
        children={EHtmlBlock.h1.toUpperCase()}
      />
      <BlockButton
        tooltipTitle="Heading 2"
        type={EHtmlBlock.h2}
        children={EHtmlBlock.h2.toUpperCase()}
      />
      <BlockButton
        tooltipTitle="Heading 3"
        type={EHtmlBlock.h3}
        children={EHtmlBlock.h3.toUpperCase()}
      />
      <BlockButton
        tooltipTitle="Heading 4"
        type={EHtmlBlock.h4}
        children={EHtmlBlock.h4.toUpperCase()}
      />
      <BlockButton
        tooltipTitle="Blockquote"
        type={EHtmlBlock.blockquote}
        children={<FormatQuote />}
      />
      <BlockButton
        tooltipTitle="Numbered (ordered) list"
        type={EHtmlBlock.ol}
        children={<FormatListNumbered />}
      />
      <BlockButton
        tooltipTitle="Bulleted (unordered) list"
        type={EHtmlBlock.ul}
        children={<FormatListBulleted />}
      />
      <ToolbarButton
        tooltipTitle="Line break"
        color="default"
        variant="text"
        onClick={() => {
          insertBr(editor)
        }}
        children={"BR"}
      />
    </div>
  )
}
CustomToolbar.displayName = "CustomToolbar"
