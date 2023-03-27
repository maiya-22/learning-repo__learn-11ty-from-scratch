# PROGRESS LOG

As the course repo states, this is a retired course, so stumbling blocks and technical issues are to be expected.

- This repo (that you are reading) is the "eleventy-from-scratch" repo that the instructions will tell you to create. This md file and the /gitHub-Images directory are the only things that are different.

## Lesson: [About Your Instructor](https://learneleventyfromscratch.com/#about-your-instructor)

- Opened issue because could not find the progress snapshots. _Hopefully will be able to create them with this repo._
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

  `"With the code we’ve just added, we’re > telling Eleventy that markdown files, data files and HTML files should be processed by Nunjucks. That means that we can now use .html files instead of having to use .njk files."`

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
