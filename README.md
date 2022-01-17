### ! Some specific implementation information regarding project structure and components in this readme is outdated. 

# Improvements

The new website is snappier and better optimized than the previous.

|             | Size        | Avg. Load time    |
| ----------- | ----------- | -----------  |
| Old site home page    | 8.36 MB     | 10.8 Seconds |
| Entire new site    | 2.43 MB     | 2.6 Seconds |

## Controlled loading

After the initial load, subsequent navigation from page to page will not require further requests from the server. That 2.6 seconds caches the whole website, excluding external content (like the YouTube videos on the About page). The code is optimized and the images are compressed to the extent appropriate for their use case.

Rather than leaving standard anchor tags to do their duty, the default PopStateEvent is hijacked and prevented. The browser's history object is modified, and the target content is rendered from cache. It behaves like a normal website, but has the speed of a local document.

In 2021, Local Muscle's most demanding month for bandwidth was August,
using 12 GB of transfer. With our new website, we are unlikely to ever exceed
5GB total. That would allow us to utilize Firebase's (where the demo is currently
hosted) free tier (limited to 10GB/month). That's **free hosting**.

The only costs incurred are from the cloud function (not accessible in this git) handling emails. This should never exceed more than the price of a cup of coffee.

## Accessibility

The new website is ready for screen readers and other impairment software. Text tested for contrast compliance. Important screen elements use tabindex for input compatibility.

###

# Editing Page Content

All pages are store directly in `src/pages/` as a `.js` file. The exception being the home page, which is nested in a folder at `src/pages/Landing/`.

The pages are JSX, which is very much like normal HTML. The page at `/call` contains an element made of the following code: 

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

# Layout Components

## `<Container>`

There are 4 attributes you can pass to a `<Container>`:

**`title`** a title for the container, which will display as an `<h1>` element and receive an element `#id` based on the given title.

**`bgColor`** can receive HTML color values, such as #ccc or rgb(150,150,150), or a special term 'dark' which will color background a dark grey and make text light.

**`lightText`** makes text readable against a dark background (used with `bgColor='#000000'`, for example). This is a boolean and does not need a value.

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

As an extension of `<Container>`, it receives the same properties **`title`**, **`bgColor`**, **`lightText`**, and **id** but requires additional considerations.

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