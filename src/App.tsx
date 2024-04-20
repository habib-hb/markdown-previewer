import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'

const initialText =`# Welcome to my React Markdown Mischief Maker!

## Brace yourself for a sub-heading...
### And here's some other cool stuff:

Behold! Behold! Behold! Here's some code,, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;


function App() {
  const [markdownText, setMarkdownText] = useState<string>(initialText)

  return (
    <>
     <div>
      <h1 style={{textAlign: 'center'}}>Markdown Previewer</h1>
      <div className="boxes-container">
        <h2>Enter your markdown here:</h2>
        <textarea name="editor" id="editor" rows={20} value={markdownText} onChange={(e)=>setMarkdownText(e.target.value)} ></textarea>
        <h2>Preview</h2>
        <div id="preview">
          <ReactMarkdown>
            {markdownText}
          </ReactMarkdown>
        </div>
      </div>
     </div>
    </>
  )
}

export default App



// Behold! Behold! Behold! Here's some code, `<div></div>`, between 2 backticks. Bow before its majestic presence!

// // Gaze upon this multi-line code in awe:

// function anotherExample(firstLine, lastLine) {
// if (firstLine === '' && lastLine === '') {
// return multiLineCode;
// }
// }

// vbnet
// Copy code

// You can also summon text **bold** enough to wake the slumbering dragons... whoa! Or _italic_ enough to make Shakespeare jealous. Or... wait for it... **_both!_** It's like wearing a unicorn riding a T-Rex costume!

// Feeling rebellious? Feel free to go crazy ~~crossing stuff out~~. Let the chaos reign!

// There's also [links](https://www.freecodecamp.org), like secret passages in the labyrinth of the internet. Explore, if you dare!

// And if you want to get really crazy, behold the sacred tables:

// Wild Header | Crazy Header | Another Header?
// ------------ | ------------- | -------------
// Your content can | be here, and it | can be here... **No, really, it can!**
// And here. | Okay. | I think we get it. *Or do we?*

// - And of course, there are lists. Not just any lists, but lists so fabulous they put disco balls to shame.
//   - Some are bulleted. Like shooting stars in the night sky.
//      - With different indentation levels. It's like navigating through the levels of a video game, but with words.
//         - That look like this. *Magic, right?*

// 1. And there are numbered lists too. Numbers marching in line like disciplined soldiers.
// 1. Use just 1s if you want! Because why settle for anything less than number one?
// 1. And last but not least, let's not forget embedded images. Pictures worth a thousand words... or maybe just a few emojis:

// ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) *Isn't it cute?*

// Prepare yourself, brave traveler, for a journey through the whimsical world of Markdown! 🚀🦄✨



