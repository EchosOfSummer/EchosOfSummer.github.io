# EchosOfSummer.github.io

This repository contains the personal website for **EchosOfSummer**, also known as **Neebin**. It is a small, interactive GitHub Pages website built with HTML, CSS, and vanilla JavaScript.

The site combines a personal introduction with several browser-based JavaScript exercises and interactive features, including a rotating image carousel, a persistent to-do list, and a randomly generated Pokémon viewer.

## Website Sections

### Home

The home page introduces Neebin and includes personal information, interests, favorite fantasy book series, and a profile image. It also includes a rotating image carousel with previous and next controls.

The page displays time-based welcome messages such as:

- Morning greetings
- Afternoon reminders
- Evening messages

The welcome message changes automatically every few seconds.

### To-Do List

The to-do page provides a simple task manager that runs entirely in the browser. Users can:

- Add new tasks.
- Press **Enter** to add a task quickly.
- Mark tasks as complete with checkboxes.
- Delete individual tasks.
- Keep tasks saved between browser sessions.

Tasks are stored in the browser's `localStorage`, so no server or database is required.

### Pokémon Fetcher/Generator

The Pokémon page uses the public [PokéAPI](https://pokeapi.co/) to retrieve Pokémon data dynamically.

The page can:

- Fetch random Pokémon from the API.
- Display Pokémon sprite images.
- Show a three-image carousel.
- Move to the next or previous Pokémon set.
- Automatically advance the carousel every five seconds.
- Display Pokémon names through image alt text.

Because this feature depends on an external API, an internet connection is required for Pokémon data to load.

## Features

- Personal homepage and profile content.
- Responsive viewport configuration for different screen sizes.
- Shared navigation between website pages.
- Custom visual styling with HTML and CSS.
- Automatic time-based welcome messages.
- Image carousel with previous and next controls.
- Automatic carousel rotation.
- Persistent browser-based to-do list.
- Completed-task checkboxes.
- Delete controls for to-do items.
- Random Pokémon generation through PokéAPI.
- Local browser storage using `localStorage`.
- Static hosting through GitHub Pages.

## Technologies Used

- **HTML5** — page structure and content.
- **CSS3** — layout, colors, navigation, carousel animations, buttons, and form styling.
- **JavaScript** — page behavior and interactive functionality.
- **Web Storage API** — local persistence for to-do items and the small JavaScript demonstration on the home page.
- **Fetch API** — retrieving Pokémon data from PokéAPI.
- **GitHub Pages** — static website hosting.

No build system, framework, package manager, or backend server is required.

## Project Structure

```text
EchosOfSummer.github.io/
├── index.html              # Personal homepage
├── todoList.html           # Interactive to-do list page
├── pokemon.html            # Pokémon fetcher and carousel page
├── css/
│   └── styles.css          # Shared styles and carousel layout
├── javaScript/
│   ├── site.js              # Welcome messages and homepage carousel
│   ├── todo.js              # To-do list behavior and localStorage logic
│   └── poke.js              # PokéAPI requests and Pokémon carousel
├── img/                    # Website images and profile artwork
└── .gitignore              # Git ignore rules
```

## How the Website Works

### Homepage JavaScript

`javaScript/site.js` controls the dynamic behavior of the homepage. When the page loads, it determines the current time and displays a contextual greeting. The greeting cycles automatically.

The same file also manages the homepage image carousel. It assigns active, previous, and next states to the visible images and changes the carousel automatically every five seconds. Users can also control it manually with the navigation buttons.

### To-Do List JavaScript

`javaScript/todo.js` loads saved tasks from `localStorage` using the `todo-list` storage key. Each task contains text and a completed state.

When a task is added, completed, or deleted, the current list is serialized to JSON and saved back to the browser. Refreshing the page does not remove the tasks unless the browser storage is cleared.

### Pokémon JavaScript

`javaScript/poke.js` uses the Fetch API to request random Pokémon from PokéAPI. The response is converted to JSON and the returned sprite data is used to update image elements on the page.

The Pokémon carousel maintains three Pokémon entries at a time. The center image is styled as active, while the surrounding images are styled as previous and next items. The carousel can be moved manually or advances automatically.

## Running Locally

Because this is a static website, it can be opened directly in a browser. However, using a local development server is recommended so that paths and browser behavior more closely match GitHub Pages.

### Option 1: Open Directly

1. Clone the repository:

   ```bash
   git clone https://github.com/EchosOfSummer/EchosOfSummer.github.io.git
   cd EchosOfSummer.github.io
   ```

2. Open `index.html` in a web browser.
3. Use the navigation links to view the other pages.

### Option 2: Use a Local Server

If Python is installed, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

Other static development servers, including the Visual Studio Code Live Server extension, can also be used.

## Deployment

The repository is configured as a GitHub Pages website repository. Changes pushed to the configured publishing branch can be deployed by GitHub Pages.

The expected public address for the site is:

```text
https://echosofsummer.github.io/
```

To manage deployment settings, open the repository's **Settings**, select **Pages**, and verify the publishing source and branch.

## External Dependencies

The site has no installed JavaScript dependencies. The Pokémon page makes requests to:

- `https://pokeapi.co/api/v2/pokemon/`

The homepage carousel also references image assets hosted by Pexels. These external resources may require an internet connection and can be affected by third-party availability or URL changes.

## Data and Privacy

- To-do items are saved only in the visitor's browser using `localStorage`.
- To-do data is not uploaded to a server by this project.
- Pokémon information is requested from PokéAPI when the Pokémon page is used.
- The website does not currently include user accounts, authentication, or a custom backend.

## Current Limitations

- The to-do list is device- and browser-specific.
- Clearing browser storage removes saved to-do items.
- There is no cloud synchronization between browsers or devices.
- The About and Contact navigation links are currently placeholders.
- The Pokémon page requires access to PokéAPI.
- External image URLs may stop working if the third-party source changes.
- The website does not currently include automated tests.
- Some layout values are fixed for the current design and may need additional responsive styling for smaller screens.

## Possible Future Improvements

Potential enhancements include:

- Add working About and Contact pages.
- Add editing support for existing to-do items.
- Add task filtering, sorting, and a clear-completed option.
- Add error handling and loading indicators for PokéAPI requests.
- Display Pokémon types, abilities, and descriptions.
- Add responsive improvements for mobile devices.
- Replace external image links with locally managed assets where appropriate.
- Add accessibility improvements such as clearer focus states and more descriptive controls.
- Add automated JavaScript tests.
- Add a custom favicon and improved page titles.
- Add a formal license and contribution guidelines.

## Contributing

This is a personal website and learning project, but suggestions and improvements are welcome. To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make and test your changes locally.
4. Commit your changes with a descriptive message.
5. Open a pull request explaining the update.

## License

No license has currently been specified for this repository. Add a license file if you want to define how others may use, modify, and distribute the website code and content.
