import {
  ChatBubbleBottomCenterTextIcon, ClipboardDocumentListIcon
} from "@heroicons/react/24/solid";
import { GiCook } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";

export const featuresData = [
  {
    color: "gray",
    title: "Log",
    icon: GiNotebook,
    description:
      "Seamlessly record your ingredients or customized meal recommendations that suit your taste buds",
  },
  {
    color: "gray",
    title: "Create",
    icon: GiCook,
    description:
      "Description: Utilize our user-friendly cooking tool to whip up delectable dishes that cater to your culinary desires.",
  },
  {
    color: "gray",
    title: "Enjoy",
    icon: GiKnifeFork,
    description:
      "Savor the culinary delights prepared from your logged ingredients, transforming every meal into a delightful experience.",
  },
];

export default featuresData;
