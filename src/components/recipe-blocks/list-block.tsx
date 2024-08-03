import pluralize from "pluralize";
import { twMerge } from "tailwind-merge";
import { components } from "~/lib/api/v1/openapi";

const IngredientListItem = ({
  text,
  quantity,
  unit,
  note,
  list_type,
}: components["schemas"]["IngredientListItem"] & {
  list_type: components["schemas"]["ListType"];
}) => (
  <div className="flex gap-2">
    {list_type === "checklist" && <input type="checkbox" />}
    {quantity && <span>{quantity}</span>}
    {unit && <span>{pluralize(unit, quantity ?? 1)}</span>}
    <span>{text}</span>
    {note && <span>({note})</span>}
  </div>
);

export const ListBlock = ({
  list_type,
  header,
  items,
}: components["schemas"]["ListBlock"]) => (
  <>
    {header && <h4>{header}</h4>}
    <ul
      className={twMerge(
        "rtl:pr-2 ltr:pl-2",
        list_type === "numbered" && "list-decimal",
        list_type === "bulleted" && "list-disc",
        list_type === "checklist" && "list-none"
      )}
    >
      {items.map((item, index) => (
        <li key={`${typeof item === "string" ? item : item.text}-${index}`}>
          {typeof item === "string" ? (
            item
          ) : (
            <IngredientListItem {...item} list_type={list_type} />
          )}
        </li>
      ))}
    </ul>
  </>
);
