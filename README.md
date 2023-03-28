## Learning 11ty From Scratch

- The goal of this repo is to go through [Andy Bell's](https://andy-bell.co.uk/links/) open source project [Learn 11ty from Scratch](https://learneleventyfromscratch.com/) and add my learning process (ie errors and their solutions, and hopefully any help that I can get along the way) to the tutorial's [open source repo](https://github.com/Andy-set-studio/learneleventyfromscratch.com).
- I haven't found any tutorials that are up to date, so hopefully this process will help other learners too.

## Next Steps

1. Complete the tutorial and document stumbling blocks (and their solutions).
2. The finished project from the tutorial will be used as a starting point for completing an 11ty boilerplate for web projects. (Repo to be linked here).

## Dev & Deploy instructions

- To run on localhost: `npm run start`

## Backlog of Features for Final Boilerplate

<details>
 <summary> 
 expand ..
</summary>

## BACKLOG of FEATURES for FINAL BOILERPLATE

File-types to link properly:

- [ ] CSS
- [ ] SaSS
- [ ] images
- [ ] javaScript

Libraries to load:

- [ ] fontawesome

CMS:

- [ ] Netlify CMS or gitHub CMS (?)

Deploy:

- [ ] deploy to Netlify
- [ ] lambda functions
- [ ] api calls
- [ ] authentication (?)

</details>

## Lesson Code & Progress Log

<details>

<summary>expand ...</summary>

- As the course repo states, this is a retired course, so stumbling blocks and technical issues are to be expected.

- This repo (that you are reading) is the "eleventy-from-scratch" repo that the instructions will tell you to create. This md file and the /gitHub-Images directory are the only things that are different.

## For Q & A, errors, and questions

- see the following sections
- & look at the [issues](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/issues)

## [Lesson: About Your Instructor](https://learneleventyfromscratch.com/#about-your-instructor)

- Opened issue because could not find the progress snapshots. Hopefully will be able to create them with this repo.
  - Issue [#37](https://github.com/Andy-set-studio/learneleventyfromscratch.com/issues/37)

## [Lesson 1](https://learneleventyfromscratch.com/lesson/1.html#what-is-eleventy)

- Final code for Lesson 1: [repo branch "lesson-01"](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/Lesson-01)

## [Lesson 2](https://learneleventyfromscratch.com/lesson/1.html#what-is-eleventy)

- ⚠️ ERROR: Cannot GET /
  <details>
      <summary>Problem </summary>

  - @ commit [f92fc90ccfb](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/b2659d81bda1677810c7e5cf9e0f8f92fc90ccfb)

  - At the end of the lesson, you run `npx eleventy --serve`

  - You are supposed to see this output in the browser:

    ![lesson 2 goal](https://raw.githubusercontent.com/maiya-22/learning-repo__learn-11ty-from-scratch/Lesson-02/gitHub-Images/lesson-02-goal.jpg)

        Instead, you see this:

    ![lesson 2 actual](https://raw.githubusercontent.com/maiya-22/learning-repo__learn-11ty-from-scratch/Lesson-02/gitHub-Images/lesson-02-actual.png)

    </details>
      <details>
        <summary>Solution </summary>

        - The index.md file was in the root directory.
        - It is supposed to be in the /src directory.
        - That solved it.

    </details>

  - Final code for Lesson 2: [repo branch "lesson-02"](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/Lesson-02)

## [Lesson 3](https://learneleventyfromscratch.com/lesson/3.html#what-is-nunjucks)

- key point:
  <details>
            <summary>
                  config for making it so that you can use html files
                </summary>

  `"With the code we’ve just added, we’re > telling Eleventy that markdown files, data files and HTML files should be processed by Nunjucks. That means that we can now use .html files instead of having to use .njk files."`

            module.exports = config => {
              return {
                dir: {
                  markdownTemplateEngine: 'njk',
                  dataTemplateEngine: 'njk',
                  htmlTemplateEngine: 'njk',
                  dir: {
                    input: 'src',
                    output: 'dist'
                  }
                }
              };
            };

  </details>

- Final code for Lesson 3: [repo branch "lesson-03"](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/Lesson-03)

## [Lesson 4](https://learneleventyfromscratch.com/lesson/4.html)

- Note: Image links still broken at end of lesson. (To be fixed in future lesson).
- Final code for Lesson 4: [repo branch "lesson-04"](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/Lesson-04)

## [Lesson 5](https://learneleventyfromscratch.com/lesson/5.html)

- Final code for Lesson 5: [repo branch "lesson-05"](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/Lesson-05)

## [Lesson 6](https://learneleventyfromscratch.com/lesson/6.html)

- Final code for Lesson 6: [repo branch "lesson-06"](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/Lesson-06)

## [Lesson 7](https://learneleventyfromscratch.com/lesson/7.html)

- Final code for Lesson 7: [repo branch "lesson-07"](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/Lesson-07)

## [Lesson 8](https://learneleventyfromscratch.com/lesson/8.html)

- Final code for Lesson 8: [repo branch "lesson-08"](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/Lesson-08)

## [Lesson 9](https://learneleventyfromscratch.com/lesson/9.html)

- Final code for Lesson 9: [repo branch "lesson-09"](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/Lesson-09)

## [Lesson 10](https://learneleventyfromscratch.com/lesson/10.html)

- Final code for Lesson 10: [repo branch "lesson-10"](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/Lesson-10)

## [Lesson 11](https://learneleventyfromscratch.com/lesson/11.html)

- Final code for Lesson 11: [repo branch "lesson-11"](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/Lesson-11)

## [Lesson 12](https://learneleventyfromscratch.com/lesson/12.html)

- Final code for Lesson 12: [repo branch "lesson-12"](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/Lesson-12)

## [Lesson 13](https://learneleventyfromscratch.com/lesson/13.html)

- Final code for Lesson 13: [repo branch "lesson-13"](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/Lesson-13)

<!--
## [Lesson 14](https://learneleventyfromscratch.com/lesson/14.html)

- Final code for Lesson 14: [repo branch "lesson-14"](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/Lesson-14)

## [Lesson 15](https://learneleventyfromscratch.com/lesson/15.html)

- Final code for Lesson 15: [repo branch "lesson-15"](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/Lesson-15) -->
</details>
