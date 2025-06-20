import { useCallback, useEffect, useState } from "react";
import "./ContextMenu.css";
import LinkIcon from "../../../../components/icons/TextEditor/LinkIcon";
import ParagraphIcon from "../../../../components/icons/TextEditor/ParagraphIcon";
import PasteElementIcon from "../../../../components/icons/TextEditor/PasteElementIcon";
import CutIcon from "../../../../components/icons/TextEditor/CutIcon";
import CopyIcon from "../../../../components/icons/TextEditor/CopyIcon";
import PasteIcon from "../../../../components/icons/TextEditor/PasteIcon";
import SelectIcon from "../../../../components/icons/TextEditor/SelectIcon";
import ArrowRight from "../../../../components/icons/ArrowRight";
import {
  $getSelection,
  $isRangeSelection,
  COPY_COMMAND,
  CUT_COMMAND,
  SELECT_ALL_COMMAND,
} from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { getSelectedNode } from "../../../../utils/getSelectedNode";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import { INSERT_IMAGE_COMMAND } from "../ImagesPlugin/ImagesPlugin";

export default function ContextMenu({
  contextMenu,
  contextMenuRef,
  setIsLinkEditMode,
  setContextMenuVisible,
}: {
  contextMenu: { x: number; y: number } | null;
  contextMenuRef: React.RefObject<HTMLDivElement | null>;
  setIsLinkEditMode: (isLinkEditMode: boolean) => void;
  setContextMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [positionY, setPositionY] = useState(contextMenu?.y);
  const [editor] = useLexicalComposerContext();
  const [isSelectedText, setIsSelectedText] = useState(false);
  const [isLink, setIsLink] = useState(false);

  const insertLink = useCallback(() => {
    if (!isLink) {
      setIsLinkEditMode(true);
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, "https://");
    } else {
      setIsLinkEditMode(false);
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink, setIsLinkEditMode]);

  useEffect(() => {
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const node = getSelectedNode(selection);
        const parent = node.getParent();
        setIsLink($isLinkNode(parent) || $isLinkNode(node));
      }
      if ($isRangeSelection(selection)) {
        const rawTextContent = selection.getTextContent().replace(/\n/g, "");
        setIsSelectedText(rawTextContent.length > 0);
      }
    });
  }, [editor]);

  useEffect(() => {
    if (
      !contextMenu ||
      !positionY ||
      !contextMenuRef.current?.parentElement?.clientHeight
    )
      return;

    if (
      contextMenu.y + 200 >
      contextMenuRef.current?.parentElement?.clientHeight
    ) {
      setPositionY(contextMenu.y - 240);
    } else {
      setPositionY(contextMenu.y + 12);
    }
  }, [contextMenu, contextMenu?.y, positionY, contextMenuRef]);

  return (
    <div
      className="context-menu"
      style={{
        left: contextMenu?.x,
        top: positionY,
        position: "fixed",
      }}
      ref={contextMenuRef}
    >
      <button
        className="context-menu-item"
        disabled={!isSelectedText}
        onClick={insertLink}
      >
        <span className="context-menu-item-icon">
          <LinkIcon />
        </span>
        Вставить ссылку
      </button>
      <div className="context-menu-divider" />
      <button className="context-menu-item">
        <span className="context-menu-item-icon">
          <ParagraphIcon />
        </span>
        <span style={{ flex: 1, textAlign: "left" }}>Абзац</span>
        <span className="context-menu-item-icon">
          <ArrowRight />
        </span>
      </button>
      <button className="context-menu-item">
        <span className="context-menu-item-icon">
          <PasteElementIcon />
        </span>
        <span style={{ flex: 1, textAlign: "left" }}>Вставка</span>
        <span className="context-menu-item-icon">
          <ArrowRight />
        </span>
      </button>
      <div className="context-menu-divider" />
      <button
        className="context-menu-item"
        disabled={!isSelectedText}
        onClick={() => {
          editor.dispatchCommand(CUT_COMMAND, null);
          setContextMenuVisible(false);
        }}
      >
        <span className="context-menu-item-icon">
          <CutIcon />
        </span>
        Вырезать
      </button>
      <button
        className="context-menu-item"
        disabled={!isSelectedText}
        onClick={() => {
          editor.dispatchCommand(COPY_COMMAND, null);
          setContextMenuVisible(false);
        }}
      >
        <span className="context-menu-item-icon">
          <CopyIcon />
        </span>
        Копировать
      </button>
      <button
        className="context-menu-item"
        onClick={async () => {
          try {
            const clipboardItems = await navigator.clipboard.read();
            let hasImage = false;

            for (const clipboardItem of clipboardItems) {
              for (const type of clipboardItem.types) {
                if (type.startsWith("image/")) {
                  hasImage = true;
                  const blob = await clipboardItem.getType(type);
                  const reader = new FileReader();
                  reader.onload = function () {
                    if (typeof reader.result === "string") {
                      editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
                        altText: "Pasted image",
                        src: reader.result,
                      });
                    }
                  };
                  reader.readAsDataURL(blob);
                  break;
                }
              }
              if (hasImage) break;
            }

            if (!hasImage) {
              const text = await navigator.clipboard.readText();
              editor.update(() => {
                const selection = $getSelection();
                if ($isRangeSelection(selection)) {
                  selection.insertText(text);
                }
              });
            }

            setContextMenuVisible(false);
          } catch (error) {
            console.error("Ошибка вставки :(", error);
          }
        }}
      >
        <span className="context-menu-item-icon">
          <PasteIcon />
        </span>
        Вставить
      </button>
      <button
        className="context-menu-item"
        onClick={() => {
          const fakeEvent = new KeyboardEvent("keydown", {
            key: "a",
            ctrlKey: true,
          });
          editor.dispatchCommand(SELECT_ALL_COMMAND, fakeEvent);
          setContextMenuVisible(false);
        }}
      >
        <span className="context-menu-item-icon">
          <SelectIcon />
        </span>
        Выделить В С Ё
      </button>
    </div>
  );
}
