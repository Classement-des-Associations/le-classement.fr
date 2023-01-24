export const useBlog = () => {
  const router = useRouter()

  const isBlog = computed(() => router.currentRoute.value.path.includes('blog'))

  return { isBlog, blogClass: 'blog' }
}
