import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { planetData } from "../../data/planetData";

type Props = {
  selectedPlanet: string | null;
};

export default function CameraController({
  selectedPlanet,
}: Props) {
  const { camera } = useThree();

  useFrame(() => {
    if (!selectedPlanet) return;

    const planet =
      planetData[
        selectedPlanet as keyof typeof planetData
      ];

    if (!planet?.cameraTarget) return;

    const targetPos = new Vector3(
      planet.cameraTarget.position[0],
      planet.cameraTarget.position[1],
      planet.cameraTarget.position[2]
    );

    camera.position.lerp(
      targetPos,
      0.03
    );

    camera.lookAt(
      planet.cameraTarget.lookAt[0],
      planet.cameraTarget.lookAt[1],
      planet.cameraTarget.lookAt[2]
    );
  });

  return null;
}