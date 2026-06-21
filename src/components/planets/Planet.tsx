import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

type PlanetProps = {
    id: string;
    texture: string;
    orbitRadius: number;
    orbitSpeed: number;
    size: number;
    rotationSpeed: number;
    glowColor: string;

    selectedPlanet: string | null;

    setSelectedPlanet: (
        planet: string
    ) => void;
};

export default function Planet({
    id,
    texture,
    orbitRadius,
    orbitSpeed,
    size,
    rotationSpeed,
    selectedPlanet,
    setSelectedPlanet,
}: PlanetProps) {

    const planetRef = useRef<any>(null);

    const planetTexture =
        useTexture(texture);

    const currentScale =
        useRef(1);

    const heroSize = 10;

    useFrame((state) => {

        const time =
            state.clock.getElapsedTime();

        if (!planetRef.current) return;

        const orbitX =
            Math.cos(time * orbitSpeed)
            * orbitRadius;

        const orbitZ =
            Math.sin(time * orbitSpeed)
            * orbitRadius;

        // HERO PLANET
        if (selectedPlanet === id) {

            planetRef.current.position.x +=
                (-10 -
                    planetRef.current.position.x)
                * 0.05;

            planetRef.current.position.y +=
                (0 -
                    planetRef.current.position.y)
                * 0.05;

            planetRef.current.position.z +=
                (8 -
                    planetRef.current.position.z)
                * 0.05;

        }

        // ALL OTHER PLANETS
        else {

            planetRef.current.position.x +=
                (orbitX -
                    planetRef.current.position.x)
                * 0.05;

            planetRef.current.position.z +=
                (orbitZ -
                    planetRef.current.position.z)
                * 0.05;

        }

        // ROTATION
        planetRef.current.rotation.y +=
            rotationSpeed;

        // SCALE

        let targetScale = 1;

        if (selectedPlanet === id) {

            targetScale =
                heroSize / size;

        }

        else if (
            selectedPlanet !== null
        ) {

            targetScale = 0.4;

        }

        currentScale.current +=
            (
                targetScale -
                currentScale.current
            )
            * 0.05;

        planetRef.current.scale.set(
            currentScale.current,
            currentScale.current,
            currentScale.current
        );

    });

    return (
        <mesh
            ref={planetRef}
            onClick={() =>
                setSelectedPlanet(id)
            }
        >
            <sphereGeometry
                args={[size, 32, 32]}
            />

            <meshStandardMaterial
                map={planetTexture}
                transparent
                opacity={
                    selectedPlanet === null
                        ? 1
                        : selectedPlanet === id
                            ? 1
                            : 0.25
                }
            />
        </mesh>
    );
}