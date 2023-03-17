<template>
  <div id="gemWrapper" ref="gemWrapper" :style="{ opacity: ready ? 1 : 0 }" class="hidden sm:block transition duration-1000">
    <canvas ref="gemAnim" id="ThreeCanvas" />
  </div>
</template>

<script setup>
import { useEventListener } from '@vueuse/core'

const ready = ref()
const gemWrapper = ref(null)
const gemAnim = ref(null)
let AnimationID

if (process.client) {
  async function loadGem () {
    const THREE = await import('three').then(m => m.default || m)
    const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js' /* webpackChunkName: "trophy" */).then(m => m.default || m)
    const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js' /* webpackChunkName: "trophy" */).then(m => m.default || m)
    const { RoomEnvironment } = await import('three/examples/jsm/environments/RoomEnvironment.js' /* webpackChunkName: "trophy" */).then(m => m.default || m)

    // Loaders
    const gltfLoader = new GLTFLoader()
    // Three init
    const canvas = document.getElementById('ThreeCanvas')
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, canvas: canvas })
    const scene = new THREE.Scene()
    const pmremGenerator = new THREE.PMREMGenerator(renderer)
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000)
    const controls = new OrbitControls(camera, renderer.domElement)
    const clock = new THREE.Clock()

    let gem

    function init() {
      // Renderer
      renderer.setPixelRatio(window.innerWidth / window.innerHeight)
      renderer.outputEncoding = THREE.sRGBEncoding
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1
      setRendererSize()

      // Scene
      scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture

      // Camera
      camera.aspect = 1
      camera.position.z = 14

      // Lights arround
      let pos = [[5, -5, 5], [5, -5, -5], [-5, -5, 5], [-5, -5, -5]]
      let lights = new THREE.Group()
      for (let i = 0; i < 4; i++) {
        let light = new THREE.PointLight(0xffffff, 1, 1000)
        light.position.set(pos[i][0], pos[i][1], pos[i][2])
        lights.add(light)
      }
      scene.add(lights)

      // Controls
      controls.enableDamping = true
      controls.dampingFactor = 0.05
      controls.enableZoom = false
      controls.enablePan = false
      controls.maxPolarAngle = Math.PI * 0.5
      controls.minPolarAngle = Math.PI * 0.5

      // Gem
      gltfLoader.load('/assets/home/trophy.glb',
        (gltf) => {
          gem = gltf.scene
          gem.scale.set(1.2, 1.2, 1.2)
          gem.position.set(0, 0, 0)
          scene.add(gem)
          ready.value = true
        }
      )
      useEventListener(window, 'resize', () => {onWindowResize()})
    }

    function setRendererSize() {
      if (window.matchMedia('(min-width: 768px)').matches) {
      renderer.setSize(400, 400)
      } else if (window.matchMedia('(min-width: 640px)').matches) {
        renderer.setSize(300, 300)
      } else {
        renderer.setSize(180, 180)
      }
    }
    
    function onWindowResize () {
      setRendererSize()
      renderer.pixelRatio = window.innerWidth / window.innerHeight
    }

    function animate () {
      AnimationID = requestAnimationFrame(animate)
      render()
    }

    function render () {
      const delta = clock.getDelta()
      controls.update()
      if (gem) {
        gem.rotation.y -= delta * 0.4
      }
      renderer.render(scene, camera)
    }

    init()
    AnimationID = requestAnimationFrame(animate)

    // Transition on load
    gemWrapper.value.style.opacity = 0
      setTimeout(() => {
        gemWrapper.value.style.opacity = 1
      }, 1000)    
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

  onUnmounted(() => {
    cancelAnimationFrame(AnimationID)
  })
}
</script>
