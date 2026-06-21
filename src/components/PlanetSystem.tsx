import Planet from "./planets/Planet";

import {
  planetData,
} from "../data/planetData";

type Props = {
  selectedPlanet: string | null;
  setSelectedPlanet: (
    planet: string
  ) => void;
};

export default function PlanetSystem({
  selectedPlanet,
  setSelectedPlanet,
}: Props) {
  return (
    <>
      {Object.values(
        planetData
      ).map((planet) => (
        <Planet
          key={planet.id}
          id={planet.id}
          texture={planet.texture}
          orbitRadius={
            planet.orbitRadius
          }
          orbitSpeed={
            planet.orbitSpeed
          }
          size={planet.size}
          rotationSpeed={
            planet.rotationSpeed
          }
          selectedPlanet={
            selectedPlanet
          }
          setSelectedPlanet={
            setSelectedPlanet
          }
          glowColor={planet.glowColor}
        />
      ))}
    </>
  );
}