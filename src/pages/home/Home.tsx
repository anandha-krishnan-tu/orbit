import { Canvas } from '@react-three/fiber'
import './Home.scss'
import Sun from '../../components/sun/Sun'
// import { OrbitControls} from '@react-three/drei'
import { Stars } from '@react-three/drei'
import PlanetSystem from '../../components/PlanetSystem'
import { useState } from 'react'
import CameraController from '../../components/scene/CameraController'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import PlanetInfoPanel from '../../components/planets/PlanetInfoPanel'

export default function Home() {

    const [selectedPlanet, setSelectedPlanet] =
        useState<string | null>(null);

    return (
        <div className="main-container">
            <Canvas
                className="three-d-canvas"
                camera={{ position: [10, 10, 35] }}
                onPointerMissed={() =>
                    setSelectedPlanet(null)
                }
            >
                <ambientLight intensity={0.3} />
                <pointLight
                    position={[0, 0, 0]}
                    intensity={400}
                />
                <EffectComposer>
                    <Bloom
                        intensity={1.5}
                        luminanceThreshold={0.2}
                    />
                </EffectComposer>
                {/* <OrbitControls
                    enableZoom={false}                
                /> */}
                <Sun />
                <PlanetSystem
                    selectedPlanet={selectedPlanet}
                    setSelectedPlanet={setSelectedPlanet}
                />
                <Stars
                    depth={50}
                    count={5000}
                    factor={2}
                    saturation={1}
                    fade={true}
                />
            </Canvas>
            <PlanetInfoPanel
                selectedPlanet={selectedPlanet}
                setSelectedPlanet={setSelectedPlanet}
            />
        </div>
    )
}