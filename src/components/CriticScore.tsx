import { Badge } from "@chakra-ui/react";
interface Prop {
  metascore: number;
}

const CriticScore = ({ metascore }: Prop) => {
  const criticScore =
    metascore > 75 ? (
      <Badge colorPalette="green">{metascore}</Badge>
    ) : metascore >= 60 ? (
      <Badge colorPalette="yellow">{metascore}</Badge>
    ) : (
      <Badge colorPalette="">{metascore}</Badge>
    );

  return criticScore;
};

export default CriticScore;
