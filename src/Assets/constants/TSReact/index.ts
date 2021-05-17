import { ArticleInterface } from "../index";
import logo from "./Tsx.png";
import css from "./css.png";

export const contents: ArticleInterface = {
    contents: [
        {
            content: `1. HTML/basic CSS: I did it back in 5th grade, completely forgot, and worked on a small site(engineer NITK) to get back into practice. 
            HTML/CSS is the fundamental structure and design side of the site and is thus, necessary for any beginner. The main advantage of web development is that no tool is needed(I would advise quite a few.
            Not necessary but helpful) for building even complex websites. Any text editor will suffice. Resources to learn more:
        `,
            contentType: "text",
        },
        {
            content:
                "https://www.freecodecamp.org/learn/responsive-web-design/",
            contentType: "link",
            title: "interactive exercises",
        },
        {
            content:
                "https://youtube.com/playlist?list=PLbpB1OSSmKmpNLeviVDLJjjnAqJ_phE7v",
            contentType: "link",
            title: "tutorial series",
        },
        {
            content: `2. JavaScript(JS) + React: I was not interested in web development at first.
                I found basic HTML/CSS lacking where standard programming languages succeeded
                (probably cos they aren't programming languages).
                After I heard about react and started to work on it,
                I saw how much better and more aligned it is with conventional programming language. 
                (I sincerely apologize for calling JS conventional) At the time, I was a complete beginner at JS.
                Now I am a little less of a beginner
                (anyone who calls themselves an expert at JS either wrote it or is lying).
                JS is probably the most challenging of languages to pick up and highly annoying,
                with the weirdest of bugs and even a === symbol.
                Yet once you understand the ideology, well, it doesn't make much difference,
                but at least you'll be less annoyed and more used to it by then.
                React is a library at helps you write out the structure and the logic all
                at once and bind them together much better than conventional HTML could do.`,
            contentType: "text",
        },
        {
            content:
                "https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/",
            title: "difference between libraries and frameworks",
            contentType: "link",
        },
        {
            contentType: "text",
            content: `With reusable, modular components, it becomes much more organized and structured, 
                making it easier to plan and better create more complex sites and follow the DRY(don't repeat yourself) concepts much better. 
                With the knowledge of both JS and React, my web development and design interests were sparked again. 
                This lead me to explore more and try building projects that people would actually use. Few of them can be checked out here:`,
        },
        {
            content: "https://iste.nitk.ac.in/",
            title: "ISTE NITK",
            contentType: "link",
        },
        {
            content: "https://toastmasters-nitk.github.io/WebsiteReact/",
            title: "NITK Toastmasters",
            contentType: "link",
        },
        {
            contentType: "text",
            content: `These were built with the help of several people, all much like me, relatively new to react. 
            That helped me realize the importance of having a community around you that is supportive and helps with exploration and learning all at once. 
            Working in a group of people also leads to issues that won't arise while being helpful. 
            These issues also lead to the learning opportunities like using and configuring auto formatters, git, or similar version control systems. 
            What better way to learn them with an actual project that goes live. Now that I was good enough to organize and structure my websites, 
            I wanted to explore more on making them look better, which led to the then dreaded and now well-loved, modern CSS.`,
        },
        {
            contentType: "link and text",
            content: "https://developer.mozilla.org/en-US/docs/Glossary/CDN",
            textBefore: `3. Modern CSS: Learning Modern CSS was personally a horrible experience.
            I took many bad tutorials, used bootstrap when I was learning to code out CSS(never ever recommended), and tried to avoid the surprisingly well-written`,
            textAfter: "Then I found a few YouTube channels:",
            title: "Mozilla CDN documentation.",
        },
        {
            content: "https://www.youtube.com/kevinpowell",
            title: "Kevin Powell",
            contentType: "link",
        },
        {
            content: "https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw",
            title: "Web Dev simplified",
            contentType: "link",
        },
        {
            content: "https://www.youtube.com/channel/UC-8QAzbLcRglXeN_MY9blyw",
            title: "Ben Awad",
            contentType: "link",
        },
        {
            contentType: "text",
            content: `They made the experience much more rewarding and honestly made some sense out of weird and relatively scary properties
            like flex-basis and how to create all sorts of odd layouts.`,
        },
        {
            contentType: "link and text",
            content: "https://cssbattle.dev/",
            textBefore: `Learning about grid-template-areas was very surprising to me and new and, at the same time, helped fill my creative side. 
            I also ended up learning about masonry layouts and explored this fantastic site called`,
            textAfter: `which was a fun and creative way to explore even more. 
            I am pretty horrible at design, and learning these concepts gives me access to better designs and an easier way to implement them. 
            I was usually poor at coming up with ideas for the same. I have to thank everyone who helped me design with an emphasis on the 
            person/people that sat with me and helped me create some of my best works ever by coming up with unique designs.`,
            title: "cssbattle",
        },
        {
            contentType: "text",
            content: `4. Advanced React concepts and better configuration of utilities and tools: 
            After this, I started working on some sites with very flexible deadlines and came across even more channels that focus on web dev concepts.
            This led me to explore and learn about hooks, read upon newer versions on react and the differences, routing, adding linters and formatters.
            Adding newer concepts lead to smoother and optimized code, easier to debug, and taught me a lot more about JS as a whole.
            These concepts also make you curious about the libraries themselves and how all of this works—leading to an abundance of
            knowledge and a little bit of explanation of open source concepts. This was also the part where I went crazy exploring and customizing VS code.
            Adding up around 60ish extensions, which varied from API fetching to adding a colorful fire over my cursor.
            I even explored making my own extension and worked on it for a bit(when I finish up, there will be a writeup on it here),
            which leads to good learning and exploration of an even deeper dive into coding and dev in general.
            Around this time, I started reading medium articles on JS, and I even started following developers on Twitter to get a better idea of what's
            new in the dev community. And honestly, it just feels great to see tweets like this one:`,
        },
        {
            content: css,
            contentType: "image",
            title: "Very comforting to know we’re all stupid together, and I’m not stupid alone.",
        },
        {
            content:
                "https://twitter.com/tucker_dev/status/1324167664344981504?s=20",
            contentType: "link",
            title: "Tweet link",
        },
        {
            contentType: "text",
            content: `5. Styled-components(CSS-in-JS): I learned of styled-components about the same time 
                I heard of React. They seemed like a great idea, but I knew I had to work on developing more proficiency in CSS before I could even approach styled-components. 
                Once I built a few projects leveraging Modern CSS frameworks like materialize and concepts like grid/flexbox, 
                I felt that something was lacking. For example, I was working on a project where I had to dynamically pass a 
                value to multiply margin by(poorly organized list yes). Still, while learning and exploring this, I came across styled-components again and realized that if you're writing CSS in JS files itself, 
                you don't need to worry about sharing variables. This lead me back to styled-components and adding them slowly into code. 
                I realized the props and component structure works great for passing in values and leads to much cleaner and more manageable code 
                than writing CSS and using classNames, especially if we're using frameworks for CSS or even a preprocessor.
            `,
        },
        {
            contentType: "link",
            content: "https://www.styled-components.com/",
            title: "Styled Components",
        },
        {
            contentType: "text",
            content: `6. Typescript: After doing a basic amount of work on this entire React stack, I wanted to explore a bit more. 
                While working on a project, I came across an error where a component was not rendering. I was fetching data from cookies and then passing that as a prop. Everything seemed fine, and then I realized that the prop was misspelled. 
                The prop was a critical one and caused the site to crash, no components being rendered, nothing shown in inspector. 
                I spent a frustratingly long amount of time and started searching for a better way to organize props.`,
        },
        {
            contentType: "text",
            content: `Then I came across PropTypes. PropTypes is a pretty popular NPM package that allows you to define the type of props, a default value, 
                which ones are necessary, and which ones are optional. I saw this and saw the syntax being similar to something I had seen before. Next, I came across a video that talked about typescript. Typescript supports everything that PropTypes can but does it one better where 
                it allows you to add constraints and only allow specific values. TS supports this across the entire file not being limited to just props but also constants and any data types you define, comes with a linter for types(eslint-plugin, essentially), 
                and allows declaring custom modules using **.d.ts files.`,
        },
        {
            contentType: "text",
            content: `The best part is that it compiles into minified and obfuscated JS (minified-> variable names as short as they can be to reduce byte load on the server, obfuscated-> the code will be organized 
                in a manner that it doesn't make much sense) in the same way that React does for production-level code while being type friendly. 
                TS helps in catching more bugs for developers during dev time and adding no extra weight to the end result. This motivated me to learn more about the language, and the end result is this blog microsite that 
                I've coded out, entirely using TS, a much more pleasant experience than coding out in pure JS.`,
        },
        {
            contentType: "text",
            content: `PS: There are ways to migrate projects from JS to TS with useful guides. 
                One simple step is just to install the NPM packages necessary for TS and code out new files in TS while migrating the existing JS. 
                Since JS is a subset of TS, they work very well together.`,
        },
        {
            contentType: "link",
            content:
                "https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html",
            title: "Migrating guide",
        },
    ],
    cardData: {
        description: `
            This is the journey of someone still exploring and 
            looking around for new ways to center a div
            and how I reached where I am today.`,
        image: logo,
        isTech: true,
        title: "The six steps in my journey as a web developer",
    },
};
