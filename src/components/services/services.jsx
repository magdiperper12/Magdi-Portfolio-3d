import { Canvas } from '@react-three/fiber';
import './services.css';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
function Services() {
	return (
		<div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh',
				}}>
				<Canvas>
					<mesh>
						<Sphere
							args={[1.1, 150, 250]}
							scale={2}>
							<MeshDistortMaterial
								color='#FBF'
								attach='material'
								distort={0.5}
								speed={2}
							/>
						</Sphere>
						<ambientLight intensity={1} />
						<directionalLight position={[5, 4, 1]} />
						<OrbitControls enableZoom='false' />
					</mesh>
				</Canvas>
			</div>
		</div>
	);
}

export default Services;
