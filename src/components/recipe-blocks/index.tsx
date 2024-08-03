import { components } from "~/lib/api/v1/openapi";
import { SubtitleBlock } from "./subtitle-block";
import { TextBlock } from "./text-block";
import { IndentedBlock } from "./indented-block";
import { ImageBlock } from "./image-block";
import { ListBlock } from "./list-block";
import { TitleBlock } from "./title-block";

export const getComponent = (
  blockType: components["schemas"]["BlockType"]
): React.FC<never> => {
  switch (blockType) {
    case "image":
      return ImageBlock;
    case "title":
      return TitleBlock;
    case "subtitle":
      return SubtitleBlock;
    case "text":
      return TextBlock;
    case "list":
      return ListBlock;
    case "indented_block":
      return IndentedBlock;
    default:
      return () => null;
  }
};
