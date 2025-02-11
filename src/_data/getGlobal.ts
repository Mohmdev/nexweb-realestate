import configPromise from '@payload-config'
import type { Config } from '@payload-types'
import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'

type Global = keyof Config['globals']

async function getGlobal(slug: Global, depth = 0, isDraft?: boolean) {
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    slug,
    depth,
    draft: isDraft,
    overrideAccess: isDraft,
  })

  return global
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedGlobal = (slug: Global, depth = 0, isDraft?: boolean) =>
  unstable_cache(async () => getGlobal(slug, depth, isDraft), [slug], {
    tags: [`global_${slug}`],
  })
