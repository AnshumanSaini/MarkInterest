import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId : 'xsa53xrp',
  dataset : 'production',
  useCdn : true, // set to `false` to bypass the edge cache
  apiVersion : '2024-02-29', // use current date (YYYY-MM-DD) to target the latest API version
  token : process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source)=> builder.image(source);