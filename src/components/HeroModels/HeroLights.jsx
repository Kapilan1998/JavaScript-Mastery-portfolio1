import * as THREE from "three";

const HeroLights = () => (
    <>
    <spotLight
            position={[1,3,-1]}
            angle={0.2}
            penumbra={0.1}
            intensity={80}
            color="yellow"
        />
        <spotLight
            position={[-2, -7, 9]}
            angle={0.15}
            penumbra={0.2}
            intensity={70}
            color="white"
        />
        <spotLight
            position={[4, -5, 6]}
            angle={0.3}
            penumbra={0.5}
            intensity={45}
            color="#4cc9f0"
        />
        <spotLight
            position={[-3, -5, -2]}
            angle={0.4}
            penumbra={1}
            intensity={95}
            color="#9d4edd"
        />
        <spotLight
            position={[4, -8, 9]}
            angle={0.9}
            penumbra={1}
            intensity={40}
            color="#2ca34b"
        />
        {/* area light for soft moody fill */}
        <primitive
            object={new THREE.RectAreaLight("#A35DF0", 8, 3, 2)}
            position={[1, 3, 4]}
            rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            intensity={15}
        />
        {/* subtle point light for atmospheric tone */}
        <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
        <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
    </>
);

export default HeroLights;