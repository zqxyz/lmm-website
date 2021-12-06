# Local Muscle Website

Website content and framework for localmusclemovers.com

## Editing Page Content

All pages are store in `src/pages/` as a `.js` file. The exception being the home page, which nested in a folder located at `src/pages/Landing`.

The pages are very much like normal HTML with improved semantics. For example, the page at `/call` contains an element made of the following code: 

``<Container``  
&nbsp;&nbsp;&nbsp;&nbsp;``title='Contacting us by phone'``  
&nbsp;&nbsp;&nbsp;&nbsp;``bgColor='dark'``  
``>``  
&nbsp;&nbsp;&nbsp;&nbsp;``<p>``  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``The <strong>fastest</strong> way``  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``to get booked with us is to complete``  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``our estimate form.``  
&nbsp;&nbsp;&nbsp;&nbsp;``</p>``  
&nbsp;&nbsp;&nbsp;&nbsp;``<Link href='#'>``  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``<button className='ui blue button huge'>``  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``Get started with our estimate form``  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``</button>``  
&nbsp;&nbsp;&nbsp;&nbsp;``</Link>``  
``</Container>``

This page uses the provided `<Container>` component. Note that the C is capitalized for special componenents like this.

## `<Container>`

There are 3 attributes you can pass to a `<Container>`:

**`title`** a title for the container, which will display as an `<h1>` element and receive an element `#id` based on the given title.

**`bgColor`** can receive HTML color values, such as #ccc or rgb(150,150,150), or a special term 'dark' which will color background a dark grey and make text light.

**`lightText`** makes text readable against a dark background (used with `bgColor='#000000'`, for example). This is a boolean and does not need a value.

### Example:

``<Container``  
&nbsp;&nbsp;&nbsp;&nbsp;``title="Pricing Info"``  
&nbsp;&nbsp;&nbsp;&nbsp;``bgColor="#1C1C1C"``  
&nbsp;&nbsp;&nbsp;&nbsp;``lightText``  
``>``  
&nbsp;&nbsp;&nbsp;&nbsp;``<p>``  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``Everything is $5 except on Tuesdays 2 drinks are $6``  
&nbsp;&nbsp;&nbsp;&nbsp;``</p>``  
``</Container>``  

Values may be undefined and will use defaults without error:

``<Container>``  
&nbsp;&nbsp;&nbsp;&nbsp;``<h1>Prices</h1>``  
&nbsp;&nbsp;&nbsp;&nbsp;``<p>``  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``Everything is $5``  
&nbsp;&nbsp;&nbsp;&nbsp;``</p>``  
``</Container>``  


## `<ContainerSplitLeft>`

`<ContainerSplitLeft>` is a specialized version of `<Container>` that places the title to the left of the main content, but stacks vertically on small screens (mobile phones).'

As an extension of `<Container>`, it receives the same properties **`title`**, **`bgColor`** and **`lightText`** but requires additional considerations.

`<ContainerSplitLeft>` _requires_ a `title` property. It also must contain at least two child elements. The first element is used as a subtitle, and placed beneath the title `<h1>`.