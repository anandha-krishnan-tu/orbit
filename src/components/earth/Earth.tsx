import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Earth(){

    const earthTexture = useTexture('/earth.jpg');
    const moonTexture = useTexture('/moon.jpg');
    const groupRef = useRef<any>(null);
    const moonRef = useRef<any>(null);
    const earthRef = useRef<any>(null);

    useFrame(({clock})=>{
        const t = clock.getElapsedTime();
        const radius = 3;
        const speed = 0.5;

        groupRef.current.position.x = Math.cos(t*speed) * radius;
        groupRef.current.position.z = Math.sin(t*speed) * radius;

        moonRef.current.position.x = Math.cos(t*2) * 1;
        moonRef.current.position.z = Math.sin(t*2) * 1;

        earthRef.current.rotation.y += 0.03;
        moonRef.current.rotation.y += 0.04;
    })

    return(
        <group position={[3,0,3]} ref={groupRef}>
            {/* earth */}
            <mesh ref={earthRef}>
                <sphereGeometry args={[0.6,32,32]}/>
                <meshBasicMaterial map={earthTexture}/>
            </mesh>

            {/* moon */}
            <mesh
                position={[1.2,0,0]}
                ref={moonRef}
            >
                <sphereGeometry args={[.2,32,32]}/>
                <meshBasicMaterial map={moonTexture}/>
            </mesh>
        </group>
    )
}