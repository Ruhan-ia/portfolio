/* eslint-disable react/no-unknown-property */
import { Box, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from "framer-motion-3d"
import React from 'react';

const Animate = () => {
    return (
        <Canvas>
        <ambientLight intensity={1} ></ambientLight>
        <pointLight position={[10, 10, 10]} animate={{ x: 2 }}></pointLight>
        <motion.group>
          <motion.mesh
            animate={{
              scale: [1, 1.5, 1],
              rotateZ: [0, Math.PI * 2, 0],
              transition: { duration: 3, repeat: Infinity }
            }}
          >
            <Box args={[2, 2, 2]}>
              <meshStandardMaterial attach="material" color="blue" />
            </Box>
          </motion.mesh>
        </motion.group>
        <OrbitControls />
      </Canvas>
    );
};

export default Animate;