<template>
  <div id="gemWrapper" ref="gemWrapper" :style="{ opacity: ready ? 1 : 0 }" class="hidden sm:block transition duration-1000">
    <div ref="gemAnim" />
  </div>
</template>

<script setup>
import { useEventListener } from '@vueuse/core'

const ready = ref()
const gemWrapper = ref(null)
const gemAnim = ref(null)

if (process.client) {
  async function loadGem () {
    const THREE = await import('three').then(m => m.default || m)
    const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js' /* webpackChunkName: "trophy" */).then(m => m.default || m)
    const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js' /* webpackChunkName: "trophy" */).then(m => m.default || m)
    const { RoomEnvironment } = await import('three/examples/jsm/environments/RoomEnvironment.js' /* webpackChunkName: "trophy" */).then(m => m.default || m)

    // Loaders
    const gltfLoader = new GLTFLoader()

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1
    if (window.matchMedia('(min-width: 768px)').matches) {
      renderer.setSize(500, 500)
    } else if (window.matchMedia('(min-width: 640px)').matches) {
      renderer.setSize(350, 350)
    } else {
      renderer.setSize(180, 180)
    }

    // Scene
    const scene = new THREE.Scene()

    const pmremGenerator = new THREE.PMREMGenerator(renderer)
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture

    // Gem
    let gem

    gltfLoader.load('/assets/home/trophy.glb', function (gltf) {
      gem = gltf.scene.children[0]
      gem.scale.set(1, 1, 1)
      gem.position.set(0, 0, 0)
      scene.add(gem)

      ready.value = true
    })

    // Renderer
    gemAnim.value.appendChild(renderer.domElement)
    renderer.setPixelRatio(window.devicePixelRatio)
    function onWindowResize () {
      if (window.matchMedia('(min-width: 768px)').matches) {
        renderer.setSize(500, 500)
      } else if (window.matchMedia('(min-width: 640px)').matches) {
        renderer.setSize(350, 350)
      } else {
        renderer.setSize(180, 180)
      }
    }

    useEventListener(window, 'resize', () => {
      onWindowResize()
    })

    // Transition on load
    gemWrapper.value.style.opacity = 0
    setTimeout(() => {
      gemWrapper.value.style.opacity = 1
    }, 1000)

    // Camera
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000)
    camera.aspect = 1
    camera.position.z = 14

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.enablePan = false
    controls.maxPolarAngle = Math.PI * 0.5
    controls.minPolarAngle = Math.PI * 0.5

    controls.update()

    function animate () {
      requestAnimationFrame(animate)
      if (gem) {
        gem.rotation.y -= 0.01
      }
      controls.update()
      renderer.render(scene, camera)
    }

    animate()
  }

  onMounted(() => requestIdleCallback(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadGem()
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })
    observer.observe(gemAnim.value)
  }))
}
</script>
