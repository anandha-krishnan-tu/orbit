import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Sun() {

    const sunTexture = useTexture('/sun.jpg');
    const sunRef = useRef<any>(null);

    useFrame(()=>{
        sunRef.current.rotation.y += 0.01;
    })

    return (
        <mesh
            ref={sunRef}
            position={[0,0,0]}
        >
            <sphereGeometry args={[1,32,32]}/>
            <meshBasicMaterial map={sunTexture}/>
        </mesh>
    )
}