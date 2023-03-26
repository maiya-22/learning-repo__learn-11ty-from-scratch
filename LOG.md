# PROGRESS LOG

As the course repo states, this is a retired course, so stumbling blocks and technical issues are to be expected.

- This repo (that you are reading) is the "eleventy-from-scratch" repo that the instructions will tell you to create. This md file and the /gitHub-Images directory are the only things that are different.

## Lesson: [About Your Instructor](https://learneleventyfromscratch.com/#about-your-instructor)

- Opened issue because could not find the progress snapshots. _Hopefully will be able to create them with this repo._
  - Issue [#37](https://github.com/Andy-set-studio/learneleventyfromscratch.com/issues/37)

## [Lesson 1](https://learneleventyfromscratch.com/lesson/1.html#what-is-eleventy)

- Final code for Lesson 1: [repo branch "lesson-01"](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/Lesson-01)

## [Lesson 2](https://learneleventyfromscratch.com/lesson/1.html#what-is-eleventy)

- ⚠️ ERROR: Cannot GET / @ commit [f92fc90ccfb](https://github.com/maiya-22/learning-repo__learn-11ty-from-scratch/tree/b2659d81bda1677810c7e5cf9e0f8f92fc90ccfb)

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
