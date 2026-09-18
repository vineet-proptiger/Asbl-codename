import { PROJECT_NAME } from '../lib/new-launch-hyderabad/config'
import { faviconImages } from '../lib/new-launch-hyderabad/images'

export default function manifest() {
  return {
    name: PROJECT_NAME,
    short_name: 'ASBL',
    icons: faviconImages.android,
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
  }
}
