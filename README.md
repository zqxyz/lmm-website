[Demo viewable here](https://muscle.zquint.xyz/)


# Improvements

The new website is snappier and better optimized than the previous.

|             | Size        | Avg. Load time    |
| ----------- | ----------- | -----------  |
| Old site home page    | 8.36 MB     | 10.8 Seconds |
| Entire new site    | 2.43 MB     | 2.6 Seconds |

## Controlled loading

After the initial load, subsequent navigation from page to page will not require further requests from the server. That 2.6 seconds caches the whole website, excluding external content (like the YouTube videos on the About page). The code is optimized and the images are compressed to the extent appropriate for their use case.

Rather than leaving standard anchor tags to do their duty, the default PopStateEvent is hijacked and prevented. The browser's history object is modified, and the target content is rendered from cache. It behaves like a normal website, but has the speed of a local document.

In 2021, Local Muscle's most demanding month for bandwidth was August, using 12 GB of transfer. With our new website, we are unlikely to ever exceed 5GB total. That would allow us to utilize Firebase's (where the demo is currently hosted) free tier (limited to 10GB/month). That's **free hosting**.

The only costs incurred are from the cloud function (not accessible in this git) handling emails. This should never exceed more than 1 or 2 dollars.

## Accessibility

The new website is ready for screen readers and other impairment software. Text tested for contrast compliance. Important screen elements use tabindex for input compatibility. The design scales fluidly for users with larger font sizes enabled on their systems.

###

# JSX

All pages are stored in `src/pages/` as a `.js` file. The home page and estimate pages are nested within folders within that directory, as they are organized into multiple files. We'll go more in depth about each individual page below, in the section labeled **Editing Content**.

The pages are JSX, (which is very much like good ole HTML). The page at `/call` contains an element made of the following code: 

    <Container
        title='Contacting us by phone'
        bgColor='dark'
    >
        <p>
            The <strong>fastest</strong> way
            to get booked with us is to complete
            our estimate form.
        </p>
        <Link href='#'>
            <button className='ui blue button huge'>
                Get started with our estimate form
                </button>
        </Link>
    </Container>

This page uses the provided `<Container>` component. Note that the C is capitalized for special componenents like this.

First we'll review some provided components and then we'll go over the whole project structure and expand on editing so you know how to add, edit, and remove content, including adding new pages.

# Layout Components

## `<Container>`

There are 4 attributes you can pass to a `<Container>`:

**`title`** a title for the container, which will display as an `<h1>` element and receive an element `#id` based on the given title.

**`bgColor`** can receive HTML color values, such as #ccc or rgb(150,150,150), or a special term 'dark' which will color background a dark grey and make text light.

**`lightText`** makes text readable against a dark background (used with `bgColor='#000000'`, for example). This is a boolean and does not need a value.

**`noshadow`** don't render a box shadow. This is useful for blending two containers together. This is a boolean and does not need a value.

**`id`** provide a manually set HTML id attribute property.


### Example:

    <Container
        title="Pricing Info"
        bgColor="#1C1C1C"
        lightText
    >
        <p>
            Everything is $5 except on Tuesdays 2 drinks are $6
        </p>
    </Container>

Values may be undefined and will use defaults without error:

    <Container>
        <h1>Prices</h1>
        <p>
            Everything is $5
        </p>
    </Container>


## `<ContainerSplitRight>`

`<ContainerSplitRight>` is a specialized version of `<Container>` that places the title to the left, and the main content split to the right, but stacks vertically on small screens (mobile phones).

As an extension of `<Container>`, it receives the properties **`title`**, **`bgColor`**, **`lightText`**, and **`id`** but requires additional considerations.

`<ContainerSplitRight>` _requires_ a `title` property. It also must contain at least two child elements. The first element is used as a subtitle, and placed beneath the title `<h1>`. The first can be any type of element, like a `<button>`, but should not be the primary contents of the container.

### Example

    <ContainerSplitRight
        title="Pricing Info"
        bgColor="lightgreen"
    >
        <p>
            A breakdown of prices for items we sell at the stand
        </p>
        <ul>
            <li>Ducks -- $12</li>
            <li>Chickens -- $21</li>
            <li>Geese -- $36</li>
            <li>Turkey -- $26</li>
            <li>Pepporoni stub -- $2</li>
        </ul>
    </ContainerSplitRight>

## `<ContainerSplitLeft>`

`<ContainerSplitLeft>` also extends `<Container>` and is for placing the title and main content on the left side of a container, but leaves a smaller right column open for secondary content.

The first child element will appear on the left, and the second will appear on the right. Additional elements will render beneath the second element, on the right. It is not recommended to provided more than two children to this container. Nesting as many elements as you like within one of two given children is possible.

As an extension of `<Container>`, it receives the same properties **`title`**, **`bgColor`**, **`lightText`**, and **`id`**.

A `title` is required.

### Example

    <ContainerSplitLeft
      title="Section title"
      bgColor="#d2efdf"
    >
      <p>
       Main content goes here
      </p>
      <img src="#" alt="secondary content" />
    </ContainerSplitLeft>

## `<Banner>`

`<Banner>` provides a container with a background image and heading. It makes for a nice page heading. Image should be darkened to improve legibility of text.

3 properties are expected:

**`title`** heading to display over background image

**`imageUrl`** path to background image

**`height`** (HTML value) minimum height; helps to show more of image on wide displays.

### Example

      <Banner
        title="We're equipped to safely handle your goods"
        imageUrl='/images/equipment.jpg'
        height='350px'
      />

## `<Focus>`

A simple container for emphasizing contents

**`bgColor`** can receive HTML color values, such as #ccc or rgb(150,150,150), or a special term 'dark' which will color background a dark grey and make text light.

**`lightText`** makes text readable against a dark background (used with `bgColor='#000000'`, for example). This is a boolean and does not need a value.

**`id`** provide a manually set HTML id attribute property.

### Example

      <Focus
        bgColor='transparent'
      >
        <p style={{ fontSize: '1.5em' }}>
          "I <em>love</em> lifting heavy awkward things, and running around." - Ned Swain
        </p>
      </Focus>

## `<Columns>`

A container for evenly divided columns. Fill with 2 to 10 `<column>` elements (note lowercase c). Columns will stack when squished at widths below 768px.

### Example

    <Columns>
     <column>
      <h2>First Column</h2>
      Column contents
     </column>
     <column>
      <h2>Second Column</h2>
      Second column's contents
     </column>
     <column>
      <h2>Third Column</h2>
      <p>
       Third column. A paragraph.
      </p>
     </column>
    </Columns>

# Widget Components

## `<Checklist>`

Creates a corny notepad style checklist/todo list. Wrap items in `<>` (shorthand fragments).

## Example

    <Checklist>
     <>List item one</>
     <>List item two</>
     <>List item three</>
     <>Final list item</>
    </Checklist>

## `<Tabs>`

Seperates information into tabbed sections. Think file folders or browser tabs. Shouldn't be used for more than 3 or 4 tabs.

Provide **`<tab>`** elements as children, and give each a `title` attribute, which will appear as the tab label. Keep tab titles short. One word is best. Two at most.

    <Tabs>
        <tab title='First tab'>
            <h2>
                Some subheading
            </h2>
            <p>
                Body of first tab goes here.
            </p>
        </tab>
        <tab title='Second tab'>
            <h2>
                Another subheading
            </h2>
            <p>
                Body of second tab goes here.
            </p>
        </tab>
    </Tabs>

# Project Structure

The project is divided into a fairly standard React structure.

    📦 Project  
     ┣ 📂 public [1]
     ┃  ┣ 🗎 index.html [1.1]
     ┃  ┣ 📂 fonts [1.2]
     ┃  ┣ 📂 images [1.3]
     ┃  ┣ 📂 style [1.4]
     ┃  ┣ 📂 documents [1.5]
     ┃  ┣ 🗎 robots.txt [1.6]
     ┃  ┗ 🗎 favicon.ico [1.7]
     ┣ 📂 src [2]
     ┃  ┣ 📂 pages [2.1]
     ┃  ┣ 📂 config [2.2]
     ┃  ┣ 📂 components [2.3]
     ┃  ┣ 🗎 App.js [2.4]
     ┃  ┣ 🗎 index.js [2.5]
     ┃  ┣ 🗎 Link.js [2.6]
     ┃  ┣ 🗎 Route.js [2.7]
     ┃  ┣ 🗎 mail.js [2.8]
     ┃  ┗ 🗎 screenWidth.js [2.9]
     ┗ 📂 build [3]

## 1. 📂 `/public`
This folder contains static files, accessible by standard structure-representative URL. For example a file at `public/images/photo.jpg` is accessible at `website.tld/images/photo.jpg`.

### 1.1 🗎 `/public/index.html`
This file is the root of everything. Meta data, default page title, favicon, and stylesheets are loaded here. React will dynamically load everything else into this file at render time.

### 1.2 📂 `/public/fonts`
Though primary fonts are loaded in at index.html using Google web fonts service, additional fonts may be stored in this folder to load through a stylesheet.

### 1.3 📂 `/public/images`
All images, content or background, should be stored in this folder and given reasonable, human-readable names.

### 1.4 📂 `/public/style`
CSS stylesheets are stored here. Stylesheets organization should be adhered to as closely as possible.

### 1.5 📂 `/public/documents`
PDFs and other documents should be stored here. File names must be human-readable and use underscores and hyphens instead of punctuation or spaces.

### 1.6 🗎 `/public/robots.txt`
See https://moz.com/learn/seo/robotstxt

Note that search engine crawlers will not update changes to this website's page contents for up to 3 weeks. This website however, is well within the "crawl budget" for rendered content.

### 1.7 🗎 `/public/favicon.ico`
See https://en.wikipedia.org/wiki/Favicon#Use_of_favicon

## 2. 📂 `/src`
React code belongs here. This will be transpiled, minified, and obfuscated into 2 files. No secrets should be stored anywhere in the code as the code can be easily refactored and values easily extracted. API keys are not secrets, but passwords are definitely secrets.

### 2.1 📂 `/src/pages`
Think normal html or php files. This is where the copy lives. This is what the nondeveloper can modify. `About.js`, `Call.js`, `Join.js`, `Resources.js` and `Landing/Landing.js` have been specifically structured to be as easy to modify as possible. We'll go more in depth about each individual page below, in the section labeled **Editing Content**.

### 2.2 📂 `/src/config`
Some information has been abstracted out from the pages and made plainer in the form of a JSON or JS file. See **Editing Content** below.

### 2.3 📂 `/src/components`
Components, like `<Container>` and `<Tabs>`, are stored inside this directory.

### 2.4 🗎 `/src/App.js`
This file is the start of the React app code (components, copy, page content). It renders navigation and page contents based on URL.

### 2.5 🗎 `/src/index.js`
This file is the start of the script for the website: Firebase API data is stored here and `App.js` is imported and rendered into `#root` of `index.html`.

### 2.6 **&** 2.7 🗎 `/src/Link.js` and 🗎 `/src/Route.js`
PopStateEvent is hijacked and prevented. The browser's history object is modified, and the target content is rendered from cache. `<Link>` is a drop in substitute for `<a>` and must be imported to any page that uses links. Regular `<a>` elements are used for external linking. `<Route>` is used to conditionally render content based on path.

For example, placing this inside App.js:

    <Route path="test">
        <p>Important horse parade</p>
    </Route>

Will render `Important horse parade` styled as a paragraph when url `/test` is accessed. That page could be accessed from the following:

    <Link href="/test">
        Click here
    </Link>

The actual structure used in App.js and navigation is functionally mapped from `src/config/links.js`. Read more about adding pages in **Editing Content** section, below.

### 2.8 🗎 `/src/mail.js`
Exports a JS function to use Firebase Cloud Function for sending mail (for API submission failure rescue and Vermont branch's mail based lead intake). Security is handled by Cloud Function.

### 2.9 🗎 `/src/screenWidth.js`
Function for rendering content based on screen width in ways not able to be gracefully handled by media queries in stylesheets. Exports `useCurrentWidth()` which returns window width in pixels.