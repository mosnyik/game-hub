import trophy from "../assets/thumbs_up.webp";
import thumbs_up from "../assets/thumbs_up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbs_up, alt: "recommended" },
    5: { src: trophy, alt: "exceptional" },
  };
  return <Image {...emojiMap[rating]} boxSize={"25px"}  marginTop={1}/>;
};

export default Emoji;
