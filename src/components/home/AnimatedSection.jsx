'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import styles from './AnimatedSection.module.css';

const AnimatedSection = () => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Track component dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (mountRef.current) {
        setDimensions({
          width: mountRef.current.clientWidth,
          height: mountRef.current.clientHeight
        });
      }
    };

    // Initial update
    updateDimensions();

    // Force a resize event after a short delay to ensure Three.js renderer updates on mount
    const resizeTimeout = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);

    // Add resize listener
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Setup and cleanup Three.js scene
  useEffect(() => {
    // Only setup if component is visible, mounted, and has dimensions
    if (!mountRef.current || !isVisible || dimensions.width === 0) return;

    const setupScene = () => {
      // Create scene, camera, and renderer
      const scene = new THREE.Scene();
      sceneRef.current = scene;
      
      // Create camera with aspect ratio based on container dimensions
      const aspectRatio = dimensions.width / dimensions.height;
      const camera = new THREE.PerspectiveCamera(65, aspectRatio, 0.1, 1000);
      cameraRef.current = camera;
      
      const renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      rendererRef.current = renderer;
      
      renderer.setSize(dimensions.width, dimensions.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit for performance
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      
      // Clear any existing canvas
      if (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
      mountRef.current.appendChild(renderer.domElement);
      
      // Adjust camera position based on screen size
      const isMobile = dimensions.width < 768;
      camera.position.z = isMobile ? 7 : 5; // Move camera back on mobile
      
      // Create a group to hold all objects
      const group = new THREE.Group();
      scene.add(group);

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);

      // Add directional light with shadows
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
      directionalLight.position.set(5, 5, 5);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 1024;
      directionalLight.shadow.mapSize.height = 1024;
      directionalLight.shadow.camera.near = 0.5;
      directionalLight.shadow.camera.far = 20;
      scene.add(directionalLight);
      
      // Add rim light for highlights
      const rimLight = new THREE.DirectionalLight(0x4f46e5, 0.8);
      rimLight.position.set(-5, 2, -5);
      scene.add(rimLight);
      
      // Create a refined laptop object
      const createLaptop = () => {
        const laptop = new THREE.Group();
        
        // Create laptop base with rounded edges
        const baseWidth = 3;
        const baseHeight = 0.2;
        const baseDepth = 2.2;
        const baseRadius = 0.08;
        
        const baseGeometry = new THREE.BoxGeometry(baseWidth, baseHeight, baseDepth);
        const baseMaterial = new THREE.MeshPhysicalMaterial({ 
          color: 0x303030,
          metalness: 0.5,
          roughness: 0.2,
          reflectivity: 0.7,
          clearcoat: 0.5
        });
        const base = new THREE.Mesh(baseGeometry, baseMaterial);
        base.castShadow = true;
        base.receiveShadow = true;
        
        // Add touchpad
        const touchpadGeometry = new THREE.PlaneGeometry(1.2, 0.8);
        const touchpadMaterial = new THREE.MeshPhysicalMaterial({ 
          color: 0x404040,
          roughness: 0.1,
          metalness: 0.2
        });
        const touchpad = new THREE.Mesh(touchpadGeometry, touchpadMaterial);
        touchpad.rotation.x = -Math.PI / 2;
        touchpad.position.y = 0.101;
        touchpad.position.z = 0.3;
        base.add(touchpad);
        
        // Add keyboard
        const keyboardGeometry = new THREE.PlaneGeometry(2.6, 1);
        const keyboardMaterial = new THREE.MeshPhysicalMaterial({ 
          color: 0x262626,
          roughness: 0.3,
          metalness: 0.3
        });
        const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
        keyboard.rotation.x = -Math.PI / 2;
        keyboard.position.y = 0.101;
        keyboard.position.z = -0.4;
        base.add(keyboard);
        
        // Add keyboard keys (simple representation)
        const keysGroup = new THREE.Group();
        const keySize = 0.12;
        const keySpacing = 0.14;
        const keyRows = 4;
        const keyCols = 15;
        const keyStartX = -(keyCols * keySpacing) / 2 + keySpacing / 2;
        const keyStartZ = -(keyRows * keySpacing) / 2 + keySpacing / 2 - 0.4;
        
        for (let row = 0; row < keyRows; row++) {
          for (let col = 0; col < keyCols; col++) {
            const keyGeometry = new THREE.BoxGeometry(keySize, 0.02, keySize);
            const keyMaterial = new THREE.MeshPhysicalMaterial({ 
              color: 0x333333,
              roughness: 0.5
            });
            const key = new THREE.Mesh(keyGeometry, keyMaterial);
            key.position.set(
              keyStartX + col * keySpacing,
              0.12,
              keyStartZ + row * keySpacing
            );
            
            // Randomly illuminate some keys for effect
            if (Math.random() > 0.7) {
              key.material = new THREE.MeshBasicMaterial({ color: 0x818cf8, opacity: 0.8, transparent: true });
            }
            
            keysGroup.add(key);
          }
        }
        base.add(keysGroup);
        
        laptop.add(base);
        
        // Create laptop screen
        const screenGroup = new THREE.Group();
        
        // Screen back
        const screenBackGeometry = new THREE.BoxGeometry(baseWidth, 2, 0.1);
        const screenBackMaterial = new THREE.MeshPhysicalMaterial({ 
          color: 0x303030,
          metalness: 0.5,
          roughness: 0.2,
          reflectivity: 0.7,
          clearcoat: 0.5
        });
        const screenBack = new THREE.Mesh(screenBackGeometry, screenBackMaterial);
        screenBack.position.y = 1;
        screenBack.position.z = -1;
        screenBack.castShadow = true;
        screenGroup.add(screenBack);
        
        // Screen bezel
        const bezelWidth = baseWidth - 0.2;
        const bezelHeight = 1.9;
        const bezelGeometry = new THREE.BoxGeometry(bezelWidth, bezelHeight, 0.02);
        const bezelMaterial = new THREE.MeshPhysicalMaterial({ 
          color: 0x202020,
          metalness: 0.5,
          roughness: 0.2
        });
        const bezel = new THREE.Mesh(bezelGeometry, bezelMaterial);
        bezel.position.y = 1;
        bezel.position.z = -0.95;
        screenGroup.add(bezel);
        
        // Screen front (display)
        const screenWidth = bezelWidth - 0.1;
        const screenHeight = bezelHeight - 0.1;
        const screenGeometry = new THREE.PlaneGeometry(screenWidth, screenHeight);
        
        // Create screen material with slight glow effect for better visibility
        const screenMaterial = new THREE.MeshBasicMaterial({ 
          color: 0x0a0e1a,
          side: THREE.DoubleSide
        });
        
        const screen = new THREE.Mesh(screenGeometry, screenMaterial);
        screen.position.y = 1;
        screen.position.z = -0.94;
        screenGroup.add(screen);
        
        // Add code-like elements on screen
        const addCodeElements = () => {
          // Create several horizontal lines resembling code
          const codeLineCount = 12;
          const codeLineHeight = screenHeight / (codeLineCount + 4);
          const colors = [0x4f46e5, 0x818cf8, 0xc7d2fe, 0x6366f1];
          
          // Create a container for code lines to ensure clipping
          const codeContainer = new THREE.Group();
          
          // Add a clipping plane to ensure code stays within screen bounds
          const maxWidth = screenWidth * 0.9;  // 90% of screen width
          const maxHeight = screenHeight * 0.9; // 90% of screen height
          
          for (let i = 0; i < codeLineCount; i++) {
            // Ensure line width stays within safe bounds
            const lineWidth = (0.3 + Math.random() * 0.35) * maxWidth; 
            const colorIndex = Math.floor(Math.random() * colors.length);
            
            const lineMaterial = new THREE.MeshBasicMaterial({ 
              color: colors[colorIndex],
              transparent: true,
              opacity: 0.8
            });
            
            const codeLine = new THREE.Mesh(
              new THREE.PlaneGeometry(lineWidth, codeLineHeight * 0.4),
              lineMaterial
            );
            
            // Ensure lines stay well within screen bounds
            const startY = (screenHeight / 2) - (codeLineHeight * 1.5);
            codeLine.position.y = 1 + startY - (i * codeLineHeight);
            codeLine.position.z = -0.93;
            
            // Constrain horizontal positioning to avoid overflow
            const indentLevel = Math.floor(Math.random() * 3);
            // Adjust position to ensure it stays within screen bounds
            // Start from left side with controlled indent
            const safeOffset = -((maxWidth - lineWidth) / 2) + 0.1;
            codeLine.position.x = safeOffset + indentLevel * 0.1;
            
            codeContainer.add(codeLine);
            
            // Animate code lines
            codeLine.userData = {
              animation: {
                speed: 0.001 + Math.random() * 0.003,
                time: Math.random() * Math.PI * 2,
                blinkChance: Math.random() * 0.01,
                initialOpacity: 0.7 + Math.random() * 0.3
              }
            };
          }
          
          // Add code container to screen group
          screenGroup.add(codeContainer);
        };
        
        addCodeElements();
        
        // Add logo to the back of the screen
        const logoGeometry = new THREE.CircleGeometry(0.3, 32);
        const logoMaterial = new THREE.MeshBasicMaterial({ 
          color: 0x4f46e5,
          transparent: true,
          opacity: 0.6
        });
        const logo = new THREE.Mesh(logoGeometry, logoMaterial);
        logo.position.z = -1.05;
        logo.position.y = 1;
        screenGroup.add(logo);
        
        // Position the screen
        screenGroup.rotation.x = Math.PI / 6; // Angle the screen slightly
        laptop.add(screenGroup);
        
        // Add laptop to the scene
        laptop.rotation.x = -0.2;
        laptop.rotation.y = -0.4;
        
        // Move laptop down slightly to center in view
        laptop.position.y = -0.5;
        
        return laptop;
      };
      
      // Add laptop to the group
      const laptop = createLaptop();
      group.add(laptop);
      
      // Add floating particles around the laptop (representing code/tech concepts)
      const particleCount = isMobile ? 60 : 120;
      const particles = [];
      
      // Create particle geometries with different shapes
      const particleGeometries = [
        new THREE.SphereGeometry(0.03, 8, 8),
        new THREE.BoxGeometry(0.06, 0.06, 0.06),
        new THREE.TetrahedronGeometry(0.06),
        new THREE.OctahedronGeometry(0.05),
        new THREE.DodecahedronGeometry(0.04)
      ];
      
      // Create particle materials with different colors
      const particleMaterials = [
        new THREE.MeshBasicMaterial({ color: 0x4f46e5 }), // Primary accent
        new THREE.MeshBasicMaterial({ color: 0x818cf8 }), // Secondary accent
        new THREE.MeshBasicMaterial({ color: 0xc7d2fe }), // Light accent
        new THREE.MeshBasicMaterial({ color: 0x6366f1 })  // Additional accent
      ];
      
      // Create particles and add them to the group
      for (let i = 0; i < particleCount; i++) {
        const geometryIndex = Math.floor(Math.random() * particleGeometries.length);
        const materialIndex = Math.floor(Math.random() * particleMaterials.length);
        
        const particle = new THREE.Mesh(
          particleGeometries[geometryIndex],
          particleMaterials[materialIndex]
        );
        
        // Random position around the laptop
        const radius = 3 + Math.random() * 3;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        particle.position.x = radius * Math.sin(phi) * Math.cos(theta);
        particle.position.y = radius * Math.sin(phi) * Math.sin(theta);
        particle.position.z = radius * Math.cos(phi);
        
        // Add velocity and rotation for animation
        particle.userData = {
          velocity: {
            x: (Math.random() - 0.5) * 0.01,
            y: (Math.random() - 0.5) * 0.01,
            z: (Math.random() - 0.5) * 0.01
          },
          rotation: {
            x: Math.random() * 0.02,
            y: Math.random() * 0.02,
            z: Math.random() * 0.02
          },
          initialRadius: radius,
          theta,
          phi,
          speed: 0.004 + Math.random() * 0.006,
          pulseSpeed: 0.01 + Math.random() * 0.02,
          pulseTime: Math.random() * Math.PI * 2
        };
        
        group.add(particle);
        particles.push(particle);
      }
      
      // Add subtle glow effect to the scene
      const addGlow = () => {
        // Light sphere around laptop
        const glowGeometry = new THREE.SphereGeometry(4, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: 0x4f46e5,
          transparent: true,
          opacity: 0.05,
          side: THREE.BackSide
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        scene.add(glow);
        
        return glow;
      };
      
      const glow = addGlow();
      
      // Animation logic in a separate function to reference in cleanup
      const animate = () => {
        if (!mountRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) {
          return;
        }
        
        animationFrameRef.current = requestAnimationFrame(animate);
        
        // Gently rotate the entire laptop
        laptop.rotation.y += 0.003;
        
        // Pulse glow effect
        if (glow) {
          glow.material.opacity = 0.03 + Math.sin(Date.now() * 0.001) * 0.02;
        }
        
        // Animate particles
        particles.forEach(particle => {
          // Update particle rotations
          particle.rotation.x += particle.userData.rotation.x;
          particle.rotation.y += particle.userData.rotation.y;
          particle.rotation.z += particle.userData.rotation.z;
          
          // Orbit around the laptop
          particle.userData.theta += particle.userData.speed;
          
          // Pulse particles
          particle.userData.pulseTime += particle.userData.pulseSpeed;
          const scale = 0.8 + Math.sin(particle.userData.pulseTime) * 0.2;
          particle.scale.set(scale, scale, scale);
          
          const radius = particle.userData.initialRadius;
          
          particle.position.x = radius * Math.sin(particle.userData.phi) * Math.cos(particle.userData.theta);
          particle.position.y = radius * Math.sin(particle.userData.phi) * Math.sin(particle.userData.theta);
          particle.position.z = radius * Math.cos(particle.userData.phi);
        });
        
        // Animate code lines on the laptop screen
        const codeElements = laptop.children[1].children.filter(
          child => child instanceof THREE.Group && child.children.some(c => c.userData && c.userData.animation)
        );
        
        if (codeElements.length > 0) {
          codeElements.forEach(codeGroup => {
            codeGroup.children.forEach(child => {
              if (child.userData && child.userData.animation) {
                const animation = child.userData.animation;
                animation.time += animation.speed;
                
                // Make code lines "blink" or "type" occasionally
                if (Math.random() < animation.blinkChance) {
                  child.visible = !child.visible;
                  setTimeout(() => {
                    if (child && child.parent) {
                      child.visible = true;
                    }
                  }, 150 + Math.random() * 250);
                }
                
                // Animate opacity for a subtle "typing" effect
                child.material.opacity = animation.initialOpacity * (0.8 + Math.sin(animation.time) * 0.2);
              }
            });
          });
        } else {
          // Fallback for direct children
          laptop.children[1].children.forEach(child => {
            if (child.userData && child.userData.animation) {
              const animation = child.userData.animation;
              animation.time += animation.speed;
              
              // Make code lines "blink" or "type" occasionally
              if (Math.random() < animation.blinkChance) {
                child.visible = !child.visible;
                setTimeout(() => {
                  if (child && child.parent) {
                    child.visible = true;
                  }
                }, 150 + Math.random() * 250);
              }
              
              // Animate opacity for a subtle "typing" effect
              child.material.opacity = animation.initialOpacity * (0.8 + Math.sin(animation.time) * 0.2);
            }
          });
        }
        
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      };
      
      // Handle user interaction - subtle camera movement
      const handleMouseMove = (event) => {
        if (!cameraRef.current) return;
        
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        
        // Subtle camera movement
        cameraRef.current.position.x += (mouseX * 0.3 - cameraRef.current.position.x) * 0.05;
        cameraRef.current.position.y += (mouseY * 0.3 - cameraRef.current.position.y) * 0.05;
        cameraRef.current.lookAt(0, 0, 0);
      };
      
      // Add mouse move handler
      document.addEventListener('mousemove', handleMouseMove);
      
      // Start animation
      animate();
      
      return { 
        group, 
        laptop, 
        particles, 
        glow,
        cleanup: () => {
          document.removeEventListener('mousemove', handleMouseMove);
        }
      };
    };

    const sceneData = setupScene();

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      rendererRef.current.setSize(width, height);
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      // Adjust camera position based on screen size
      if (width < 768) {
        cameraRef.current.position.z = 7;
      } else {
        cameraRef.current.position.z = 5;
      }
      
      cameraRef.current.lookAt(0, 0, 0);
    };
    
    window.addEventListener('resize', handleResize);

    // Handle visibility changes (tab switching, etc.)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pause animation when tab is not visible
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }
      } else {
        // Resume animation when tab becomes visible again
        if (!animationFrameRef.current && rendererRef.current && sceneRef.current && cameraRef.current) {
          const animate = () => {
            if (!mountRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) {
              return;
            }
            
            animationFrameRef.current = requestAnimationFrame(animate);
            
            if (sceneData && sceneData.laptop) {
              sceneData.laptop.rotation.y += 0.003;
              
              // Animate glow
              if (sceneData.glow) {
                sceneData.glow.material.opacity = 0.03 + Math.sin(Date.now() * 0.001) * 0.02;
              }
              
              // Animate particles
              if (sceneData.particles) {
                sceneData.particles.forEach(particle => {
                  // Update particle rotations
                  particle.rotation.x += particle.userData.rotation.x;
                  particle.rotation.y += particle.userData.rotation.y;
                  particle.rotation.z += particle.userData.rotation.z;
                  
                  // Orbit around the laptop
                  particle.userData.theta += particle.userData.speed;
                  
                  // Pulse particles
                  particle.userData.pulseTime += particle.userData.pulseSpeed;
                  const scale = 0.8 + Math.sin(particle.userData.pulseTime) * 0.2;
                  particle.scale.set(scale, scale, scale);
                  
                  const radius = particle.userData.initialRadius;
                  
                  particle.position.x = radius * Math.sin(particle.userData.phi) * Math.cos(particle.userData.theta);
                  particle.position.y = radius * Math.sin(particle.userData.phi) * Math.sin(particle.userData.theta);
                  particle.position.z = radius * Math.cos(particle.userData.phi);
                });
              }
              
              // Animate code lines on the laptop screen
              const codeGroups = sceneData.laptop.children[1].children.filter(
                child => child instanceof THREE.Group
              );
              
              if (codeGroups.length > 0) {
                codeGroups.forEach(codeGroup => {
                  codeGroup.children.forEach(child => {
                    if (child.userData && child.userData.animation) {
                      const animation = child.userData.animation;
                      animation.time += animation.speed;
                      
                      // Make code lines "blink" or "type" occasionally
                      if (Math.random() < animation.blinkChance) {
                        child.visible = !child.visible;
                        setTimeout(() => {
                          if (child && child.parent) {
                            child.visible = true;
                          }
                        }, 150 + Math.random() * 250);
                      }
                      
                      // Animate opacity for a subtle "typing" effect
                      child.material.opacity = animation.initialOpacity * (0.8 + Math.sin(animation.time) * 0.2);
                    }
                  });
                });
              } else {
                // Fallback for direct children
                sceneData.laptop.children[1].children.forEach(child => {
                  if (child.userData && child.userData.animation) {
                    const animation = child.userData.animation;
                    animation.time += animation.speed;
                    
                    // Make code lines "blink" or "type" occasionally
                    if (Math.random() < animation.blinkChance) {
                      child.visible = !child.visible;
                      setTimeout(() => {
                        if (child && child.parent) {
                          child.visible = true;
                        }
                      }, 150 + Math.random() * 250);
                    }
                    
                    // Animate opacity for a subtle "typing" effect
                    child.material.opacity = animation.initialOpacity * (0.8 + Math.sin(animation.time) * 0.2);
                  }
                });
              }
            }
            
            rendererRef.current.render(sceneRef.current, cameraRef.current);
          };
          
          animate();
        }
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Clean up function
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      // Cancel any ongoing animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      
      // Run any specific cleanup from scene setup
      if (sceneData && sceneData.cleanup) {
        sceneData.cleanup();
      }
      
      // Properly dispose of Three.js objects to prevent memory leaks
      if (sceneRef.current) {
        // Recursive function to dispose of all objects and materials
        const disposeObject = (obj) => {
          if (obj.geometry) {
            obj.geometry.dispose();
          }
          
          if (obj.material) {
            if (Array.isArray(obj.material)) {
              obj.material.forEach(material => material.dispose());
            } else {
              obj.material.dispose();
            }
          }
          
          if (obj.children) {
            obj.children.forEach(disposeObject);
          }
        };
        
        // Dispose of scene objects
        sceneRef.current.traverse(disposeObject);
      }
      
      // Remove renderer from DOM
      if (mountRef.current && rendererRef.current && rendererRef.current.domElement) {
        try {
          mountRef.current.removeChild(rendererRef.current.domElement);
        } catch (e) {
          console.warn('Error removing renderer from DOM', e);
        }
      }
      
      // Clear refs
      rendererRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
    };
  }, [isVisible, dimensions]);

  // Track component visibility with Intersection Observer
  useEffect(() => {
    if (!mountRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 } // Consider component visible when 10% is in viewport
    );
    
    observer.observe(mountRef.current);
    
    return () => {
      if (mountRef.current) {
        observer.unobserve(mountRef.current);
      }
    };
  }, []);

  return (
    <motion.div 
      ref={mountRef} 
      className={styles.animationContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    ></motion.div>
  );
};

export default AnimatedSection;