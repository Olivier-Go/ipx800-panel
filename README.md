<p align="center">
    <img src="src/assets/favicon.png" height="80">
</p>

# IPX800 Panel
### React/Redux PWA for GCE Electronics IPX800 controls with Synology Surveillance Station push notifications

![made-with-react](https://img.shields.io/badge/Made_with-React_/Redux-orange?style=flat)  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/olivier-go/ipx800-react-pwa)  [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)


![](screenshots/screen-20210807-184215.gif)

<p>
    <img src="screenshots/Screenshot_20210807-183629.png" width="180"> <img src="screenshots/Screenshot_20210807-184817.png" width="180"> <img src="screenshots/Screenshot_20210807-183701.png" width="180"> <img src="screenshots/Screenshot_20210807-184110.png" width="180"> <img src="screenshots/Screenshot_20210807-184024.png" width="180"> <img src="screenshots/Screenshot_20210807-184054.png" width="180">
</p>

***

This Progressive Web Application allows to interact remotely with the integrated API of IPX800 v3 device from GCE Electronics.

It also allows to trigger push notifications of Synology Surveillance Station system for videoprotection applications.

***

### Launch dev :

Rename `.env.development.dist` to `.env.development` and set IPX800 and Synology Surveillance Station API url and authentication informations, for development environment.

```sh
# install dependencies
yarn
```
```sh
# launch dev server (listening on http://localhost:8080/)
yarn start
```


### Build :

Rename `.env.production.dist` to `.env.production.dist` and set IPX800 and Synology Surveillance Station API url and authentication informations, for production environment.

```sh
yarn build
```

Deploy it on a webserver and enjoy :-)
