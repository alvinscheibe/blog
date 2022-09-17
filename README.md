<div id="top"></div>

<div align="center">
  <h3 align="center">Alvin Scheibe - Personal blog</h3>
  <p align="center">
    Browse programming tutorials and articles.
    <br />
    <br />
    <a href="https://alvinscheibe.com/">View Example</a>
    ·
    <a href="https://github.com/alvinscheibe/blog/issues">Report Bug</a>
    ·
    <a href="https://github.com/alvinscheibe/blog/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of content</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the project</a>
    </li>
    <li>
      <a href="#getting-started">Getting started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## About The Project

![Sreenshot of alvinscheibe.com](https://github.com/alvinscheibe/blog/blob/main/public/images/screenshot-home-page.png)

### Built with

* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Hygraph](https://hygraph.com/)
* [TypeScript](https://www.typescriptlang.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

Setup project locally for development.

### Prerequisites

#### Hygraph project set up
* Create or sign in to your [Hygraph](https://hygraph.com/) account.
* Click the button below to clone the Hygraph project.

[![Clone project](https://hygraph.com/button)](https://app.hygraph.com/clone/733af69f4e5a48868e4fab1b6934d4ff?name=Personal%20blog)

#### Blog set up
* npm
  ```sh
  npm install npm@latest -g
  ```
* Create `.env.local` file at the root level of the project and copy env variables from `.env.example` file. You need to populate at least this variable for development purposes.
  ```sh
  NEXT_PUBLIC_API_ENVIRONMENT_GRAPHQL=
  ```

### Installation

1. Fork the repo
2. Clone the repo
   ```sh
   git clone https://github.com/[YOUR_USERNAME]/[YOUR_FORKED_PROJECT_NAME].git
   ```
3. Install the dependencies
   ```sh
   yarn
   ```
4. Start the development server
   ```sh
   yarn dev
   ```
5. Your project will be running at http://localhost:3000

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn and create. Any contribution you make will be highly appreciated.

Feel free to fork the repository or create a pull request. And don't forget to give the project a star! 😉

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add some new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
