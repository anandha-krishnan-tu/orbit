import { planetData } from "../../data/planetData";
import { motion, AnimatePresence } from "framer-motion"

type Props = {
    selectedPlanet: string | null;
    setSelectedPlanet: (
        planet: string | null
    ) => void;
};

export default function PlanetInfoPanel({
    selectedPlanet,
    setSelectedPlanet,
}: Props) {

    const planet =
        planetData[
        selectedPlanet as keyof typeof planetData
        ];

    return (
        <AnimatePresence>
            {selectedPlanet && (
                <motion.div
                    className="planet-panel"

                    initial={{
                        opacity: 0,
                        x: 100,
                    }}

                    animate={{
                        opacity: 1,
                        x: 0,
                    }}

                    exit={{
                        opacity: 0,
                        x: 100,
                    }}

                    transition={{
                        duration: 0.4,
                    }}
                >

                    <button
                        className="close-btn"
                        onClick={() =>
                            setSelectedPlanet(null)
                        }
                    >
                        ✕
                    </button>

                    <h1>{planet.name}</h1>

                    <p>
                        {planet.description}
                    </p>

                    <h3>Facts</h3>

                    <ul>
                        {planet.facts.map(
                            (fact, index) => (
                                <li key={index}>
                                    {fact}
                                </li>
                            )
                        )}
                    </ul>

                </motion.div>)}
        </AnimatePresence>
    );
}