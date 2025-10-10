import { importAll } from './importAll';

const paths = {
  epsilon: require.context('../../public/epsilon/gallery', false, /\.(png|JPG|jpe?g|svg|gif)$/),
  ses: require.context('../../public/ses/gallery', false, /\.(png|JPG|jpe?g|svg|gif)$/),
  blockchain: require.context('../../public/bib/gallery', false, /\.(png|jpe?g|svg|gif)$/),
  ingenuity: require.context('../../public/ingenuity/gallery', false, /\.(png|JPG|jpe?g|svg|gif)$/),
  openlake: require.context('../../public/openlake/gallery', false, /\.(png|JPG|jpe?g|svg|gif)$/),
  electromos: require.context('../../public/electromos/gallery', false, /\.(png|JPG|jpe?g|svg|gif)$/),
  dsai: require.context('../../public/dsai/gallery', false, /\.(png|jpe?g|svg|gif)$/),
  gdsc: require.context('../../public/gdsc/gallery', false, /\.(png|JPG|jpe?g|svg|gif)$/),
  motorsports: require.context('../../public/motorsports/gallery', false, /\.(png|JPG|jpe?g|svg|gif)$/),
  spectre: require.context('../../public/spectre/gallery', false, /\.(png|JPG|jpe?g|svg|gif)$/),
    // Add more paths as needed
  };

export function getGalleryImages(path) {    
    const context = paths[path];
    if (!context) {
      throw new Error(`Path "${path}" is not defined in paths.js`);
    }
    return Object.values(importAll(context));
  }
