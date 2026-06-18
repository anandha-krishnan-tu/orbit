import { Canvas } from '@react-three/fiber'
import './Home.scss'
import Sun from '../../components/sun/Sun'
import { OrbitControls } from '@react-three/drei'
import Earth from '../../components/earth/Earth'
import { Stars } from '@react-three/drei'

export default function Home() {
    return (
        <div className="main-container">
            <Canvas
                className="three-d-canvas"
                camera={{ position: [0, 2, 7] }}
            >
                <ambientLight intensity={1} />
                <Sun />
                <Earth />
                <OrbitControls/>
                <Stars
                    radius={300}   // how far stars spread
                    depth={10}     // star field depth
                    count={5000}   // number of stars
                    factor={5}     // size factor
                    saturation={0} // color saturation
                    fade={true}
                />
            </Canvas>

            <div className="details-section">
                This is the details section
            </div>
        </div>
    )
}