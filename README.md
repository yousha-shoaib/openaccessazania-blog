<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://openaccessazania-blog.vercel.app/_next/image?url=%2Fimages%2Foaa-logo.png&w=384&q=75" alt="Logo" width="200" height="80">
  </a>

  <h3 align="center">Open Access Azania Blog</h3>

  <p align="center">
    An simple full-stack blog application built with NextJS using a Neubrutalist style. 
    <br />
    <a href="https://openaccessazania-blog.vercel.app/">View Deployment</a>
    ·
    <a href="https://github.com/yousha-shoaib/openaccessazania-blog/issues">Report Bug</a>
    ·
    <a href="https://github.com/yousha-shoaib/openaccessazania-blog/pulls">Create Pull Request</a>
  </p>
</div>

<!-- PROJECT SHIELDS -->
![](https://img.shields.io/github/contributors/yousha-shoaib/openaccessazania-blog?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/yousha-shoaib/openaccessazania-blog?style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/yousha-shoaib/openaccessazania-blog?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/yousha-shoaib/openaccessazania-blog?style=for-the-badge)
![GitHub License](https://img.shields.io/github/license/yousha-shoaib/openaccessazania-blog?style=for-the-badge)


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://raw.githubusercontent.com/yousha-shoaib/resource-dump/main/oaa-blog.png)

As someone that is actively involved in academic, activst and free-lance development/teaching spaces I strongly belive that Open Access is paramount to ensuring that access to information remains unrestricted for all.

Open Access Azania is a project I've wanted to start for a long time. I was largely inspired by Aaron Swartz who still to this day remains one of the greatest champions of Open Access even after his tragic passing in 2016.

This blog, I hope, will serve to be more than just a portfolio project and an empty platitude. Hopefull, it blossoms into a sprawling coallation of activists' and ideas from the contient comming together to fight for just access for all!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

The Open Access Azania blog would not be possible without any of these open-source, free-to-use frameworks and libraries:

[![Next][Next.js]][Next-url] 
[![React][React.js]][React-url]
[![ESLint][Eslint]][ESLint-url]
[![Prisma][Prisma]][Prisma-url]
[![TypeScript][TypeScript]][TypeScript-url]
[![HTML5][HTML5]][HTML5-url]
[![CSS3][CSS3]][CSS3-url]
[![Vercel][Vercel]][Vercel-url]
[![TailwindCSS][TailwindCSS]][TailwindCSS-url]
[![NPM][NPM]][NPM-url]
[![Postgres][Postgres]][Postgres-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Running Project Locally

If you'd like to clone and work on the project locally follow the below instructions.

### Step 1: Install Required Packages

All of the packages required are specified in the `package.json` file you just need to run the install script:

```sh
npm install
```

### Step 2: Configuring Prisma & Creating Database

You'll need to create a postgres database and host it somewhere. I've used [Railway](https://railway.app) but you can use any cloud hosting provider. Some good alternatives are [Render](https://render.com) & [Heroku](https://heroku.com).

Next you'll need to copy the `DATABASE_URL` and add it to your environment variables file `.env` in the project root.

```
DATABASE_URL="xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

Now run the `npx prisma migrate dev --name intial_migration` to create the tables in your database.

### Step 3: Setting up Next-Auth with GitHub

First, create a new GitHub app in `Settings > Developer Settings > GitHub Apps > New GitHub App`

Next set the homepage and callback urls to the app url (localhost if running locally)

Generate a new client secret and copy the client id. Store them in the following environment variables

```
GITHUB_ID="client_id"
GITHUB_SECRET="client_secret"
```

Now you need to generate a secret for next-auth. You can do this in the terminal

```sh
openssl rand hex -32
``` 

Take the generated secret along with your app url (localhost if running locally) and store them in the following environment variables

```
NEXTAUTH_URL="app_base_url"
NEXTAUTH_SECRET="generated_secret"
```

### Step 4: Setting up UploadThing

You need to create a new app with [UploadThing](https://uploadthing.com) and copy the secret and app_id variables from the API Keys section. Paste the following variables into your `.env` file

```
UPLOADTHING_SECRET="secret"
UPLOADTHING_APP_ID="app_id"
```

### Step 5: Setting up Beehiiv for Newsletters (Optional)

If you'd like to take advantage of the newsletters feature you need to create a new publication and copy the api_key and publication_id variables. Paste the above variables into your `.env` file

```
BEEHIIV_API_KEY="api_key"
BEEHIV_PUBLICATION_ID="publication_id"
```

### Step 6: Run Development Server

Finally, you can now run the development server and access the site at [localhost:3000](http://localhost:3000) using `npm run dev`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

The primary functions of this site are to display and post articles. You can post articles after you have authenticated with GitHub. You can view articles from the following routes:
* all articles - `blog/all`
* create article - `blog/new`
* view specific article - `blog/{post_id}`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Core: complete README
- [x] Core: add LICENSE
- [ ] Fix: fix margin and padding rules for mobile screens
- [ ] Fix: fix upload and categories button widths in create posts page
- [ ] Feat: add markdown support for articles
- [ ] Multi-language Support
    - [ ] Zulu
    - [ ] Xhosa
    - [ ] Sesotho

See the [open issues](https://github.com/yousha-shoaib/openaccessazania-blog/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the GPLv3 License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

[![LinkedIn][linkedin-shield]][linkedin-url]

Project Link: [https://github.com/yousha-shoaib/openaccessazania-blog](https://github.com/yousha-shoaib/openaccessazania-blog)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

I'd like to acknowledge the following authors and resources for all the help they've provided with putting this project together:


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/yousha-shoaib

[product-screenshot]: https://raw.githubusercontent.com/yousha-shoaib/resource-dump/main/oaa-blog.png


[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[ESLint]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[EsLint-url]: https://eslint.org

[Prisma]: https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[Prisma-url]: https://prisma.io

[TypeScript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://typescriptlang.org

[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://postgresql.org

[CSS3]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://postgresql.org

[Vercel]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com

[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.org

[NPM]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white
[NPM-url]: https://npmjs.org

[Postgres]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://postgresql.org