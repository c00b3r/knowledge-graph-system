import ListIcon from "../../../../../components/icons/ContextMenu/ListIcon";
import NumberedListIcon from "../../../../../components/icons/ContextMenu/NumberedListIcon";
import CheckListIcon from "../../../../../components/icons/ContextMenu/CheckListIcon";
import H1Icon from "../../../../../components/icons/ContextMenu/H1Icon";
import H2Icon from "../../../../../components/icons/ContextMenu/H2Icon";
import H3Icon from "../../../../../components/icons/ContextMenu/H3Icon";
import RemoveHeaderIcon from "../../../../../components/icons/ContextMenu/RemoveHeaderIcon";
import { useEffect, useRef, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  INSERT_CHECK_LIST_COMMAND,
} from "@lexical/list";
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
} from "lexical";
import { $createHeadingNode, $isHeadingNode } from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";

function ParagraphMenu() {
  const paragraphMenuRef = useRef<HTMLDivElement>(null);
  const [positionY, setPositionY] = useState(0);
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const menu = paragraphMenuRef.current;
    const container = menu?.parentElement?.parentElement?.parentElement;

    if (menu && container) {
      const menuRect = menu.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const spaceBelow = containerRect.bottom - menuRect.bottom;

      if (Number(spaceBelow.toFixed(0)) <= 0) {
        setPositionY((prev) => prev + spaceBelow - 40);
      } else {
        setPositionY(0);
      }
    }
  }, []);

  const createList = (listType: "bullet" | "number" | "check") => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const textContent = selection.getTextContent();

        if (textContent.trim() === "") {
          const command =
            listType === "bullet"
              ? INSERT_UNORDERED_LIST_COMMAND
              : listType === "number"
              ? INSERT_ORDERED_LIST_COMMAND
              : INSERT_CHECK_LIST_COMMAND;
          editor.dispatchCommand(command, undefined);
        } else {
          const command =
            listType === "bullet"
              ? INSERT_UNORDERED_LIST_COMMAND
              : listType === "number"
              ? INSERT_ORDERED_LIST_COMMAND
              : INSERT_CHECK_LIST_COMMAND;
          editor.dispatchCommand(command, undefined);
        }
      }
    });
  };

  const createHeading = (level: "h1" | "h2" | "h3") => {
    editor.update(() => {
      const selection = $getSelection();
      if (selection) {
        const nodes = selection.getNodes();
        const firstNode = nodes[0];

        if ($isHeadingNode(firstNode) && firstNode.getTag() === level) {
          $setBlocksType(selection, () => $createParagraphNode());
        } else {
          $setBlocksType(selection, () => $createHeadingNode(level));
        }
      }
    });
  };

  const removeHeading = () => {
    editor.update(() => {
      const selection = $getSelection();
      if (selection) {
        const nodes = selection.getNodes();

        const hasHeading = nodes.some((node) => {
          const targetNode = $isTextNode(node) ? node.getParent() : node;
          return $isHeadingNode(targetNode);
        });

        if (hasHeading) {
          $setBlocksType(selection, () => $createParagraphNode());
        }
      }
    });
  };

  return (
    <div
      className="context-menu"
      style={{
        position: "absolute",
        left: "228px",
        top: positionY,
        zIndex: 1001,
      }}
      ref={paragraphMenuRef}
    >
      <button
        className="context-menu-item"
        onClick={() => createList("bullet")}
      >
        <span className="context-menu-item-icon">
          <ListIcon />
        </span>
        Список
      </button>
      <button
        className="context-menu-item"
        onClick={() => createList("number")}
      >
        <span className="context-menu-item-icon">
          <NumberedListIcon />
        </span>
        Нумерованный список
      </button>
      <button className="context-menu-item" onClick={() => createList("check")}>
        <span className="context-menu-item-icon">
          <CheckListIcon />
        </span>
        Список задач
      </button>
      <div className="context-menu-divider" />
      <button className="context-menu-item" onClick={() => createHeading("h1")}>
        <span className="context-menu-item-icon">
          <H1Icon />
        </span>
        Заголовок уровня 1
      </button>
      <button className="context-menu-item" onClick={() => createHeading("h2")}>
        <span className="context-menu-item-icon">
          <H2Icon />
        </span>
        Заголовок уровня 2
      </button>
      <button className="context-menu-item" onClick={() => createHeading("h3")}>
        <span className="context-menu-item-icon">
          <H3Icon />
        </span>
        Заголовок уровня 3
      </button>
      <button className="context-menu-item" onClick={() => removeHeading()}>
        <span className="context-menu-item-icon">
          <RemoveHeaderIcon />
        </span>
        Убрать заголовок
      </button>
    </div>
  );
}

export default ParagraphMenu;
