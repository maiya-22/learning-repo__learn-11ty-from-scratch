
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const sass = require("sass");

// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');


module.exports = config => {


    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/images/');

    // Add filters
    config.addFilter('dateFilter', dateFilter);
    config.addFilter('w3DateFilter', w3DateFilter);

    // Plugins
    config.addPlugin(rssPlugin);

    // Returns a collection of blog posts in reverse date order
    config.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });


    // Returns work items, sorted by display order
   // Returns work items, sorted by display order
    config.addCollection('work', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'));
  });
  
  // Returns work items, sorted by display order then filtered by featured
  config.addCollection('featuredWork', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md')).filter(
      x => x.data.featured
    );
  });


  // Returns a list of people ordered by filename
    config.addCollection('people', collection => {
    return collection.getFilteredByGlob('./src/people/*.md').sort((a, b) => {
      return Number(a.fileSlug) > Number(b.fileSlug) ? 1 : -1;
    });
   });


  //  [ ] Do we still need this with the re-write of Lesson 19?
   // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
    // config.setUseGitIgnore(false);


    // SaSS
    // Recognize Sass as a "template languages"
    config.addTemplateFormats("scss");

    // Compile Sass
    config.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function (inputContent, inputPath) {
    // Skip files like _fileName.scss
    let parsed = path.parse(inputPath);
    if (parsed.name.startsWith("_")) {
      return;
    }

    // Run file content through Sass
    let result = sass.compileString(inputContent, {
      loadPaths: [parsed.dir || "."],
      sourceMap: false, // or true, your choice!
    });

    // Allow included files from @use or @import to
    // trigger rebuilds when using --incremental
    this.addDependencies(inputPath, result.loadedUrls);

    return async () => {
      return result.css;
    };
  },
});

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
          input: 'src',
          output: 'dist'
        }
    };
  };